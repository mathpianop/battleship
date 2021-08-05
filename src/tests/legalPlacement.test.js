const legalPlacement = require("../helpers/legalPlacement");
const Ship = require("../factories/Ship");
const ShipDetails = require("../factories/ShipDetails")

describe("illegalPlacementMessage", () => {
  it("returns nothing if placement is legal", () => {
    const shipsDetails = ShipDetails(
      [[1,2], [2,2]],
      Ship(2, "Patrol Boat")
    );
    const shipDetailsArray = [shipsDetails]
    const testPositions = [[2,3], [3,3], [3,4]]
    expect(legalPlacement.illegalPlacementMessage(shipDetailsArray, testPositions))
      .toBeUndefined();
  })

  it("returns a message if placement is out of bounds", () => {
    const shipsDetails = ShipDetails(
      [[1,2], [2,2]],
      Ship(2, "Patrol Boat")
    );
    const shipDetailsArray = [shipsDetails]
    const testPositions = [[0,4], [1,4], [2,4]]
    expect(legalPlacement.illegalPlacementMessage(shipDetailsArray, testPositions))
    .toBe("One or more positions are out of bounds");
  })
})