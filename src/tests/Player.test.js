const Player = require("../factories/Player");
const coordinatesExist = require("../helpers/coordinatesExist")
const AttackReport = require("../factories/AttackReport");



describe("Player", () => {
  describe("receiveReport", () => {
    it("adds the position of a missed shot to missedShots", () => {
      const player = Player("Paul")
      player.receiveReport(AttackReport([1,2]))
      expect(player.getMissedShots()).toEqual(
        expect.arrayContaining([[1,2]])
      )
    })
  
    it("adds the position of a hit shot to the hitShots", () => {
      const player = Player("Paul")
      const mockHitShip = {
        shipLength: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(player.getHitShots()).toEqual(
        expect.arrayContaining([[1,2]])
      )
    })
  })

  describe("isMoveLegal", () => {
    it("returns true if coordinates are in bounds", () => {
      const player = Player("Paul");
      expect(player.isMoveLegal([1,2])).toEqual(true)
    })

    it("throws an error if coordinates do not exist", () => {
      const player = Player("Paul")
      expect(() => player.isMoveLegal([4,11])).toThrow("Those coordinates are nonexistant")
    })

    it("throws an error if coordinates are of a previous hit shot", () =>  {
      const player = Player("Paul")
      const mockHitShip = {
        shipLength: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(() => player.isMoveLegal([1,2])).toThrow(
        "Those coordinates have already been hit"
      )
    })

    it("throws an error if coordinates are of previous missed shot", () =>  {
      const player = Player("Paul")
      player.receiveReport(AttackReport([1,2]))
      expect(() => player.isMoveLegal([1,2])).toThrow(
        "Those coordinates have already been shot at and missed"
      )
    })
  })

  describe("getComputerMove", () => {

    it("returns a random legal coordinate if player is computer", () => {
      const player = Player("computer", true)
      expect(coordinatesExist(player.getComputerMove())).toBe(true);
    })

    it("returns a random legal coordinate if player is computer", () => {
      const player = Player("computer", true)
      expect(coordinatesExist(player.getComputerMove())).toBe(true);
    })

    it("doesn't return coordinates of previous hit shot if player is computer", () => {
      const mockRandom = jest.spyOn(Math, "random")
      mockRandom.mockReturnValueOnce(.01).mockReturnValueOnce(.1)
      const player = Player("computer", true)
      const mockHitShip = {
        shipLength: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(player.getComputerMove()).not.toEqual([1,2])
    })

    it("doesn't return coordinates of previous missed shot if player is computer", () => {
      const mockRandom = jest.spyOn(Math, "random")
      mockRandom.mockReturnValueOnce(.01).mockReturnValueOnce(.1)
      const player = Player("computer", true)
      player.receiveReport(AttackReport([1,2]))
      expect(player.getComputerMove()).not.toEqual([1,2])
    })
  })
})