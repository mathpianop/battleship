const createPositionButtons = function() {
  const createPositionDiv = function(coordinates) {
    const positionDiv = document.createElement("DIV");
    positionDiv.className = "position";
    positionDiv.dataset.xCoor = coordinates[0];
    positionDiv.dataset.yCoor = coordinates[1]
    return positionDiv
  }
  
  const humanGameboard = document.getElementById("human-gameboard")
  const computerGameboard = document.getElementById("computer-gameboard")
  
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++ ) {
      humanGameboard.appendChild(createPositionDiv([i, j]))
      computerGameboard.appendChild(createPositionDiv([i, j]));
    }
  }
}



export {createPositionButtons}