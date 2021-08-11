const Game = require("../factories/Game");


describe("Game", () => {
  describe("takeShot", () => {
    it("records a human shot in the allShots property", () => {
      const game = Game();
      game.takeShot([1,2], false)
      const humanShots = game.allShots.human.hit.concat(game.allShots.human.missed)
      
      expect(humanShots.map(shot => shot.coors)).toEqual(
        expect.arrayContaining([[1,2]])
      )
    })
  })
})