const Player = require("./Player");
const Gameboard = require("./Gameboard");
const initializeBoards = require("../interface/initializeBoards");

function Game(gameObjects) {
  const {humanPlayer, computerPlayer} = gameObjects.players
  const  {humanGameboard, computerGameboard} = gameObjects.gameboards
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
    const attackReport = defensiveGameboard.attackReport;
    //call receiveReport on offensive Player
    offensivePlayer.receiveReport(attackReport);
    //Set the current attackReportMessage
    attackReportMessage = attackReport.message
    //call allSunk on defensive Gameboard to check for victory
    if (defensiveGameboard.allSunk()) {
      victor = offensivePlayer
    }
  }

 


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