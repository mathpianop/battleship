const AttackReport = require("../factories/AttackReport")
const Ship = require("../factories/Ship")

describe("AttackReport", () => {
  it("returns a report object with the a coors property", () => {
    expect(AttackReport([1,2])).toEqual(
      expect.objectContaining({coors: [1,2]})
    )
  })

  it("returns a report object with a false hit property when no hitShip is passed", () => {
    expect(AttackReport([1,2])).toEqual(
      expect.objectContaining({hit: false})
    )
  })

  it("returns a report object with hit details when passed a hitShip object", () => {
    const hitShip = Ship(2, "Patrol Boat");
    hitShip.hit(0);
    hitShip.hit(1);
    expect(AttackReport([1,2], hitShip)).toEqual(
      expect.objectContaining({
        hit: true,
        shipName: "Patrol Boat"
      })
    )
  })

  it("returns a report object with a true sunk property when passed a sunk hitShip object", () => {
    const hitShip = Ship(2, "Patrol Boat");
    hitShip.hit(0);
    hitShip.hit(1);
    expect(AttackReport([1,2], hitShip)).toEqual(
      expect.objectContaining({
        sunk: true
      })
    )
  })
})