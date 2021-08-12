/**
 * @jest-environment jsdom
 */


const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

const initializeBoards = require("../interface/initializeBoards");
const ShipDetails = require("../factories/ShipDetails");
const Ship = require("../factories/Ship");

const getSamplePosition = function() {
  return document
          .getElementById("human-gameboard")
          .getElementsByClassName("position")[37]
}

const getSampleComputerPosition = function() {
  return document
          .getElementById("computer-gameboard")
          .getElementsByClassName("position")[37]
}

  
describe("fillGameboard", () => {
  const emptyShipDetailsArray = [];

  const samplePosition = getSamplePosition();

  it("creates data-xCoor and data-yCoor attributes on human-gameboard", () => {
    initializeBoards.fillGameboards(emptyShipDetailsArray);
    const samplePosition = getSamplePosition();
    expect(samplePosition.dataset.xCoor).toBe("4");
    expect(samplePosition.dataset.yCoor).toBe("8")
  })

  it("creates data-xCoor and data-yCoor attributes on computer-gameboard", () => {
    initializeBoards.fillGameboards(emptyShipDetailsArray);
    const samplePosition = getSamplePosition();
    expect(samplePosition.dataset.xCoor).toBe("4");
    expect(samplePosition.dataset.yCoor).toBe("8")
  })

  it("wipes previous gameboard", () => {
    initializeBoards.fillGameboards(emptyShipDetailsArray);
    const samplePosition = getSamplePosition();
    expect(document.contains(samplePosition)).toBe(true);
    initializeBoards.fillGameboards(emptyShipDetailsArray);
    expect(document.contains(samplePosition)).toBe(false)
  })

  it("inserts ship initial into positions occupied by a ship", () => {
    const shipDetailsArray = [
      ShipDetails(
        [[4,6], [4,7], [4,8]],
        Ship("Destroyer")
      )
    ];

    initializeBoards.fillGameboards(shipDetailsArray);
    const samplePosition = getSamplePosition();
    expect(samplePosition.textContent).toBe("D")
  })

  it("adds an 'occupied' class to positions occupied by a ship", () => {
    const shipDetailsArray = [
      ShipDetails(
        [[4,6], [4,7], [4,8]],
        Ship("Destroyer")
      )
    ];

    initializeBoards.fillGameboards(shipDetailsArray);
    const samplePosition = getSamplePosition();
    expect(samplePosition.classList.contains("occupied")).toBeTruthy();
  })  
})

describe("attachPositionListeners", () => {
    const emptyShipDetailsArray = [];
    initializeBoards.fillGameboards(emptyShipDetailsArray);
    const samplePosition = getSampleComputerPosition();
    const callback = jest.fn();
    initializeBoards.attachPositionListeners(callback);
    samplePosition.click()

  it("adds a listener that calls the passed callback onClick", () => {
    expect(callback.mock.calls.length).toBe(1);
  })

  it("calls the callback with the correct coordinates", () => {
    expect(callback).toHaveBeenCalledWith([4,8]);
  })
})

