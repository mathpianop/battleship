const coordinatesExist = require("../helpers/coordinatesExist");
const ExposedTarget = require("../factories/ExposedTarget");

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

  
  const determineOrientation = function(ship, initialHitPosition) {
    const allShots = shots.hit.concat(shots.missed);
    
    //Start at the initialHitPosition, and go to the right until an attacked position is found
    let righthandBoundary = [...initialHitPosition];
    righthandBoundary[0]++;
    while (
      !includesCoordinates(allShots, righthandBoundary) &&
       coordinatesExist(righthandBoundary)
    ) {
      righthandBoundary[0]++;
    } 

    //Start at the initialHitPosition, and go to the left until an attacked position is found
    let lefthandBoundary = [...initialHitPosition];
    lefthandBoundary[0]--;
    while (
      !includesCoordinates(allShots, lefthandBoundary) &&
      coordinatesExist(lefthandBoundary)
    ) {
      lefthandBoundary[0]--;
    } 

    //Start at the initialHitPosition, and go up until an attacked position is found
    let upperBoundary = [...initialHitPosition];
    upperBoundary[1]++;
    while (
      !includesCoordinates(allShots, upperBoundary) &&
      coordinatesExist(upperBoundary)
    ) {
      upperBoundary[1]++;
    } 

    //Start at the initialHitPosition, and go down until an attacked position is found
    let lowerBoundary = [...initialHitPosition];
    lowerBoundary[1]--;
    while (
      !includesCoordinates(allShots, lowerBoundary) &&
      coordinatesExist(lowerBoundary)
    ) {      
      lowerBoundary[1]--
    } 

    const horizontalSpace = righthandBoundary[0] - lefthandBoundary[0] - 1;
    const verticalSpace = upperBoundary[1] - lowerBoundary[1] - 1;
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
    let target = exposedTargets.find(tar => tar.ship.name === ship.name);
    if (!target) {
      //If target does not exist, initialize it and add it to exposedTargets
      target = createNewTarget(ship, hitPosition)
      exposedTargets.push(target)
    }
    target.addHitPosition(hitPosition);
  }

  const removeTarget = function(ship) {
    const exposedTargetNames = exposedTargets.map(target => target.ship.name)
    const targetIndex = exposedTargetNames.indexOf(ship.name)
    exposedTargets.splice(targetIndex, 1);
  }

  const updateComputerStrategy = function(attackReport) {
    if (attackReport.hit) {
      addOrUpdateTarget(attackReport.ship, attackReport.coors)
    } else if (attackReport.sunk) {
      removeTarget(attackReport.ship)
    }
  }

  const getRandomMove = function() {
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


  const getComputerMove = function() {
    if (exposedTargets.length === 0) {
      return getRandomMove();
    } else {
      const currentTarget = exposedTargets[0];
      //Return a hypothetical position that hasn't been attacked and is on the board
      return currentTarget.hypotheticalPositions.find(position => {
        return (
          !includesCoordinates(shots.hit.concat(shots.missed), position) &&
          coordinatesExist(position)
        )
      })
    }
  }

  const getShipCoordinates = function(shipName) {
    return shots.hit.filter(shot => {
      return shot.ship.name === shipName
    }).map(shot => shot.coors)
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
      attackReport.shipCoors = getShipCoordinates(attackReport.ship.name)
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
