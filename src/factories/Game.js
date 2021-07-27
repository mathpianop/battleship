const Player = require("./Player");
const Gameboard = require("./Gameboard");
const initializeBoards = require("../interface/initializeBoards")

function Game() {
  const humanPlayer = Player("placeholder");
  const computerPlayer = Player("computer", true);
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard();
  let victor;
  let illegalMoveMessage;


  const takeHumanTurn = function(coors) {
    //Check to see if move is illegal
    const errorMessage = humanPlayer.illegalMoveMessage(coors)
    if (!errorMessage) {
      takeTurn(humanPlayer, computerGameboard, coors)
    } else {
      illegalMoveMessage = errorMessage
    } 
  }
  
  const takeTurn = function(offensivePlayer, defensiveGameboard, coors) {
    //call receiveAttack on defensive Gameboard
    defensiveGameboard.receiveAttack(coors);
    //call getAttackReport on defensive Gameboard
    const attackReport = defensiveGameboard.getAttackReport();
    //call receiveReport on offensive Player
    offensivePlayer.receiveReport(attackReport);
    //call allSunk on defensive Gameboard to check for victory
    if (defensiveGameboard.allSunk()) {
      declareVictory()
    }
  }

  const takeComputerTurn = function() {
    const coors = computerPlayer.getComputerMove();
    takeTurn(computerPlayer, humanGameboard, coors);
  }

  const declareVictory = function(player) {
    //update DOM
    victor = player;
  }

  const getVictor = function() {
    return victor;
  }

  const getIllegalMoveMessage = function() {
    return illegalMoveMessage;
  }

  //Set up DOM boards
  initializeBoards.fillGameboard();
  initializeBoards.attachPositionListeners(takeHumanTurn); 


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

  return {takeHumanTurn, getVictor, getIllegalMoveMessage}
}

module.exports = Game;