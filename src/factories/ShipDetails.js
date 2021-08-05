module.exports = function ShipDetails(positions, ship) {
  const matches = function(testPosition) {
    return positions.some(iteratedPos => positionsAreEqual(iteratedPos, testPosition))
  }

  const positionsAreEqual = function(pos1, pos2) {
    return (pos1[0] === pos2[0] && pos1[1] === pos2[1])
  }

  const getPositionIndex = function(testPosition) {
    return positions.findIndex(pos => positionsAreEqual(pos, testPosition))
  }

  const markPositionHit = function(targetPosition) {
    const positionIndex = getPositionIndex(targetPosition);
    ship.hit(positionIndex)
  }


  return {ship, positions, matches, markPositionHit}
}