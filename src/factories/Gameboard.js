const Ship = require("./Ship");
const AttackReport = require("./AttackReport");
const legalPlacement = require("../helpers/legalPlacement")


function Gameboard() {
  const ships = [];
  let attackReport = {};

  

  const illegalPlacementError = function(positions) {
    const message = legalPlacement.illegalPlacementMessage(ships, positions);
    if (message) {
      throw new Error(message)
    }
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

  // Create new Ship object and add to ships unless
  // out of bounds
  const placeShip = function(positions, ship) {
    const error = illegalPlacementError(positions);
    if (!error) {
      ships.push({
        ship: Ship(positions.length, ship.name),
        positions: positions
      })
    } else {
      throw error
    }
  }

  const placeComputerShips = function() {

  }
  
  return {placeShip, receiveAttack, getAttackReport, allSunk, placeComputerShips}
}

module.exports = Gameboard;