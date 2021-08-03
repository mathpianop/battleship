const Player = require("./Player");
const Gameboard = require("./Gameboard");
const initializeBoards = require("../interface/initializeBoards");
const gameplayDisplay = require("../interface/gameplayDisplay");

function Game() {
  const humanPlayer = Player("placeholder");
  const computerPlayer = Player("computer", true);
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard();
  let victory = false;

  const takeRound = function(humanCoors) {
    //If victory has already been declared, do not execute the round
    if (victory) {
      return
    }

    //If move is illegal, display the illegal move message in the UI
    const errorMessage = humanPlayer.illegalMoveMessage(humanCoors)
    if (errorMessage) {
      return gameplayDisplay.displayIllegalMessage(errorMessage)
    }
    
    //If move is legal, take the turn
    takeTurn(humanPlayer, computerGameboard, humanCoors)

    //If human turn is decisive, short-circuit the round
    if (victory) {
      return
    }

    //If the human turn is not decisive, let the computer go
    takeComputerTurn()
  }


  
  const takeTurn = function(offensivePlayer, defensiveGameboard, coors) {
    //call receiveAttack on defensive Gameboard
    defensiveGameboard.receiveAttack(coors);
    //call getAttackReport on defensive Gameboard
    const attackReport = defensiveGameboard.getAttackReport();
    //call receiveReport on offensive Player
    offensivePlayer.receiveReport(attackReport);
    //Update the board in the UI
    gameplayDisplay.updateBoard(offensivePlayer, defensiveGameboard);
    //Display attackReportMessage if this is the human's turn
    if (!offensivePlayer.isComputer) {
      gameplayDisplay.displayComputerResponse(attackReport.message)
    }
    //call allSunk on defensive Gameboard to check for victory
    if (defensiveGameboard.allSunk()) {
      declareVictory(offensivePlayer)
    }
  }

  const takeComputerTurn = function() {
    const coors = computerPlayer.getComputerMove();
    takeTurn(computerPlayer, humanGameboard, coors);
  }

  const declareVictory = function(victor) {
    victory = true
    gameplayDisplay.displayVictory(victor);
  }

  //Set up DOM boards
  initializeBoards.fillGameboard();
  initializeBoards.attachPositionListeners(takeRound);

  //Place ships arbitrarily for now

  //Place Patrol Boats
  computerGameboard.placeShip([[9,7], [9,6]], "Patrol Boat")
  humanGameboard.placeShip([[1,2], [2,2]], "Patrol Boat")


  //Place Destroyers
  computerGameboard.placeShip([[1,2], [2,2], [3,2]], "Destroyer")
  humanGameboard.placeShip([[5,6], [4,6], [3,6]], "Destroyer")

  //Place Submarines
  computerGameboard.placeShip([[4,5], [5,5], [5,6]], "Submarine")
  humanGameboard.placeShip([[3,1], [3,2], [3,3]], "Submarine")

  //Place Battleships
  computerGameboard.placeShip([[8,3], [8,4], [8,5], [8,6]], "Battleship")
  humanGameboard.placeShip([[6,5], [6,6], [6,7], [6,8]], "Battleship")

  //Place Carriers
  computerGameboard.placeShip([[2,10], [3,10], [4,10], [5,10], [6,10]], "Carrier")
  humanGameboard.placeShip([[10,9], [9,9], [8,9], [7,9], [6,9]], "Carrier")
}

module.exports = Game;