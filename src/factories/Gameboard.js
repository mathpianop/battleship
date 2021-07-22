const Ship = require("./Ship");
const coordinatesExist = require("../helpers/coordinatesExist");
const AttackReport = require("./AttackReport");


function Gameboard() {
  const ships = [];
  let attackReport = {};

  // Add create new Ship object and add to ships unless
  // out of bounds
  const placeShip = function(positions, name) {
    const error = illegalPlacementError(positions);
    if (!error) {
      ships.push({
        ship: Ship(positions.length, name),
        positions: positions
      })
    } else {
      throw error
    }
  }

  const illegalPlacementError = function(positions) {
    if (!positionsAreLegal(positions)) {
      return new Error("One or more positions are out of bounds")
    } else if (overlapsWithPreviousPlacement(positions)) {
      return new Error("A ship already occupies one or more of those coordinates")
    }
  }

  const overlapsWithPreviousPlacement = function(positions) {
    return ships.some(ship => {
      return positions.some(iteratedPos => getMatchedPosition(ship, iteratedPos))
    })
  }
  //Check that all positions fall within Gameboard boundaries
  const positionsAreLegal = function(positions) {
    return positions.every(position => {
      return coordinatesExist(position)
    })
  }

  const getMatchedPosition = function(ship, position) {
    return ship.positions.some(iteratedPos => positionsAreEqual(iteratedPos, position))
  }

  const getHitShipInfo = function(targetCoors) {
    return ships.find(ship => getMatchedPosition(ship, targetCoors))
  }

  const getHitPositionIndex = function(hitShipInfo, targetCoors) {
    return hitShipInfo.positions.findIndex(pos => positionsAreEqual(pos, targetCoors))
  }

  const markPositionHit = function(hitShipInfo, targetCoors) {
    const positionIndex = getHitPositionIndex(hitShipInfo, targetCoors);
    hitShipInfo.ship.hit(positionIndex)
  }

  const positionsAreEqual = function(pos1, pos2) {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1])
  }


  const receiveAttack = function(targetCoors) {
    const hitShipInfo = getHitShipInfo(targetCoors);
    if (hitShipInfo) {
      //If a ship is hit, call the hit method on the hitShip
      markPositionHit(hitShipInfo, targetCoors);
    } 
    //Update the attackReport
    setAttackReport(targetCoors, hitShipInfo);
  }

  const setAttackReport = function(coors, hitShipInfo) {
    attackReport = (
      hitShipInfo ? AttackReport(coors, hitShipInfo.ship) : AttackReport(coors)
    )
  }

  const getAttackReport = function() {
    return attackReport;
  }

  const allSunk = function() {
    if (ships.length === 0) {
      return false
    } else {
      return ships.every(shipInfo => shipInfo.ship.isSunk())
    }
  }
  
  return {placeShip, receiveAttack, getAttackReport, allSunk}
}

module.exports = Gameboard;