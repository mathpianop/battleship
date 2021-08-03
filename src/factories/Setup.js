const Player = require("./Player")
const Gameboard = require("./Gameboard")
const setupDisplay = require("../interface/setupDisplay")

function Setup(setGameObjects) {

  const getHumanPlayerName = function() {
    return setupDisplay.askForName()
  }

  const buildGameboards = function() {
    return buildHumanGameboard()
    .then(humanGameboard => {
      const computerGameboard = Gameboard()
      computerGameboard.placeComputerShips();
      return {
        human: humanGameboard,
        computer: computer
      }
    })
  }

  const buildHumanGameboard = function() {
    setupDisplay.askForShipsPlacement();
    //Create ships and place them in a shipsDetails object (under "ship" property)
    //return getShipsDetails(ships)
    //then shipsDetails => 
      //Create gameboard
      //place ships
      //return gameboard
  }



  const getShipsDetails = function(shipsDetails) {

    const newShipsDetail = {...shipsDetails}
    //return setupDisplay.askForShip(newShipsDetails)
    //Then ship =>
          //Remove ship's coordinates from newShipsDetails (to be safe)
          //call setupDisplay.askForStartPosition(newShipsDetails)
          //return getPositions(ship)

    //then, Add coordinates to appropriate shipDetails

    //if any ships lack coordinates, return getShipsDetails(newShipsDetails)
    //else return newShipsDetails
  }

  const getPositions = function(ship) {
    //when position is clicked, calculate possible positions (all positions occupied)
    //call setupDisplay.askForEndPosition
    //If start position is clicked again, call getPositions(ship)
    //If one of the end positions is clicked, return the positions
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
    //Get rid of this bad boy
    .then(() => {
      setGameObjects(gameObjects)
    })
  }




  return {createGameObjects}

}

module.exports = Setup;