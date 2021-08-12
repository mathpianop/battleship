const Player = require("./Player")
const Gameboard = require("./Gameboard")
const Ship = require("./Ship")
const setupDisplay = require("../interface/setupDisplay")
const ShipDetails = require("./ShipDetails")

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
    const shipsDetailsArray = {};

    return buildShipsDetailsArray(shipsDetailsArray)
    //then shipsPositions => 
      //Create gameboard
      //place ships
      //return gameboard
  }



  const buildShipsDetailsArray = function(shipDetailsArray) {
    let newShipDetailsArray;
    return setupDisplay.selectShipToPlace()
    .then(shipName => {
      //Remove ship's positions from shipsDetailsArray (to be safe)
      newShipDetailsArray = shipDetailsArray.filter(shipDetails => {
        return shipDetails.ship.name = shipName
      })

      return getShipDetails(newShipDetailsArray, shipName)
    })
    .then(shipDetails => {
      //Add positions to the appropriate ship name in newShipsPositions
      newShipDetailsArray.push(shipDetails);
      //if not all ships have been given ShipDetails, return buildShipDetailsArray (recurse)
      if (newShipDetailsArray.length < 5) {
        return buildShipDetailsArray(newShipDetailsArray)
      } else {
        //If all ships have positions, return newShipsPositions
        return newShipDetailsArray
      }
    })
  }

  const getShipDetails = function(shipDetailsArray, shipName) {
    //Fill Gameboard?????


     //calculate possible startingPositions
    //Fill
    setupDisplay.askForStartPosition();

    return setupDisplay.getStartPosition(possibleStartPositions)
    .then(startPosition => {
      //when position is clicked, calculate possible positions (all positions occupied)
      //Fill
      setupDisplay.askForEndPosition();
      setupDisplay.getEndPosition(startPosition, possibleEndPositions)
      .then(endPosition => {
        //get positions from end points
        //Fill

        return ShipDetails(positions, Ship(shipName))
      })
    })
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
    //get rid of this?
    .then(() => {
      setGameObjects(gameObjects)
    })
  }




  return {createGameObjects}

}

module.exports = Setup;