module.exports = function getOccupiedPositions(shipsDetailsArray) {
  return shipsDetailsArray.map(shipDetails => shipDetails.positions).flat();
}