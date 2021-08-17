const coordinatesExist = require("../helpers/coordinatesExist");
const ExposedTarget = require("../factories/ExposedTarget");
const { validate } = require("webpack");

function Player(isComputer) {
  const shots = {
    hit: [],
    missed: [],
    sunk: []
  }

  const exposedTargets = [];
   
  const illegalMoveMessage = function(coors) {
    if (!coordinatesExist(coors)) {
      return "Those coordinates are nonexistant"
    } else if (includesCoordinates(shots.hit, coors)) {
      return "Those coordinates have already been hit"
    } else if (includesCoordinates(shots.missed, coors)) {
      return "Those coordinates have already been shot at and missed"
    } 
  }


  const includesCoordinates = function(shotsArray, testCoors) {
    return !!shotsArray.map(shot => shot.coors).find(coordinates => {
      return (
        testCoors[0] === coordinates[0] &&
        testCoors[1] === coordinates[1]
      )
    })
  }

  const getComputerMove = function() {
    let computerMove;
    //return an array with 2 coordinates between 1 and 10 that isn't
    //in the hitShots or missedShots arrays
    do {
      computerMove = [
        Math.floor(Math.random() * 10 + 1),
        Math.floor(Math.random() * 10 + 1)
      ]
    } while (includesCoordinates(shots.hit.concat(shots.missed), computerMove))   
    return computerMove;
  }

  const determineOrientation = function(ship, initialHitPosition) {
    const allShots = shots.hit.concat(shots.missed);
    
    //Start at the initialHitPosition, and go to the right until an attacked position is found
    let firstRighthandAttackedPos = initialHitPosition;
    while (!includesCoordinates(allShots, firstRighthandAttackedPos)) {
      firstRighthandAttackedPos[0]++
    }
    //Start at the initialHitPosition, and go to the left until an attacked position is found
    let firstLefthandAttackedPos = initialHitPosition;
    while (!includesCoordinates(allShots, firstLefthandAttackedPos)) {
      firstLefthandAttackedPos[0]--
    }
    //Start at the initialHitPosition, and go up until an attacked position is found
    let firstUpwardAttackedPos = initialHitPosition;
    while (!includesCoordinates(allShots, firstUpwardAttackedPos)) {
      firstUpwardAttackedPos[0]++
    }
    //Start at the initialHitPosition, and go down until an attacked position is found
    let firstDownwardAttackedPos = initialHitPosition;
    while (!includesCoordinates(allShots, firstDownwardAttackedPos)) {
      firstDownwardAttackedPos[0]--
    }

    const horizontalSpace = firstRighthandAttackedPos[0] - firstLefthandAttackedPos[0] - 1;
    const verticalSpace = firstUpwardAttackedPos[1] - firstDownwardAttackedPos[0] - 1;

    if (horizontalSpace < ship.length) {
      //If there's not enough potential horizontal space, the orientation must be vertical
      return "vertical";
    } else if (verticalSpace < ship.length) {
      //If there's not enough potential horizontal space, the orientation must be vertical
      return "horizontal";
    }
  }


  const createNewTarget = function(ship, initialHitPosition) {
    const orientation = determineOrientation(ship, initialHitPosition);
    return ExposedTarget(ship, orientation)
  }

  const addOrUpdateTarget = function(ship, hitPosition) {
    const target = exposedTargets.find(tar => tar.ship.name === ship.name);
    if (target) {
      //If target exists, add the hit position
      target.addHitPosition(hitPosition)
    } else {
      //If target does not exist, initialize it and add it to exposedTargets
      exposedTargets.push(createNewTarget(ship, hitPosition))
    }
  }

  const removeTarget = function(ship) {
    exposedTargetNames = exposedTargets.map(target => target.ship.name)
    const targetIndex = exposedTargets.indexOf(ship.name)
    exposedTargets.splice(targetIndex, 1);
  }

  const updateComputerStrategy = function(attackReport) {
    if (attackReport.hit) {
      addOrUpdateTarget(attackReport.ship, attackReport.coors)
    } else if (attackReport.sunk) {
      removeTarget(attackReport.ship)
    }
  }

  // const getComputerMove = function() {

  // }

  const getShipCoordinates = function(shipName) {
    return shots.hit.filter(shot => {
      return shot.shipName === shipName
    }).map(shot => shot.coors)
  }

  const updateComputerStrategy = function(attackReport) {
    if (attackReport.hit) {
      addOrUpdateTarget(attackReport.ship, attackReport.coors)
    } else if (attackReport.sunk) {
      removeTarget(attackReport.ship)
    }
  }

  const receiveReport = function(attackReport) {
    //Add shot to either shots.hit or shots.missed
    if (attackReport.hit) {
      shots.hit.push(attackReport)
    } else  {
      shots.missed.push(attackReport)
    }

    //If the shot has sunk target, add shot to shots.sunk
    if(attackReport.sunk) {
      //Add shipCoors property
      attackReport.shipCoors = getShipCoordinates(attackReport.shipName)
      shots.sunk.push(attackReport)
    }

    //If the player is the computer, record the necessary details for strategy
    if (isComputer) {
      updateComputerStrategy(attackReport);
    }
  }

  


  return {
    illegalMoveMessage, 
    getComputerMove, 
    receiveReport, 
    get shots() {
      return shots
    }, 
    isComputer
  }
  
}

module.exports = Player;
