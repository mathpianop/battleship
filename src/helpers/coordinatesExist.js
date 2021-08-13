module.exports = function coordinatesExist(coors) {
  return (
    coors[0] <= 10 &&       
    coors[0] >= 1 &&
    coors[1] <= 10 &&
    coors[1] >= 1
  )
}