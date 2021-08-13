/**
 * @jest-environment jsdom
 */


const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

const setupDisplay = require("../interface/setupDisplay");
const initializeBoards = require("../interface/initializeBoards")

beforeEach(() => {
  const nameFormWrapper = document.getElementById("name-form-wrapper");
  nameFormWrapper.textContent = "";
})

beforeEach(() => {
  const shipsPlacementElement = document.getElementById("ships-placement");
  if (shipsPlacementElement) {
    shipsPlacementElement.textContent = "";
  }
})

describe("askForName", () => {
  it("Creates a name form", () => {
    const nameFormWrapper = document.getElementById("name-form-wrapper");
    expect(nameFormWrapper.firstChild).not.toBeTruthy()
    setupDisplay.askForName();
    expect(nameFormWrapper.firstChild.id).toBe("name-form")
  })
})

describe("getName", () => {
  it("returns a Promise which resolves to the player's name", () => {
    setupDisplay.askForName();
    const namePromise = setupDisplay.getName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })

  it("does nothing if the submit is clicked with an empty string", () => {
    setupDisplay.askForName();
    const namePromise = setupDisplay.getName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    submitName.click();
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })

  it("does nothing if the submit is clicked with whitespace", () => {
    setupDisplay.askForName();
    const namePromise = setupDisplay.getName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    playerName.value = "  ";
    submitName.click();
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })
})

describe("removeNameForm", () => {
  it("removes the name form", () => {
    const nameFormWrapper = document.getElementById("name-form-wrapper");
    setupDisplay.askForName();
    expect(nameFormWrapper.firstChild.id).toBe("name-form");
    setupDisplay.removeNameForm();
    expect(nameFormWrapper.firstChild).not.toBeTruthy();
  })
})

describe("askForShipsPlacement", () => {
  it("adds the ships-placement element to the dialogue div", () => {
    const shipsPlacementWrapper = document.getElementById("ships-placement-wrapper");
    expect(shipsPlacementWrapper.firstChild).not.toBeTruthy();
    setupDisplay.askForShipsPlacement();
    expect(shipsPlacementWrapper.firstChild.id).toBe("ships-placement")
  })

  xit("creates a ships-placement element with 5 ship buttons", () => {
    setupDisplay.askForShipsPlacement();
    const shipsPlacementElement = document.getElementById("ships-placement");
    const shipPlacementBtns = shipsPlacementElement.getElementsByClassName("ship-placement-btn");
    expect(shipPlacementBtns.length).toBe(5);
  })

  it("adds a data-shipName attribute with the ship name", () => {
    setupDisplay.askForShipsPlacement();
    const patrolBoatBtn = document.getElementsByClassName("ship-placement-btn")[0];
    expect(patrolBoatBtn.dataset.shipName).toBe("Patrol Boat")
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
})


describe("askForEndPosition", () => {
  it("updates placement message accordingly", () => {
    setupDisplay.askForShipsPlacement();
    setupDisplay.askForEndPosition();
    const placementMessage = document.getElementById("placement-message");
    expect(placementMessage.textContent).toBe("Click one of the possible other endpoints")
  })
})

