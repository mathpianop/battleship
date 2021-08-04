
const coordinatesExist = require("../helpers/coordinatesExist");

const positionsAreEqual = function(pos1, pos2) {
  return (pos1[0] === pos2[0] && pos1[1] === pos2[1])
}

const getMatchedPosition = function(shipDetails, position) {
  return shipDetails.positions.some(iteratedPos => positionsAreEqual(iteratedPos, position))
}

const overlapsWithPreviousPlacement = function(shipsDetails, positions) {
  return shipsDetails.some(shipDetails => {
    return positions.some(iteratedPos => getMatchedPosition(shipDetails, iteratedPos))
  })
}

//Check that all positions fall within Gameboard boundaries
const positionsAreLegal = function(positions) {
  return positions.every(position => {
    return coordinatesExist(position)
  })
}

const illegalPlacementMessage = function(shipsDetails, positions) {
  if (!positionsAreLegal(positions)) {
    return "One or more positions are out of bounds"
  } else if (overlapsWithPreviousPlacement(shipsDetails, positions)) {
    return "A ship already occupies one or more of those coordinates"
  }
}

module.exports = {illegalPlacementMessage}