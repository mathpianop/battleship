const Gameboard = require("../factories/Gameboard");
const Ship = require("../factories/Ship")

describe("Gameboard", () => {


  
  describe("placeShip", () => {
    it("throws an error if given illegal position", () => {
      const gameboard = Gameboard();
      const ship = Ship(2, "Patrol Boat")
      expect(() => gameboard.placeShip([[1,2], [0,2]], ship)).toThrow()
    }) 
    
    it("does not throw an error if given positions are in bounds", () => {
      const gameboard = Gameboard();
      const ship = Ship(2, "Patrol Boat")
      expect(() => gameboard.placeShip([[1,2], [2,2]], ship)).not.toThrow()
    })
  })

  describe("receiveAttack", () => {
    it("assigns a report object to attackReport", () => {
      const gameboard = Gameboard();
      const ship = Ship(2, "Patrol Boat")
      gameboard.placeShip([[1,2], [2,2]], ship);
      expect(gameboard.getAttackReport()).toEqual({});
      gameboard.receiveAttack([2,2]);
      expect(gameboard.getAttackReport()).toEqual(
        expect.objectContaining({
          hit: true,
          shipName: "Patrol Boat"
        })
      )
    })

    it("updates attackReport between attacks", () => {
      const gameboard = Gameboard();
      const ship = Ship(2, "Patrol Boat")
      gameboard.placeShip([[1,2], [2,2]], ship);
      gameboard.receiveAttack([1,2])
      expect(gameboard.getAttackReport()).toEqual(
        expect.objectContaining({
          hit: true
        })
      )
      gameboard.receiveAttack([4,3])
      expect(gameboard.getAttackReport()).toEqual(
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
      const ship1 = Ship(2, "Patrol Boat")
      gameboard.placeShip([[1,2], [2,2]], ship1);
      const ship2 = Ship(2, "Patrol Boat")
      gameboard.placeShip([[5,4], [5,5]], ship2);
      expect(gameboard.allSunk()).toBe(false)
    })

    it("returns false if some ships are sunk and some are not", () => {
      const gameboard = Gameboard();
      const ship1 = Ship(2, "Patrol Boat")
      gameboard.placeShip([[1,2], [2,2]], ship1);
      const ship2 = Ship(2, "Patrol Boat")
      gameboard.placeShip([[5,4], [5,5]], ship2);
      gameboard.receiveAttack([1,2])
      gameboard.receiveAttack([2,2])
      expect(gameboard.allSunk()).toBe(false)
    })

    it("returns true if all the ships are sunk", () => {
      const gameboard = Gameboard();
      const ship1 = Ship(2, "Patrol Boat")
      gameboard.placeShip([[1,2], [2,2]], ship1);
      const ship2 = Ship(2, "Patrol Boat")
      gameboard.placeShip([[5,4], [5,5]], ship2);
      gameboard.receiveAttack([1,2])
      gameboard.receiveAttack([2,2])
      gameboard.receiveAttack([5,4])
      gameboard.receiveAttack([5,5])
      expect(gameboard.allSunk()).toBe(true)
    })
  })
})

