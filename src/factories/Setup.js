const Player = require("./Player")
const Gameboard = require("./Gameboard")
const setupDisplay = require("../interface/setupDisplay")

function Setup(setGameObjects) {

  const getHumanPlayerName = function() {
    setupDisplay.askForName()
    return setupDisplay.getName()
    .then(() => {
      //Clean up from askForName
      setupDisplay.removeNameForm();
    })
  }

  const buildGameboards = function() {
    return buildHumanGameboard()
    .then(humanGameboard => {
      const computerGameboard = Gameboard()
      computerGameboard.placeComputerShips();
      return {
        human: humanGameboard,
        computer: computerGameboard
      }
    })
  }

  const buildHumanGameboard = function() {
    setupDisplay.askForShipsPlacement();
    const shipsPositions = {
      "Patrol Boat": [],
      "Destroyer": [],
      "Submarine": [],
      "Battleship": [],
      "Carrier": []
    }
    return getShipsPositions(shipsPositions)
    //then shipsPositions => 
      //Create gameboard
      //place ships
      //return gameboard
  }



  const getShipsPositions = function(shipsPositions) {
    const newShipsPositions = {...shipsPositions}
    return setupDisplay.selectShipToPlace()
    .then(shipName => {
      //Remove ship's positions from newShipsPositions (to be safe)
      newShipsPositions[shipName] = [];
      return getPositions(shipName)
    })
    .then(shipInfo => {
      //Add positions to the appropriate ship name in newShipsPositions
      newShipsPositions[shipInfo.name] = shipsInfo.positions;
      //if any ships lack positions, return getShipsDetails(newShipsPositions)
      if (Object.values(newShipsPositions).some(positions => positions.length === 0)) {
        return getPositions(newShipsPositions)
      } else {
        //If all ships have positions, return newShipsPositions
        return newShipsPositions
      }
    })
  }

  const getPositions = function(ship) {
    //when position is clicked, calculate possible positions (all positions occupied)

    setupDisplay.askForEndPosition
    //If start position is clicked again, call getPositions(ship)
    //If one of the end positions is clicked, return the positions
  }

  const buildPlayers = function() {
    return getHumanPlayerName()
    .then(name => {
      //
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
    //get rid of this?
    .then(() => {
      setGameObjects(gameObjects)
    })
  }




  return {createGameObjects}

}

module.exports = Setup;