const possiblePositions = require("../helpers/possiblePositions");
const Ship = require("../factories/Ship");
const ShipDetails = require("../factories/ShipDetails")

describe("calculateStartPositions", () => {
  it("returns excludes the given currentOccupiedPositions", () => {
    //Exclude the two occupied positions
    const possibleStartPositions = [
      [ 1, 3 ],  [ 1, 4 ],   [ 1, 5 ],  [ 1, 6 ],
      [ 1, 7 ],  [ 1, 8 ],  [ 1, 9 ],  [ 1, 10 ],  [ 2, 1 ],  [ 2, 2 ],
      [ 2, 3 ],  [ 2, 4 ],  [ 2, 5 ],  [ 2, 6 ],   [ 2, 7 ],  [ 2, 8 ],
      [ 2, 9 ],  [ 2, 10 ], [ 3, 1 ],  [ 3, 2 ],   [ 3, 3 ],  [ 3, 4 ],
      [ 3, 5 ],  [ 3, 6 ],  [ 3, 7 ],  [ 3, 8 ],   [ 3, 9 ],  [ 3, 10 ],
      [ 4, 1 ],  [ 4, 2 ],  [ 4, 3 ],  [ 4, 4 ],   [ 4, 5 ],  [ 4, 6 ],
      [ 4, 7 ],  [ 4, 8 ],  [ 4, 9 ],  [ 4, 10 ],  [ 5, 1 ],  [ 5, 2 ],
      [ 5, 3 ],  [ 5, 4 ],  [ 5, 5 ],  [ 5, 6 ],   [ 5, 7 ],  [ 5, 8 ],
      [ 5, 9 ],  [ 5, 10 ], [ 6, 1 ],  [ 6, 2 ],   [ 6, 3 ],  [ 6, 4 ],
      [ 6, 5 ],  [ 6, 6 ],  [ 6, 7 ],  [ 6, 8 ],   [ 6, 9 ],  [ 6, 10 ],
      [ 7, 1 ],  [ 7, 2 ],  [ 7, 3 ],  [ 7, 4 ],   [ 7, 5 ],  [ 7, 6 ],
      [ 7, 7 ],  [ 7, 8 ],  [ 7, 9 ],  [ 7, 10 ],  [ 8, 1 ],  [ 8, 2 ],
      [ 8, 3 ],  [ 8, 4 ],  [ 8, 5 ],  [ 8, 6 ],   [ 8, 7 ],  [ 8, 8 ],
      [ 8, 9 ],  [ 8, 10 ], [ 9, 1 ],  [ 9, 2 ],   [ 9, 3 ],  [ 9, 4 ],
      [ 9, 5 ],  [ 9, 6 ],  [ 9, 7 ],  [ 9, 8 ],   [ 9, 9 ],  [ 9, 10 ],
      [ 10, 1 ], [ 10, 2 ], [ 10, 3 ], [ 10, 4 ],  [ 10, 5 ], [ 10, 6 ],
      [ 10, 7 ], [ 10, 8 ], [ 10, 9 ], [ 10, 10 ]
    ]

    expect(possiblePositions.calculateStartPositions([[1,1], [1,2]], 3)).toMatchObject(possibleStartPositions)
  })

  it("excludes positions which are unoccupied, but would result in no possible end positions", () => {
    //Exclude [1,1] ---- [4,4], which are either occupied or 'landlocked'
    const possibleStartPositions =  [
      [ 1, 5 ],  [ 1, 6 ], [ 1, 7 ],  [ 1, 8 ],  [ 1, 9 ],  [ 1, 10 ],
      [ 2, 5 ],  [ 2, 6 ],   [ 2, 7 ],  [ 2, 8 ], [ 2, 9 ],  [ 2, 10 ], 
      [ 3, 5 ],  [ 3, 6 ],  [ 3, 7 ],  [ 3, 8 ],   [ 3, 9 ],  [ 3, 10 ],
      [ 4, 5 ],  [ 4, 6 ], [ 4, 7 ],  [ 4, 8 ],  [ 4, 9 ],  [ 4, 10 ],
      [ 5, 1 ],  [ 5, 2 ],
      [ 5, 3 ],  [ 5, 4 ],  [ 5, 5 ],  [ 5, 6 ],   [ 5, 7 ],  [ 5, 8 ],
      [ 5, 9 ],  [ 5, 10 ], [ 6, 1 ],  [ 6, 2 ],   [ 6, 3 ],  [ 6, 4 ],
      [ 6, 5 ],  [ 6, 6 ],  [ 6, 7 ],  [ 6, 8 ],   [ 6, 9 ],  [ 6, 10 ],
      [ 7, 1 ],  [ 7, 2 ],  [ 7, 3 ],  [ 7, 4 ],   [ 7, 5 ],  [ 7, 6 ],
      [ 7, 7 ],  [ 7, 8 ],  [ 7, 9 ],  [ 7, 10 ],  [ 8, 1 ],  [ 8, 2 ],
      [ 8, 3 ],  [ 8, 4 ],  [ 8, 5 ],  [ 8, 6 ],   [ 8, 7 ],  [ 8, 8 ],
      [ 8, 9 ],  [ 8, 10 ], [ 9, 1 ],  [ 9, 2 ],   [ 9, 3 ],  [ 9, 4 ],
      [ 9, 5 ],  [ 9, 6 ],  [ 9, 7 ],  [ 9, 8 ],   [ 9, 9 ],  [ 9, 10 ],
      [ 10, 1 ], [ 10, 2 ], [ 10, 3 ], [ 10, 4 ],  [ 10, 5 ], [ 10, 6 ],
      [ 10, 7 ], [ 10, 8 ], [ 10, 9 ], [ 10, 10 ]
    ];

    const occcupiedPositions = [
      [1,1], [1,2], [1,3], [1,4],
      [2,1],               [2,4],
      [3,1],                [3,4],
      [4,1], [4,2], [4,3], [4,4]
    ];

    expect(possiblePositions.calculateStartPositions(occcupiedPositions, 5)).toMatchObject(possibleStartPositions)
  })
})

