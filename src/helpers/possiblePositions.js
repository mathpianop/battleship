const coordinatesExist = require("./coordinatesExist");


const includesPosition = function(positionsArray, testPosition) {
  return !!positionsArray.some(position => {
    return (
      testPosition[0] === position[0] &&
      testPosition[1] === position[1]
    )
  })
}

const calculateOrientations = function(shipLength, startPos) {
  //Create the 'up' orientation
  const upOrientation = []
  for(let i = 0; i < shipLength; i++) {
    upOrientation.push([startPos[0], startPos[1] + i])
  }

  //Create the 'down' orientation
  const downOrientation = []
  for(let i = 0; i < shipLength; i++) {
    downOrientation.push([startPos[0], startPos[1] - i])
  }

  //Create the 'right' orientation
  const rightOrientation = []
  for(let i = 0; i < shipLength; i++) {
    rightOrientation.push([startPos[0] + i, startPos[1]])
  }

  //Create the 'left' orientation
  const leftOrientation = []
  for(let i = 0; i < shipLength; i++) {
    leftOrientation.push([startPos[0] - i, startPos[1]])
  }

  return [upOrientation, downOrientation, rightOrientation, leftOrientation]
}

const calculateEndPositions = function(occcupiedPositions, shipLength, startPos) {
  const orientations = calculateOrientations(shipLength, startPos);
  //eliminate orientations that overlap with occupiedPositions or which go off the board
  const legalOrientations = orientations.filter(orientation => {
    return !orientation.some(position => {
      return includesPosition(occcupiedPositions, position) || !coordinatesExist(position)
    })
  })
  return legalOrientations.map(orientation => orientation[orientation.length - 1]);
}



const calculateStartPositions = function(occupiedPositions) {
  const startPositions = [];

  for(let i = 1; i < 11; i++) {
    for(let j = 1; j < 11; j++) {
      const pos = [i, j]
      if (!includesPosition(occupiedPositions, pos)) {
        startPositions.push(pos)
      }
    }
  }
  return startPositions
}


module.exports = {
  calculateStartPositions,
  calculateOrientations,
  calculateEndPositions
}