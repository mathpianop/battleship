import "./style/style.css"
import Game from "./factories/Game";


let currentGame = Game();
let nextGame;

const takeTurn = function(coors, playerIsComputer) {
  //Record the shot in the game object
  currentGame.takeShot(playerIsComputer, coors)
  
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

  //If move is illegal, display the illegal move message in the UI
  const errorMessage = current.illegalHumanMoveMessage(humanCoors)
  if (errorMessage) {
    return gameplayDisplay.displayIllegalMessage(errorMessage)
  }
  
  //If move is legal, take the turn
  takeTurn(humanCoors, false)

  //If human turn is decisive, short-circuit the round
  if (currentGame.victor) {
    //FIX THIS (add display and new game stuff)
    nextGame = Game();
    return gameplayDisplay.displayVictory(currentGame.victor/*, nextGame.setup*/)
  }

  //If the human turn is not decisive, let the computer go
  takeComputerTurn()
}





//Set up DOM boards
initializeBoards.fillGameboards();
initializeBoards.attachPositionListeners(takeRound);