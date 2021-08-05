
const coordinatesExist = require("../helpers/coordinatesExist");


const overlapsWithPreviousPlacement = function(shipDetailsCollection, positions) {
  return shipDetailsCollection.some(shipDetails => {
    return positions.some(position => shipDetails.matches(position))
  })
}

//Check that all positions fall within Gameboard boundaries
const positionsAreLegal = function(positions) {
  return positions.every(position => {
    return coordinatesExist(position)
  })
}

const illegalPlacementMessage = function(shipDetailsCollection, positions) {
  if (!positionsAreLegal(positions)) {
    return "One or more positions are out of bounds"
  } else if (overlapsWithPreviousPlacement(shipDetailsCollection, positions)) {
    return "A ship already occupies one or more of those coordinates"
  }
}

module.exports = {illegalPlacementMessage}