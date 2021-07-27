const createCustomElement = function(type, className, text) {
  const el = document.createElement(type);
  el.className = className;
  if (text) {el.textContent = text;}
  return el;
}

const fillGameboard = function() {
  const rowIndices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const humanGameboard = document.getElementById("human-gameboard")
  const computerGameboard = document.getElementById("computer-gameboard")

  const wipeBoard = function(board) {
    board.textContent = "";
  }

  const createPositionEl = function(coordinates) {
    const positionEl = createCustomElement("DIV", "position")
    positionEl.dataset.xCoor = coordinates[0];
    positionEl.dataset.yCoor = coordinates[1];
    return positionEl
  }

  const createRowIndexDiv = function(index) {
    return createCustomElement("DIV", "row-index", rowIndices[index]);
  }

  const createColumnIndex = function(index) {
    return createCustomElement("DIV", "column-index", index + 1);
  }
  
  const createEmptyCorner = function() {
    return createCustomElement("DIV", "empty-corner")
  }

  //Begin by wiping both boards
  wipeBoard(humanGameboard);
  wipeBoard(computerGameboard);

  //Create the column index row
  humanGameboard.appendChild(createEmptyCorner())
  computerGameboard.appendChild(createEmptyCorner())
  for (let i = 0; i < 10; i++) {
    //Add the column index
    humanGameboard.appendChild(createColumnIndex(i))
    computerGameboard.appendChild(createColumnIndex(i))
  }

  //Create the main rows
  for (let i = 0; i < 10; i++) {
    // Add the row index to both gameboards
    humanGameboard.appendChild(createRowIndexDiv(i))
    computerGameboard.appendChild(createRowIndexDiv(i));
    //Add a row of position divs to both gameboards
    for (let j = 0; j < 10; j++ ) {
      humanGameboard.appendChild(createPositionEl([i + 1, j + 1]))
      computerGameboard.appendChild(createPositionEl([i + 1, j + 1]));
    }
  }
}



const attachPositionListeners = function(takeHumanTurn) {
  const positionEls = document.getElementsByClassName("position");
  for (i = 0; i < positionEls.length; i++) {
    positionEls[i].addEventListener("click", (e) => {
      const xCoordinate = parseInt(e.target.dataset.xCoor);
      const yCoordinate = parseInt(e.target.dataset.yCoor);
      takeHumanTurn(xCoordinate, yCoordinate)
    })
  }
}



module.exports = {fillGameboard, attachPositionListeners}