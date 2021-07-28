const coordinatesExist = require("../helpers/coordinatesExist");

function Player(name, isComputer) {
  const hitShots = []
  const missedShots = []

  

  const illegalMoveMessage = function(coors) {
    if (!coordinatesExist(coors)) {
      return "Those coordinates are nonexistant"
    } else if (includesCoordinates(hitShots, coors)) {
      return "Those coordinates have already been hit"
    } else if (includesCoordinates(missedShots, coors)) {
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
    } while (includesCoordinates(hitShots.concat(missedShots), computerMove))   
    return computerMove;
  }

  const receiveReport = function(attackReport) {
    if (attackReport.hit) {
      hitShots.push(
        {
          coors: attackReport.coors,
          shipName: attackReport.shipName
        } 
      )
    } else {
      missedShots.push(
        {
          coors: attackReport.coors
        }
      )
    }
  }

  const getMissedShots = function() {
    return missedShots
  }

  const getHitShots = function() {
    return hitShots
  }

  return {illegalMoveMessage, getComputerMove, receiveReport, getMissedShots, getHitShots, isComputer}
}

module.exports = Player;
