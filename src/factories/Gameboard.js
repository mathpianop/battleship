const Ship = require("./Ship");
const ShipDetails = require("./ShipDetails")
const AttackReport = require("./AttackReport");
const legalPlacement = require("../helpers/legalPlacement")


function Gameboard() {
  const shipDetailsArray = [];
  let attackReport = {};

  

  const illegalPlacementError = function(positions) {
    const message = legalPlacement.illegalPlacementMessage(shipDetailsArray, positions);
    if (message) {
      throw new Error(message)
    }
  }

  

  const getHitShipDetails = function(targetCoors) {
    return shipDetailsArray.find(shipDetails => {
      return shipDetails.matches(targetCoors)
    })
  }

  
  const receiveAttack = function(targetCoors) {
    const hitShipDetails = getHitShipDetails(targetCoors);
    if (hitShipDetails) {
      //If a ship is hit, call the hit method on the hitShip
      hitShipDetails.markPositionHit(targetCoors);
    } 
    //Update the attackReport
    setAttackReport(targetCoors, hitShipDetails);
  }

  const setAttackReport = function(coors, hitShipDetails) {
    attackReport = (
      hitShipDetails ? AttackReport(coors, hitShipDetails.ship) : AttackReport(coors)
    )
  }

  const allSunk = function() {
    if (shipDetailsArray.length === 0) {
      return false
    } else {
      return shipDetailsArray.every(shipDetails => shipDetails.ship.isSunk())
    }
  }

  // Create new Ship object and add to ships unless
  // out of bounds
  const placeShip = function(shipDetails) {
    shipDetailsArray.push(shipDetails)
  }

  const placeComputerShips = function() {

  }
  
  return {
    get shipDetailsArray() {
      return shipDetailsArray;
    },
    get attackReport() {
      return attackReport;
    },
    placeShip, 
    receiveAttack,
    allSunk, 
    placeComputerShips
  }
}

module.exports = Gameboard;