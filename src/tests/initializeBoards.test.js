/**
 * @jest-environment jsdom
 */


const fs = require("fs");
window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

const initializeBoards = require("../interface/initializeBoards")



  
describe("fillGameboard", () => {
  initializeBoards.fillGameboards();
  const samplePosition = document
                            .getElementById("human-gameboard")
                            .getElementsByClassName("position")[37]

  it("creates data-xCoor and data-yCoor attributes on human-gameboard", () => {
    const samplePosition = document
                            .getElementById("human-gameboard")
                            .getElementsByClassName("position")[37]
    expect(samplePosition.dataset.xCoor).toBe("4");
    expect(samplePosition.dataset.yCoor).toBe("8")
  })

  it("creates data-xCoor and data-yCoor attributes on computer-gameboard", () => {
    const samplePosition = document
                            .getElementById("human-gameboard")
                            .getElementsByClassName("position")[37]
    expect(samplePosition.dataset.xCoor).toBe("4");
    expect(samplePosition.dataset.yCoor).toBe("8")
  })

  it("wipes previous gameboard", () => {
    const samplePosition = document
                            .getElementById("human-gameboard")
                            .getElementsByClassName("position")[37]
    expect(document.contains(samplePosition)).toBe(true);
    initializeBoards.fillGameboards();
    expect(document.contains(samplePosition)).toBe(false)
  })
})

describe("attachPositionListeners", () => {
    initializeBoards.fillGameboards();
    const samplePosition = document
                            .getElementById("computer-gameboard")
                            .getElementsByClassName("position")[37]
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

