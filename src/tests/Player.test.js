const Player = require("../factories/Player");
const coordinatesExist = require("../helpers/coordinatesExist")
const AttackReport = require("../factories/AttackReport");



describe("Player", () => {
  describe("receiveReport", () => {
    it("adds the position of a missed shot to missedShots", () => {
      const player = Player()
      player.receiveReport(AttackReport([1,2]))
      expect(player.shots.missed).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            coors: [1,2]
          })
        ])
      )
    })
  
    it("adds the position of a hit shot to the hitShots", () => {
      const player = Player()
      const mockHitShip = {
        name: "Battleship",
        shipLength: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(player.shots.hit).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            coors: [1,2],
            ship: mockHitShip
          })
        ])
      )
    })

    it("adds the positions of a sunk ship to the sunkPositions", () => {
      const player = Player()
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
      expect(player.shots.sunk).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            shipCoors: [[1,2],[1,3],[1,4],[1,5]],
            ship: mockSunkShip
          })
        ])
      )
    })
  })

  describe("illegalMoveMessage", () => {
    it("returns nothing if coordinates are in bounds", () => {
      const player = Player();
      expect(player.illegalMoveMessage([1,2])).toEqual(undefined)
    })

    it("returns a message if coordinates are of a previous hit shot", () =>  {
      const player = Player()
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
      const player = Player()
      player.receiveReport(AttackReport([1,2]))
      expect(player.illegalMoveMessage([1,2])).toBe(
        "Those coordinates have already been shot at and missed"
      )
    })
  })

  describe("getComputerMove", () => {

    it("returns a random legal coordinate if no shots have been made", () => {
      const player = Player(true)
      expect(coordinatesExist(player.getComputerMove())).toBe(true);
    })

    it("doesn't return coordinates of previous hit shot", () => {
      const mockRandom = jest.spyOn(Math, "random")
      mockRandom.mockReturnValueOnce(.01).mockReturnValueOnce(.1)
      const player = Player(true)
      const mockHitShip = {
        name: "Battleship",
        length: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,2], mockHitShip))
      expect(player.getComputerMove()).not.toEqual([1,2])
    })

    it("doesn't return coordinates of previous missed shot", () => {
      const mockRandom = jest.spyOn(Math, "random")
      mockRandom.mockReturnValueOnce(.01).mockReturnValueOnce(.1)
      const player = Player(true)
      player.receiveReport(AttackReport([1,2]))
      expect(player.getComputerMove()).not.toEqual([1,2])
    })

    it("returns an adjacent position to to previous shot if it was a hit", () => {
      const player = Player(true)
      const mockHitShip = {
        name: "Battleship",
        length: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([3,4], mockHitShip))
      expect([[3,3], [3,5], [2,4], [4,4]]).toEqual(
        expect.arrayContaining([player.getComputerMove()])
      )
    })

    it("returns an adjacent position to a pair of hit shots that is in the correct orientation", () => {
      const player = Player(true)
      const mockHitShip = {
        name: "Battleship",
        length: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([3,4], mockHitShip))
      player.receiveReport(AttackReport([3,5], mockHitShip))

      expect([[3,3], [3,6]]).toEqual(
        expect.arrayContaining([player.getComputerMove()])
      )
    })

    it("returns an adjacent position to a hit in the correct orientation if orientation is known right away", () => {
      const player = Player(true)
      const mockHitShip = {
        name: "Battleship",
        length: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([3,6]))
      player.receiveReport(AttackReport([3,3]))
      player.receiveReport(AttackReport([3,4], mockHitShip))
      expect([[2,4], [4,4]]).toEqual(
        expect.arrayContaining([player.getComputerMove()])
      )
    })

    it("notes immediate orientation identification for vertical orientation", () => {
      const player = Player(true)
      const mockHitShip = {
        name: "Battleship",
        length: 4,
        isSunk: () => false
      }
      player.receiveReport(AttackReport([1,4]))
      player.receiveReport(AttackReport([5,4]))
      player.receiveReport(AttackReport([3,4], mockHitShip))
      expect([[3,3], [3,5]]).toEqual(
        expect.arrayContaining([player.getComputerMove()])
      )
    })
  })
})