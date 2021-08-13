const Gameboard = require("../factories/Gameboard");
const Ship = require("../factories/Ship");
const ShipDetails = require("../factories/ShipDetails");

describe("Gameboard", () => {
  describe("receiveAttack", () => {
    it("assigns a report object to attackReport", () => {
      const gameboard = Gameboard();
      const shipDetails = ShipDetails([[1,2], [2,2]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails);
      expect(gameboard.attackReport).toEqual({});
      gameboard.receiveAttack([2,2]);
      expect(gameboard.attackReport).toEqual(
        expect.objectContaining({
          hit: true,
          shipName: "Patrol Boat"
        })
      )
    })

    it("updates attackReport between attacks", () => {
      const gameboard = Gameboard();
      const shipDetails = ShipDetails([[1,2], [2,2]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails);
      gameboard.receiveAttack([1,2])
      expect(gameboard.attackReport).toEqual(
        expect.objectContaining({
          hit: true
        })
      )
      gameboard.receiveAttack([4,3])
      expect(gameboard.attackReport).toEqual(
        expect.objectContaining({
          hit: false
        })
      )
    })
  })
   
  describe("allSunk", () => {
    it("returns false if there are no ships placed", () => {
      const gameboard = Gameboard();
      expect(gameboard.allSunk()).toBe(false)
    })

    it("returns false if no ships are sunk", () => {
      const gameboard = Gameboard();
      const shipDetails1 = ShipDetails([[1,2], [2,2]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails1);
      const shipDetails2 = ShipDetails([[5,4], [5,5]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails2);
      expect(gameboard.allSunk()).toBe(false)
    })

    it("returns false if some ships are sunk and some are not", () => {
      const gameboard = Gameboard();
      const shipDetails1 = ShipDetails([[1,2], [2,2]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails1);
      const shipDetails2 = ShipDetails([[5,4], [5,5]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails2);
      gameboard.receiveAttack([1,2])
      gameboard.receiveAttack([2,2])
      expect(gameboard.allSunk()).toBe(false)
    })

    it("returns true if all the ships are sunk", () => {
      const gameboard = Gameboard();
      const shipDetails1 = ShipDetails([[1,2], [2,2]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails1);
      const shipDetails2 = ShipDetails([[5,4], [5,5]], Ship("Patrol Boat"))
      gameboard.placeShip(shipDetails2);
      gameboard.receiveAttack([1,2])
      gameboard.receiveAttack([2,2])
      gameboard.receiveAttack([5,4])
      gameboard.receiveAttack([5,5])
      expect(gameboard.allSunk()).toBe(true)
    })
  })
})

