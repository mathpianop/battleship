const Player = require("../factories/Player")
const Gameboard = require("../factories/Gameboard")
const Ship = require("../factories/Ship")
const setupDisplay = require("../interface/setupDisplay")
const ShipDetails = require("../factories/ShipDetails")
const initializeBoards = require("../interface/initializeBoards");
const possiblePositions = require("./possiblePositions");
const getOccupiedPositions = require("./getOccupiedPositions");


  const getHumanPlayerName = async function() {
    setupDisplay.askForName()
    const name = await setupDisplay.getName()
    //Clean up from askForName
    setupDisplay.removeNameForm();
    return name
  }

  const buildPlayers = async function() {
    const name = await getHumanPlayerName();
    return {
      human: Player(name),
      computer: Player("computer", true)
    }
  }


  const buildShipDetailsArray = async function(shipDetailsArray) {
    const shipName = await setupDisplay.selectShipToPlace();
    //Remove ship's positions from shipsDetailsArray (to be safe)
    const newShipDetailsArray = shipDetailsArray.filter(shipDetails => {
      return shipDetails.ship.name !== shipName
    })
    const shipDetails = await buildShipDetails(newShipDetailsArray, shipName);
    //Add positions to the appropriate ship name in newShipsPositions
    newShipDetailsArray.push(shipDetails);
    //update board
    initializeBoards.fillGameboards(newShipDetailsArray)
    //if not all ships have been given ShipDetails, return buildShipDetailsArray (recurse)
    if (newShipDetailsArray.length < 5) {
      return buildShipDetailsArray(newShipDetailsArray)
    } else {
      //If all ships have positions, return newShipsPositions
      return newShipDetailsArray
    }
  }

  const buildShipDetails = async function(shipDetailsArray, shipName) {
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
    const startPos = await setupDisplay.getPosition(possibleStartPositions);
    //Get the end position
    const possibleEndPositions = (
      possiblePositions.calculateEndPositions(occupiedPositions, newShip.length, startPos)
    )
    setupDisplay.askForEndPosition();
    const endPos = await setupDisplay.getPosition(possibleEndPositions);
    //Calculate the intervening positions
    positions = possiblePositions.getPositionsFromEndpoints(startPos, endPos)
    return ShipDetails(positions, newShip)
  }

  

  const buildHumanGameboard = async function() {
    setupDisplay.askForShipsPlacement();
    const shipDetailsArray = await buildShipDetailsArray([]);
    //Create gameboard
    const humanGameboard = Gameboard();
    //Place ships
    shipDetailsArray.forEach(shipDetails => {
      humanGameboard.placeShip(shipDetails);
    })
    return humanGameboard
  }

  const buildComputerGameboard = function() {
    //Create the gameboard
    const gameboard = Gameboard();

    //Create the ships
    const ships = [
      Ship("Patrol Boat"),
      Ship("Submarine"),
      Ship("Destroyer"),
      Ship("Battleship"),
      Ship("Carrier")
    ]

    //Get the positions of the ships
    const shipDetailsArray = ships.reduce((shipDetailsArray, ship) => {
      const occupiedPositions = (
        shipDetailsArray.map(shipDetails => shipDetails.positions).flat()
      );

      const newPositions = (
        possiblePositions.getComputerPlacement(occupiedPositions, ship.length)
      );

      return shipDetailsArray.concat(ShipDetails(newPositions, ship))
    }, [])

    //Place the ships
    shipDetailsArray.forEach(shipDetails => gameboard.placeShip(shipDetails))
    return gameboard
  }

  const buildGameboards = async function() {
    const computerGameboard = buildComputerGameboard();
    const humanGameboard = await buildHumanGameboard();
    return {
      human: humanGameboard,
      computer: computerGameboard
    }
  }




  const createGameObjects = async function() {
    //initialize board
    initializeBoards.fillGameboards([])
    //Create game objects
    const players = await buildPlayers();
    const gameboards = await buildGameboards();
    return {players, gameboards}
  }


module.exports = createGameObjects;