require("./style/style.css")
const Game = require("./factories/Game");
const createGameObjects = require("./helpers/createGameObjects")
const initializeBoards = require("./interface/initializeBoards")
const gameplayDisplay = require("./interface/gameplayDisplay");


let currentGame;

const setupGame = async function() {
  const gameObjects = await createGameObjects();
  currentGame = Game(gameObjects);
  //Set up DOM boards
  initializeBoards.fillGameboards(currentGame.humanShipDetailsArray);
  initializeBoards.attachPositionListeners(takeRound);
  //Display basic game instruction
  gameplayDisplay.displayGameInstruction();
}

const takeTurn = function(coors, playerIsComputer) {
  //Record the shot in the game object
  currentGame.takeShot(coors, playerIsComputer)
  
  //Update the board in the UI
  gameplayDisplay.updateBoard(currentGame.allShots, playerIsComputer);

  //Display attackReportMessage if this is the human's turn
  if (!playerIsComputer) {
    gameplayDisplay.displayComputerResponse(currentGame.attackReportMessage)
  }
}

const takeComputerTurn = function() {
  const computerCoors = currentGame.computerMove;
  takeTurn(computerCoors, true);
  if (currentGame.victor) {
    declareVictory();
  }
}

const declareVictory = function() {
  //Remove game instruction message
  gameplayDisplay.removeGameInstruction();
  //Dispay the victory message
  gameplayDisplay.displayVictory(currentGame.victor, setupGame)
}


const takeRound = function(humanCoors) {
  //If victory has already been declared, do not execute the round
  if (currentGame.victor) {
    return
  }

  //If move is illegal, do not execute the round
  const errorMessage = currentGame.illegalHumanMoveMessage(humanCoors)
  if (errorMessage) {
    return
  }
  
  //If move is legal, take the turn
  takeTurn(humanCoors, false)

  //If human turn is decisive, short-circuit the round
  if (currentGame.victor) {
    declareVictory();
    return
  }

  //If the human turn is not decisive, let the computer go
  takeComputerTurn()
}


//Start first game
setupGame();

