const createCustomElement = require("./createCustomElement.js")

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

const displayMessage = function(wrapperId, messageId, message) {
  //Insert message into message element
  const wrapperEl = document.getElementById(wrapperId);
  wrapperEl.textContent = "";
  const messageEl = createCustomElement("DIV", "message", message);
  messageEl.id = messageId;
  wrapperEl.appendChild(messageEl)
  //disappear message after 3s
  setTimeout(() => {
    messageEl.remove();
  }, 3000)
}

const displayIllegalMessage = function(message) {
  displayMessage("error-message-wrapper", "error-message", message)
}

const addNewGameBtn = function() {
  const newGameBtn = createCustomElement("BTN", "", "New Game?");
  newGameBtn.id = "new-game-btn";
  const victoryDisplay = document.getElementById("victory-display");
  victoryDisplay.appendChild(newGameBtn);
}

const displayVictory = function(victor) {
  let message;
  if (victor.isComputer) {
    message = "Rats! Computer wins..."
  } else if (victor.name) {
    message = `Congratulations, ${victor.name}, you win!`
  } else {
    message = "Congratulations, you win!"
  }
  //Display the victory message
  displayMessage("victory-message-wrapper", "victory-message", message)

  addNewGameBtn();
}

module.exports = {displayIllegalMessage, updateBoard, displayVictory}