function Ship(name) {
  const SHIPLENGTHS = {
    "Patrol Boat": 2,
    "Submarine": 3,
    "Destroyer": 3,
    "Battleship": 4,
    "Carrier": 5
  }

  const length = SHIPLENGTHS[name]
  //Initialize an array as long as the ship, 
  //with each position starting out as false (not hit)
  const positionsHit = Array(length).fill(false)
  
  //Set the given position as hit
  const hit = (positionIndex) => positionsHit[positionIndex] = true
 
  //Check whether all positions are hit
  const isSunk = () => positionsHit.every(Boolean);
  
  return {
    hit, 
    isSunk, 
    get length() {
      return length
    }, 
    get name() {
      return name
    }
  }
}

module.exports = Ship;