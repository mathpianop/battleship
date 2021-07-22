const coordinatesExist = require("../helpers/coordinatesExist")

describe("coordinatesExist", () => {

  it("returns true if coordinates are in bounds", () => {
    expect(coordinatesExist([2,3])).toBe(true)
  })
  it("returns false if coordinates too high", () => {
    expect(coordinatesExist([4,11])).toBe(false)
  })

  it("returns false if coordinates too low", () => {
    expect(coordinatesExist([4,0])).toBe(false)
  })

  it("returns false if coordinates too far to the right", () => {
    expect(coordinatesExist([11,10])).toBe(false)
  })

  it("returns false if coordinates too far to the left", () => {
    expect(coordinatesExist([0,5])).toBe(false)
  })

  it("returns false if coordinates are not integers", () => {
    expect(coordinatesExist([2.3, 5])).toBe(false)
  })
})