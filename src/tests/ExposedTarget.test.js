const Ship = require("../factories/Ship");
const ExposedTarget = require("../factories/ExposedTarget");

//rewrite these to use arrayIncluding

describe("hypotheticalPositions", () => {
  it("returns all four adjacent positions after one hit with no initialOrientation", () => {
    const ship = Ship("Carrier");
    const target = ExposedTarget(ship);
    target.addHitPosition([3,4]);
    expect(target.hypotheticalPositions).toEqual(
      expect.arrayContaining([[3,5], [3,3], [4,4], [2,4]])
    )
  })

  it("returns two adjacent positions after one hit with initialOrientation of horizontal", () => {
    const ship = Ship("Carrier");
    const target = ExposedTarget(ship, "horizontal");
    target.addHitPosition([3,4]);
    expect(target.hypotheticalPositions).toEqual(
      expect.arrayContaining([[4,4], [2,4]])
    )
  })

  it("returns two adjacent positions after one hit with initialOrientation of vertical", () => {
    const ship = Ship("Carrier");
    const target = ExposedTarget(ship, "vertical");
    target.addHitPosition([3,4]);
    expect(target.hypotheticalPositions).toEqual(
      expect.arrayContaining([[3,5], [3,3]])
    )
  })

  it("returns two adjacent positions after multiple hits with initialOrientation", () => {
    const ship = Ship("Carrier");
    const target = ExposedTarget(ship, "vertical");
    target.addHitPosition([3,4]);
    target.addHitPosition([3,3]);
    expect(target.hypotheticalPositions).toEqual(
      expect.arrayContaining([[3,5], [3,2]])
    )
  })

  it("returns two adjacent positions after multiple hits without initialOrientation", () => {
    const ship = Ship("Carrier");
    const target = ExposedTarget(ship);
    target.addHitPosition([3,4]);
    target.addHitPosition([4,4]);
    expect(target.hypotheticalPositions).toEqual(
      expect.arrayContaining([[2,4], [5,4]])
    )
  })
})