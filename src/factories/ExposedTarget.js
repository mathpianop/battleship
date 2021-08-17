function ExposedTarget(ship, initialOrientation) {
let orientation = initialOrientation
const hitPositions = [];

const determineOrientation = function() {
  const firstHit = hitPositions[0];
  const secondHit = hitPositions[1]
  if (firstHit[0] === secondHit[0]) {
    //xCoors are constant
    return "vertical"
  } else if (firstHit[1] === secondHit[1]) {
    //yCoors are constant
    return "horizontal"
  }
}

const getExtremeCoor = function(maxOrMin) {
  if (orientation === "horizontal") {
    //For horizontal orientation, return max/min x-coordinate
    return hitPositions.map(pos => pos[0]).reduce((prevCoor, currentCoor) => {
      return Math[maxOrMin](prevCoor, currentCoor)
    });
  } else if (orientation === "vertical") {
    //For vertical orientation, return max/min y-coordinate
    return hitPositions.map(pos => pos[1]).reduce((prevCoor, currentCoor) => {
      return Math[maxOrMin](prevCoor, currentCoor)
    });
  }
}


//Return hypothetical positions agnostic of adjacent hits/misses, or even off-the-board positions
const calculateHypotheticalPositions = function() {
  if (orientation === "vertical") {
    const constantXCoor = hitPositions[0][0];
    return [
      [constantXCoor, getExtremeCoor("max") + 1],
      [constantXCoor, getExtremeCoor("min") - 1]
    ]
  } else if (orientation === "horizontal") {
    const constantYCoor = hitPositions[0][1];
    return [
      [getExtremeCoor("max") + 1, constantYCoor],
      [getExtremeCoor("min") - 1, constantYCoor]
    ]
  } else {
    const xCoor = hitPositions[0][0];
    const yCoor = hitPositions[0][1];
    return [
      [xCoor, yCoor + 1],
      [xCoor, yCoor - 1],
      [xCoor + 1, yCoor],
      [xCoor - 1, yCoor]
    ]
  }
}

const addHitPosition = function(position) {
  hitPositions.push(position);
  //If this is the second hit position to be added, set the orientation if necessary
  if (hitPositions.length === 2 && !orientation) {
    orientation = determineOrientation();
  }
}

  return {
    get ship() {
      return ship;
    },
    addHitPosition,
    get hypotheticalPositions() {
      return calculateHypotheticalPositions();
    }  
  }
}


module.exports = ExposedTarget;