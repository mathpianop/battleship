const Player = require("./Player")
const Gameboard = require("./Gameboard")
const Ship = require("./Ship")
const setupDisplay = require("../interface/setupDisplay")
const ShipDetails = require("./ShipDetails")
const initializeBoards = require("../interface/initializeBoards");
const possiblePositions = require("../helpers/possiblePositions");
const getOccupiedPositions = require("../helpers/getOccupiedPositions");

function Setup() {
  

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

    return buildShipsDetailsArray({})
    .then(shipsDetailsArray => {
      
    })
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
        return shipDetails.ship.name === shipName
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
    //update board
    initializeBoards.fillGameboards(shipDetailsArray)
    //Create the ship
    const newShip = Ship(shipName);
    //Get the start position
    setupDisplay.askForStartPosition();
    const occupiedPositions = getOccupiedPositions(shipDetailsArray);
    const possibleStartPositions = (
      possiblePositions.calculateStartPositions(occupiedPositions, newShip.length)
    );
    return setupDisplay.getPosition(possibleStartPositions)
    .then(startPos => {
      //Get the end position
      const possibleEndPositions = (
        possiblePositions.calculateStartPositions(occupiedPositions, newShip.length, startPos)
      )
      setupDisplay.askForEndPosition();
      return setupDisplay.getPosition(possibleEndPositions)
      .then(endPos => {
        //Calculate the intervening positions
        positions = possiblePositions.getPositionsFromEndpoints(startPos, endPos)
        return ShipDetails(positions, newShip)
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
    return buildPlayers()
    .then(players => {
      gameObjects.players = players
    })
    .then(buildGameboards)
    .then(gameboards => {
      gameObjects.gameboards = gameboards;
      return gameObjects;
    })
  }




  return {createGameObjects}

}

module.exports = Setup;