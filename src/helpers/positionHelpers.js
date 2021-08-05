const getPositionDivFromCoors = function(coors, gameboardPositions) {
  return gameboardPositions[((coors[0] - 1) * 10 + coors[1] - 1)];
}

const applyToPositions = function(coors, gameboardPositions, callback, callbackArgs) {
  coors.forEach(coors => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), ...callbackArgs);
  });
}

const applyArrayToPositions = function(coors, gameboardPositions, callback, array) {
  coors.forEach((coors, idx) => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), array[idx]);
  });
}

const addClassToPosition = (position, className) => position.classList.add(className);

const addInitialToPosition = (position, initial) => position.textContent = initial;

module.exports = {
  applyToPositions, 
  applyArrayToPositions, 
  addClassToPosition, 
  addInitialToPosition
}