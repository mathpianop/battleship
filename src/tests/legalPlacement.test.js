const legalPlacement = require("../helpers/legalPlacement");
const Ship = require("../factories/Ship");

describe("illegalPlacementMessage", () => {
  it("returns nothing if placement is legal", () => {
    const shipsDetails = [
      {ship: Ship(2, "Patrol Boat"), positions: [[1,2], [2,2]]}
    ]
    const testPositions = [[2,3], [3,3], [3,4]]
    expect(legalPlacement.illegalPlacementMessage(shipsDetails, testPositions))
      .toBeUndefined();
  })

  it("returns a message if placement is out of bounds", () => {
    const shipsDetails = [
      {ship: Ship(2, "Patrol Boat"), positions: [[1,2], [2,2]]}
    ]

    const testPositions = [[0,4], [1,4], [2,4]]
    expect(legalPlacement.illegalPlacementMessage(shipsDetails, testPositions))
    .toBe("One or more positions are out of bounds");
  })
})