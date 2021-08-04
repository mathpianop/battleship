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
  coors.forEach((coors, idx) => {
    callback(getPositionDivFromCoors(coors, gameboardPositions), array[idx]);
  });
}

const addClassToPosition = (position, className) => position.classList.add(className);

const addInitialToHitPosition = (position, initial) => position.textContent = initial;



const updateBoard = function(allShots, playerIsComputer) {
  
  const offensiveName = (playerIsComputer ? "computer" : "human")
  const defensiveName = (playerIsComputer ? "human" : "computer")

  //Get the gameboard positions DOMCollection of the defensive player
  const defensiveGameboard = document.getElementById(`${defensiveName}-gameboard`)
  const gameboardPositions = defensiveGameboard.getElementsByClassName("position")

  //Add the appropriate class to "missed" positions
  const missedCoors = allShots[offensiveName].missed.map(shot => shot.coors)
  applyToPositions(missedCoors, gameboardPositions, addClassToPosition, ["missed"])

  //Add the appropriate class to "hit" positions
  //Insert the initial of the hit ship into the "hit" positions
  const hitCoors = allShots[offensiveName].hit.map(shot => shot.coors);
  const hitShipsInitials = allShots[offensiveName].hit.map(shots => shots.shipName[0]);
  console.log(hitShipsInitials)
  applyToPositions(hitCoors, gameboardPositions, addClassToPosition, ["hit"])
  applyArrayToPositions(hitCoors, gameboardPositions, addInitialToHitPosition, hitShipsInitials)
  
  //Add the appropriate class to "sunk" positions
  const sunkCoors = allShots[offensiveName].sunk.map(shot => shot.coorsSet).flat();
  applyToPositions(sunkCoors, gameboardPositions, addClassToPosition, ["sunk"])
}



const displayMessage = function(wrapperId, messageId, message, timeout) {
  //Insert message into message element
  const wrapperEl = document.getElementById(wrapperId);
  wrapperEl.textContent = "";
  const messageEl = createCustomElement("DIV", "message", message);
  messageEl.id = messageId;
  wrapperEl.appendChild(messageEl)

  if (timeout) {
    //disappear message after 3s
    setTimeout(() => {
      messageEl.remove();
    }, 3000)
  }
}

const displayIllegalMessage = function(message) {
  displayMessage("error-message-wrapper", "error-message", message, true)
}

const displayComputerResponse = function(message) {
  displayMessage("computer-response-wrapper", "computer-response", message, true)
}

const addNewGameBtn = function() {
  const newGameBtn = createCustomElement("BTN", "", "New Game?");
  newGameBtn.id = "new-game-btn";
  const victoryDisplay = document.getElementById("victory-display");
  victoryDisplay.appendChild(newGameBtn);
}

const displayVictory = function(victor/*, startNewGame*/) {
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

  //addNewGameBtn(startNewGame);
}

module.exports = {displayIllegalMessage, updateBoard, displayVictory, displayComputerResponse}