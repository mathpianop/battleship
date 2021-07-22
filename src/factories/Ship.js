function Ship(length, name) {
  //Initialize an array as long as the ship, 
  //with each position starting out as false (not hit)
  const positionsHit = Array(length).fill(false)
  
  //Set the given position as hit
  const hit = (positionIndex) => positionsHit[positionIndex] = true
 
  //Check whether all positions are hit
  const isSunk = () => positionsHit.every(Boolean);
  
  return {hit, isSunk, length, name}
}

module.exports = Ship;