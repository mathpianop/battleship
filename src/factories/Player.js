const coordinatesExist = require("../helpers/coordinatesExist");

function Player(name, isComputer) {
  const hitShots = []
  const missedShots = []
  const sunkPositions = []
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


  const includesCoordinates = function(array, coors) {
    return !!array.map(shots => shots.coors).find(coordinates => {
      return (
        coors[0] === coordinates[0] &&
        coors[1] === coordinates[1]
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
    return shots.hit.filter(shots => {
      return shots.shipName === shipName
    }).map(shots => shots.coors)
  }

  const receiveReport = function(attackReport) {
    //Add shot to either shots.hit or shots.missed
    if (attackReport.hit) {
      shots.hit.push(
        {
          coors: attackReport.coors,
          shipName: attackReport.shipName
        } 
      )
    } else {
      shots.missed.push(
        {
          coors: attackReport.coors
        }
      )
    }

    //If the shot has sunk target, add shot to shots.sunk
    if(attackReport.sunk) {
      shots.sunk.push(
        {
          coorsSet: getShipCoordinates(attackReport.shipName),
          shipName: attackReport.shipName
        }
      )
    }

  }

  

  return {
    illegalMoveMessage, 
    getComputerMove, 
    receiveReport, 
    get shots() {
      return shots
    }, 
    isComputer, 
    name
  }
  
}

module.exports = Player;
