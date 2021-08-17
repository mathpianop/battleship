/**
 * @jest-environment jsdom
 */


const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

const setupDisplay = require("../interface/setupDisplay");
const initializeBoards = require("../interface/initializeBoards");
const ShipDetails = require("../factories/ShipDetails");
const Ship = require("../factories/Ship");

beforeEach(() => {
  const shipsPlacementElement = document.getElementById("ships-placement");
  if (shipsPlacementElement) {
    shipsPlacementElement.textContent = "";
  }
})



describe("askForShipsPlacement", () => {

  it("adds a data-shipName attribute with the ship name", () => {
    setupDisplay.askForShipsPlacement();
    const patrolBoatBtn = document.getElementsByClassName("ship-placement-btn")[0];
    expect(patrolBoatBtn.dataset.shipName).toBe("Patrol Boat")
  })
})

describe("askForShipSelection", () => {
  it("updates the placement message accordingly", () => {
    setupDisplay.askForShipsPlacement();
    setupDisplay.askForShipSelection([]);
    const placementMessage = document.getElementById("placement-message");
    expect(placementMessage.textContent).toBe("Click one of the ships to place on the board");
  })

  it("adds the 'placed' class to the buttons of placed ships", () => {
    setupDisplay.askForShipsPlacement();
    const shipDetailsArray = [ShipDetails([[1,2], [1,3]], Ship("Patrol Boat"))];
    setupDisplay.askForShipSelection(shipDetailsArray);
    const patrolBoatBtn = document.getElementsByClassName("ship-placement-btn")[0];
    expect(patrolBoatBtn.classList.contains("placed")).toBeTruthy();
  })
})

describe("selectShipToPlace", () => {
  it("returns a Promise which resolves to the name of the ship", () => {
    setupDisplay.askForShipsPlacement();
    const shipNamePromise = setupDisplay.selectShipToPlace();
    const patrolBoatBtn = document.getElementsByClassName("ship-placement-btn")[0];
    patrolBoatBtn.click();
    shipNamePromise.then(name => {
      expect(name).toBe("Patrol Boat")
    })
  })
})

describe("askForStartPosition", () => {
  it("updates placement message accordingly", () => {
    setupDisplay.askForShipsPlacement();
    setupDisplay.askForStartPosition();
    const placementMessage = document.getElementById("placement-message");
    expect(placementMessage.textContent).toBe("Click the board to select one endpoint");
  })
})

describe("getPosition", () => {
  it("returns a Promise which resolves to a selected position", () => {
    initializeBoards.fillGameboards([])
    setupDisplay.askForShipsPlacement();
    const possibleStartPositions = [[4,8]]
    const positionPromise = setupDisplay.getPosition(possibleStartPositions);
    const samplePosition = document.getElementById("human-gameboard")
                                    .getElementsByClassName("position")[37];
    samplePosition.click();
    positionPromise.then(position => {
      expect(position).toMatchObject([4,8])
    })
  })

  it("attaches a class of 'selectable' to all of the positions that it is passed", () => {
    initializeBoards.fillGameboards([])
    setupDisplay.askForShipsPlacement();
    const possibleStartPositions = [[4,8]]
    setupDisplay.getPosition(possibleStartPositions);
    const samplePosition = document.getElementById("human-gameboard")
                                    .getElementsByClassName("position")[37];
    expect(samplePosition.classList.contains("selectable")).toBeTruthy();
  })

  it("removes the 'selectable' class once position has been clicked", () => {
    initializeBoards.fillGameboards([])
    setupDisplay.askForShipsPlacement();
    setupDisplay.getPosition([[4,8]]);
    const samplePosition = document.getElementById("human-gameboard")
                                    .getElementsByClassName("position")[37];
    expect(samplePosition.classList.contains("selectable")).toBeTruthy();
    samplePosition.click();
    expect(samplePosition.classList.contains("selectable")).not.toBeTruthy();
  })

  it("adds the 'selected' class once position has been clicked", () => {
    initializeBoards.fillGameboards([])
    setupDisplay.askForShipsPlacement();
    setupDisplay.getPosition([[4,8]]);
    const samplePosition = document.getElementById("human-gameboard")
                                    .getElementsByClassName("position")[37];
    samplePosition.click();
    expect(samplePosition.classList.contains("selected")).toBeTruthy();
  })
})


describe("askForEndPosition", () => {
  it("updates placement message accordingly", () => {
    setupDisplay.askForShipsPlacement();
    setupDisplay.askForEndPosition();
    const placementMessage = document.getElementById("placement-message");
    expect(placementMessage.textContent).toBe("Click one of the possible other endpoints")
  })
})

describe("removeShipsPlacement", () => {
  it("removes the ships placement div", () => {
    const shipsPlacementWrapper = document.getElementById("ships-placement-wrapper");
    setupDisplay.askForShipsPlacement();
    expect(shipsPlacementWrapper.firstChild).toBeTruthy();
    setupDisplay.removeShipsPlacement();
    expect(shipsPlacementWrapper.textContent).toBe("");
  })
})