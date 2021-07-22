function AttackReport(coors, hitShip) {
  if (hitShip) {
    //If the attack shot hits, report hit details
    return {
      hit: true,
      sunk: hitShip.isSunk(),
      shipName: hitShip.name,
      coors: coors
    }
  } else {
    //If the shot misses, report hit as false
    return {
      hit: false,
      coors: coors
    }
  }
}

export default AttackReport;
