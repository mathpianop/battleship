/**
 * @jest-environment jsdom
 */


 const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");


const Game = require("../factories/Game");

describe("Game", () => {
  describe("takeHumanTurn", () => {
    it("records an illegal move message if a repeat shot is attempted", () => {
      const game = Game();
      game.takeHumanTurn([1,2])
      expect(game.getIllegalMoveMessage()).not.toBeDefined()
      game.takeHumanTurn([1,2])
      expect(game.getIllegalMoveMessage()).toBeDefined()
    })
  })
})