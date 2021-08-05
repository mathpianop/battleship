const Player = require("./Player");
const Gameboard = require("./Gameboard");
const Ship = require("./Ship")
const initializeBoards = require("../interface/initializeBoards");
const gameplayDisplay = require("../interface/gameplayDisplay");

function Game() {
  const humanPlayer = Player("placeholder");
  const computerPlayer = Player("computer", true);
  const humanGameboard = Gameboard();
  const computerGameboard = Gameboard();
  let victor;
  let attackReportMessage;

  const illegalHumanMoveMessage = function(humanCoors) {
    return humanPlayer.illegalMoveMessage(humanCoors)
  }

  const takeShot = function(coors, playerIsComputer) {
    let offensivePlayer
    let defensiveGameboard;

    if (playerIsComputer) {
      offensivePlayer = computerPlayer;
      defensiveGameboard = humanGameboard;
    } else {
      offensivePlayer = humanPlayer;
      defensiveGameboard = computerGameboard;
    }

    //call receiveAttack on defensive Gameboard
    defensiveGameboard.receiveAttack(coors);
    //call getAttackReport on defensive Gameboard
    const attackReport = defensiveGameboard.getAttackReport();
    //call receiveReport on offensive Player
    offensivePlayer.receiveReport(attackReport);
    //Set the current attackReportMessage
    attackReportMessage = attackReport.message
    //call allSunk on defensive Gameboard to check for victory
    if (defensiveGameboard.allSunk()) {
      victor = offensivePlayer
    }
  }

 
  

 
  

  //Place ships arbitrarily for now

  //Place Patrol Boats
  const computerPatrol = Ship(2, "Patrol Boat")
  const humanPatrol = Ship(2, "Patrol Boat")
  computerGameboard.placeShip([[9,7], [9,6]], computerPatrol)
  humanGameboard.placeShip([[1,2], [2,2]], humanPatrol)


  //Place Destroyers
  const computerDestroyer = Ship(3, "Destroyer")
  const humanDestroyer = Ship(3, "Destroyer")
  computerGameboard.placeShip([[1,2], [2,2], [3,2]], computerDestroyer)
  humanGameboard.placeShip([[5,6], [4,6], [3,6]], humanDestroyer)

  //Place Submarines
  const computerSubmarine = Ship(3, "Submarine")
  const humanSubmarine = Ship(3, "Submarine")
  computerGameboard.placeShip([[4,5], [5,5], [5,6]], computerSubmarine)
  humanGameboard.placeShip([[3,1], [3,2], [3,3]], humanSubmarine)

  //Place Battleships
  const computerBattleship = Ship(4, "Battleship")
  const humanBattleship = Ship(4, "Battleship")
  computerGameboard.placeShip([[8,3], [8,4], [8,5], [8,6]], computerBattleship)
  humanGameboard.placeShip([[6,5], [6,6], [6,7], [6,8]], humanBattleship)

  //Place Carriers
  const computerCarrier = Ship(5, "Carrier")
  const humanCarrier = Ship(5, "Carrier")
  computerGameboard.placeShip([[2,10], [3,10], [4,10], [5,10], [6,10]], computerCarrier)
  humanGameboard.placeShip([[10,9], [9,9], [8,9], [7,9], [6,9]], humanCarrier)


  return {
    get victor() {
      return victor
    },
    get computerMove() {
      return computerPlayer.getComputerMove()
    },
    get allShots() {
      return {
        human: humanPlayer.shots,
        computer: computerPlayer.shots
      }
    },
    get attackReportMessage() {
      return attackReportMessage
    },
    get humanShipDetailsArray() {
      return humanGameboard.shipDetailsArray;
    },
    illegalHumanMoveMessage,
    takeShot
  }
}

module.exports = Game;