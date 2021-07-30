const Player = require("../factories/Player");
const coordinatesExist = require("../helpers/coordinatesExist")
const AttackReport = require("../factories/AttackReport");



describe("Player", () => {
  describe("receiveReport", () => {
    it("adds the position of a missed shot to missedShots", () => {
      const player = Player("Paul")
      player.receiveReport(AttackReport([1,2]))
      expect(player.getShots().missed).toEqual(
        expect.objectContaining([
          {
            coors: [1,2]
          }
        ])
      )
    })
  
    it("adds the position of a hit shot to the hitShots", () => {
      const player = Player("Paul")
      const mockHitShip = {
        name: "Battleship",
        shipLength: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(player.getShots().hit).toEqual(
        expect.arrayContaining([
          {
            coors: [1,2],
            shipName: "Battleship"
          }
        ])
      )
    })

    it("adds the positions of a sunk ship to the sunkPositions", () => {
      const player = Player("Paul")
      const mockHitShip = {
        name: "Battleship",
        shipLength: 4,
        isSunk: () => false
      }
      const mockSunkShip = {
        name: "Battleship",
        shipLength: 4,
        isSunk: () => true
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      player.receiveReport(AttackReport([1,3], mockHitShip))
      player.receiveReport(AttackReport([1,4], mockHitShip))
      player.receiveReport(AttackReport([1,5], mockSunkShip))
      expect(player.getShots().sunk).toEqual(
        expect.arrayContaining([
          {
            coorsSet: [[1,2],[1,3],[1,4],[1,5]],
            shipName: "Battleship"
          }
        ])
      )
    })
  })

  describe("illegalMoveMessage", () => {
    it("returns nothing if coordinates are in bounds", () => {
      const player = Player("Paul");
      expect(player.illegalMoveMessage([1,2])).toEqual(undefined)
    })

    it("returns a message if coordinates are of a previous hit shot", () =>  {
      const player = Player("Paul")
      const mockHitShip = {
        shipLength: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(player.illegalMoveMessage([1,2])).toBe(
        "Those coordinates have already been hit"
      )
    })

    it("returns a message if coordinates are of previous missed shot", () =>  {
      const player = Player("Paul")
      player.receiveReport(AttackReport([1,2]))
      expect(player.illegalMoveMessage([1,2])).toBe(
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