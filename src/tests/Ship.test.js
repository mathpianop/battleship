const Ship = require("../factories/Ship");

describe("Ship", () => {
  describe("isSunk", () => {
    it("returns false if no positions are hit", () => {
      const ship = Ship("Carrier");
      expect(ship.isSunk()).toBe(false)
    })

    it("returns true if all positions are hit", () => {
      const ship = Ship("Destroyer");
      ship.hit(0);
      ship.hit(1);
      ship.hit(2);
      expect(ship.isSunk()).toBe(true)
    })

    it("returns false if only some positions are", () => {
      const ship = Ship("Battleship");
      ship.hit(0);
      ship.hit(3);
      ship.hit(2);
      expect(ship.isSunk()).toBe(false)
    })
  })
})