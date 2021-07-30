const getPositionDivFromCoors = function(coors, gameboardPositions) {
  return gameboardPositions[((coors[0] - 1) * 10 + coors[1] - 1)];
}

const applyToPositions = function(coors, gameboardPositions, callback, callbackArgs) {
  coors.forEach(coors => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), ...callbackArgs);
  });
}

const applyArrayToPositions = function(coors, gameboardPositions, callback, array) {
  coors.forEach(coors => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), array[0]);
  });
}

const addClassToPosition = (position, className) => position.classList.add(className);

const addInitialToHitPosition = (position, initial) => position.textContent = initial;




const updateBoard = function(offensivePlayer) {
  //Get the gameboard positions DOMCollection of the defensive player
  const defensiveName = offensivePlayer.isComputer ? "human" : "computer"
  const defensiveGameboard = document.getElementById(`${defensiveName}-gameboard`)
  const gameboardPositions = defensiveGameboard.getElementsByClassName("position")

  const shots = offensivePlayer.getShots()

  //Add the appropriate class to new "missed" positions
  const missedCoors = shots.missed.map(shot => shot.coors)
  applyToPositions(missedCoors, gameboardPositions, addClassToPosition, ["missed"])

  //Add the appropriate class to new "hit" positions
  //Insert the initial of the hit ship into the "hit" positions
  const hitCoors = shots.hit.map(shot => shot.coors);
  const hitShipsInitials = shots.hit.map(shots => shots.shipName[0]);
  applyToPositions(hitCoors, gameboardPositions, addClassToPosition, ["hit"])
  applyArrayToPositions(hitCoors, gameboardPositions, addInitialToHitPosition, hitShipsInitials)
  
  //Add the appropriate class to new "sunk" positions
  const sunkCoors = shots.sunk.map(shot => shot.coorsSet).flat();
  applyToPositions(sunkCoors, gameboardPositions, addClassToPosition, ["sunk"])
}

const displayIllegalMessage = function(message) {
  //Insert message into message element
  const messageEl = document.getElementById("error-message");
  messageEl.textContent = message;
  //disappear message after 3s
  setTimeout(() => {
    messageEl.textContent = "";
  }, 3000)
}

const displayVictory = function() {

}

module.exports = {displayIllegalMessage, updateBoard, displayVictory}