require("./style/style.css")
const Game = require("./factories/Game");
const createGameObjects = require(createGameObjects)
const initializeBoards = require("./interface/initializeBoards")
const gameplayDisplay = require("./interface/gameplayDisplay");
const createGameObjects = require("./helpers/createGameObjects");


let currentGame;

const setupGame = function() {
  createGameObjects()
  .then(gameObjects => {
    currentGame = Game(gameObjects);
    //Set up DOM boards
    initializeBoards.fillGameboards(currentGame.humanShipDetailsArray);
    initializeBoards.attachPositionListeners(takeRound);
  })
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
    //Create new game and pass its setup method to displayVictory 
    nextGame = Game();
    return gameplayDisplay.displayVictory(currentGame.victor/*, nextGame.setup*/)
  }

  //If the human turn is not decisive, let the computer go
  takeComputerTurn()
}


//Start first game
setupGame();