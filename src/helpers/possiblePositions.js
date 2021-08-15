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

const isViableStartPosition = function(occupiedPositions, shipLength, startPos) {
   //Check if start position is unoccupied and has at least one end viable end position
  return (
    !includesPosition(occupiedPositions, startPos) &&
    (calculateEndPositions(occupiedPositions, shipLength, startPos).length > 0)
  )
}



const calculateStartPositions = function(occupiedPositions, shipLength) {
  const startPositions = [];
  for(let i = 1; i < 11; i++) {
    for(let j = 1; j < 11; j++) {
      const pos = [i, j]
      if (isViableStartPosition(occupiedPositions, shipLength, pos) ) {
        startPositions.push(pos)
      }
    }
  }
  return startPositions
}

const getPositionsFromEndpoints = function(startPos, endPos) {
  const positions = [];
  if (startPos[0] === endPos[0]) {
    //Vertical cases
    const xCoor = startPos[0]
    if (startPos[1] < endPos[1]) {
      //Up case
      for (let yCoor = startPos[1]; yCoor <= endPos[1]; yCoor++) {
        positions.push([xCoor, yCoor])
      }
    } else if (startPos[1] > endPos[1]) {
      //Down case
      for (let yCoor = startPos[1]; yCoor >= endPos[1]; yCoor--) {
        positions.push([xCoor, yCoor])
      }
    }
  } else if (startPos[1] === endPos[1]) {
    //Horizontal cases
    const yCoor = startPos[1]
    if (startPos[0] < endPos[0]) {
      //Right case
      for (let xCoor = startPos[0]; xCoor <= endPos[0]; xCoor++) {
        positions.push([xCoor, yCoor])
      }
    } else if (startPos[0] > endPos[0]) {
      //Left case
      for (let xCoor = startPos[0]; xCoor >= endPos[0]; xCoor--) {
        positions.push([xCoor, yCoor])
      }
    }
  }

  return positions;
}

const randomElementFromArray = function(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex]
}

const getComputerPlacement = function(occupiedPositions, shipLength) {
  console.log(shipLength)
  //Calculate a random start position
  const possibleStartPositions = calculateStartPositions(occupiedPositions, shipLength)
  const startPos = randomElementFromArray(possibleStartPositions);

  //Calculate a random end position
  const possibleEndPositions = calculateEndPositions(occupiedPositions, shipLength, startPos)
  const endPos = randomElementFromArray(possibleEndPositions);

  return getPositionsFromEndpoints(startPos, endPos);
}


module.exports = {
  calculateStartPositions,
  calculateOrientations,
  calculateEndPositions,
  getPositionsFromEndpoints,
  getComputerPlacement
}