/**
 * @jest-environment jsdom
 */


 const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

jest.mock("../interface/gameplayDisplay")
const Game = require("../factories/Game");
const gameplayDisplay = require("../interface/gameplayDisplay");

afterEach(() => {
  jest.clearAllMocks();
});

describe("Game", () => {
  it("calls displayIllegalMessage when an illegal move is attempted", () => {
    const game = Game();
    const samplePosition = document
                            .getElementById("computer-gameboard")
                            .getElementsByClassName("position")[37];
    samplePosition.click();
    expect(gameplayDisplay.displayIllegalMessage).not.toHaveBeenCalled()
    samplePosition.click();
    expect(gameplayDisplay.displayIllegalMessage).toHaveBeenCalled()
  })

  it("calls updateBoard after a legal nondecisive turn", () => {
    const game = Game();
    const samplePosition = document
                            .getElementById("computer-gameboard")
                            .getElementsByClassName("position")[37];
    expect(gameplayDisplay.updateBoard).not.toHaveBeenCalled()
    samplePosition.click();
    expect(gameplayDisplay.updateBoard).toHaveBeenCalled()
    
  })
})