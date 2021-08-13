const getOccupiedPositions = require("../helpers/getOccupiedPositions");
const Ship = require("../factories/Ship");
const ShipDetails = require("../factories/ShipDetails");


describe("getOccupiedPositions", () => {
  it("returns an array with all of the positions of the shipsDetailsArray", () => {
    const shipsDetailsArray = [
      ShipDetails([[1,1], [1,2]], Ship("Patrol Boat")),
      ShipDetails([[3,4], [3,5], [3,6]], Ship("Destroyer")),
    ]
    expect(getOccupiedPositions(shipsDetailsArray)).toMatchObject([[1,1], [1,2], [3,4], [3,5], [3,6]])
  })
})