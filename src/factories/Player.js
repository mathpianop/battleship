const coordinatesExist = require("../helpers/coordinatesExist");

function Player(isComputer) {
  const shots = {
    hit: [],
    missed: [],
    sunk: []
  }

  

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

  const getShipCoordinates = function(shipName) {
    return shots.hit.filter(shot => {
      return shot.shipName === shipName
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
      attackReport.shipCoors = getShipCoordinates(attackReport.shipName)
      shots.sunk.push(attackReport)
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