describe("calculateOrientations", () => {
  it("returns the positions of the four possible orientations", () => {
    expect(possiblePositions.calculateOrientations(2, [3,4])).toMatchObject(
      [[[3,4], [3,5]], [[3,4], [3,3]], [[3,4], [4,4]], [[3,4], [2,4]]]
    )
  })
})

describe("calculateEndPositions", () => {
  it("works for basic case (all 4 work)", () => {
    const occupiedPositions = [[1,1], [1,2]]
    
    expect(possiblePositions.calculateEndPositions(occupiedPositions, 4, [5,6])).toMatchObject(
      [[5,9], [5,3], [8,6], [2,6]]
    )
  })

  it("does not include end positions that would result in overlap", () => {
    const occupiedPositions = [[7,6]]
    expect(possiblePositions.calculateEndPositions(occupiedPositions, 4, [5,6])).toMatchObject(
      [[5,9], [5,3], [2,6]]
    )
  })

  it("does not include positions that would result in out-of-bounds placement", () => {
    const occupiedPositions = [[1,1], [1,2]]
    expect(possiblePositions.calculateEndPositions(occupiedPositions, 4, [5,8])).toMatchObject(
      [[5,5], [8,8], [2,8]]
    )
  })
})

describe("getPositionsFromEndpoints", () => {
  it("works for up case", () => {
    expect(possiblePositions.getPositionsFromEndpoints([1,2], [1,5])).toMatchObject(
      [[1,2], [1,3], [1,4], [1,5]]
    );
  })

  it("works for down case", () => {
    expect(possiblePositions.getPositionsFromEndpoints([1,5], [1,2])).toMatchObject(
      [[1,5], [1,4], [1,3], [1,2]]
    );
  })

  it("works for right case", () => {
    expect(possiblePositions.getPositionsFromEndpoints([1,2], [4,2])).toMatchObject(
      [[1,2], [2,2], [3,2], [4,2]]
    );
  })

  it("works for right case", () => {
    expect(possiblePositions.getPositionsFromEndpoints([4,2], [1,2])).toMatchObject(
      [[4,2], [3,2], [2,2], [1,2]]
    );
  })
})