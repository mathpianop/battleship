const Player = require("./Player")
const Gameboard = require("./Gameboard")
const setupDisplay = require("../interface/setupDisplay")

function Setup(setGameObjects) {
  const getHumanPlayerName = function() {
    setupDisplay.askForName()
    .then(name => {
      //do something with the name
    })
  }

  const buildGameboards = function() {
    setupDisplay.askForShipPlacement();
    
  }

  const buildPlayers = function() {
    return getHumanPlayerName()
    .then(name => {
      return {
        human: Player(name),
        computer: Player("computer", true)
      }
    })
  }

  const createGameObjects = function() {
    const gameObjects = {};
    buildPlayers()
    .then(players => {
      gameObjects.players = players
    })
    .then(buildGameboards)
    .then(gameboards => {
      gameObjects.gameboards = gameboards
    })
    .then(() => {
      setGameObjects(gameObjects)
    })
  }




  return {createGameObjects}

}