function AttackReport(coors, hitShip) {
  if (hitShip && hitShip.isSunk()) {
    //If the attack shot hits, report hit details
    return {
      hit: true,
      sunk: true,
      shipName: hitShip.name,
      coors: coors,
      message: `${hitShip.name} hit and sunk!`
    }
  } else if (hitShip) {
    return {
      hit: true,
      sunk: false,
      shipName: hitShip.name,
      coors: coors,
      message: `${hitShip.name} hit!`
    }
  } else {
    //If the shot misses, report hit as false
    return {
      hit: false,
      coors: coors,
      message: "Missed!"
    }
  }
}

module.exports = AttackReport;
