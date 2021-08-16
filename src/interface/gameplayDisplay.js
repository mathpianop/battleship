const createCustomElement = require("./createCustomElement.js")
const {
  applyToPositions, 
  applyArrayToPositions, 
  addClassToPosition, 
  addInitialToPosition
} = require("../helpers/positionHelpers")




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
  applyToPositions(hitCoors, gameboardPositions, addClassToPosition, ["hit"])
  applyArrayToPositions(hitCoors, gameboardPositions, addInitialToPosition, hitShipsInitials)
  
  //Add the appropriate class to "sunk" positions
  const sunkCoors = allShots[offensiveName].sunk.map(shot => shot.shipCoors).flat();
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



const displayComputerResponse = function(message) {
  displayMessage("computer-response-wrapper", "computer-response", message, true)
}

const addNewGameBtn = function(startNewGame) {
  //Create button
  const newGameBtn = createCustomElement("BUTTON", "", "New Game");
  newGameBtn.id = "new-game-btn";
  //Attach listener
  newGameBtn.addEventListener("click", () => {
    //Remove button, clean out victory message, and start new game
    newGameBtn.remove();
    removeVictoryMessage();
    startNewGame();
  })
  //Append button
  const victoryDisplay = document.getElementById("victory-display");
  victoryDisplay.appendChild(newGameBtn);
}

const displayVictory = function(victor, startNewGame) {
  let message;
  if (victor.isComputer) {
    message = "Rats! Computer wins..."
  } else {
    message = "Congratulations, you win!"
  }
  //Display the victory message
  displayMessage("victory-message-wrapper", "victory-message", message)

  addNewGameBtn(startNewGame);
}

const removeVictoryMessage = function() {
  const victoryMessageWrapper = document.getElementById("victory-message-wrapper");
  victoryMessageWrapper.textContent = "";
}

const displayGameInstruction = function() {
  const gameInstructionWrapper = document.getElementById("game-instruction-wrapper");
  const gameInstruction = createCustomElement("SPAN", "message", "Click on positions on the target board to make shots");
  gameInstruction.id = "game-instruction";
  gameInstructionWrapper.appendChild(gameInstruction);
}

const removeGameInstruction = function() {
  const gameInstructionWrapper = document.getElementById("game-instruction-wrapper");
  gameInstructionWrapper.textContent = "";
}

module.exports = {
  updateBoard, 
  displayVictory, 
  displayComputerResponse,
  displayGameInstruction,
  removeGameInstruction
}