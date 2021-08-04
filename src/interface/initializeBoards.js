const createCustomElement = require("./createCustomElement.js");

const ROWINDICES = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

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
  return createCustomElement("DIV", "row-index", ROWINDICES[index]);
}

const createColumnIndex = function(index) {
  return createCustomElement("DIV", "column-index", index + 1);
}

const createEmptyCorner = function() {
  return createCustomElement("DIV", "empty-corner")
}


const fillGameboards = function() {
  
  const humanGameboard = document.getElementById("human-gameboard")
  const computerGameboard = document.getElementById("computer-gameboard")


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



const attachPositionListeners = function(takeRound) {
  const positionEls = document.getElementById("computer-gameboard")
                              .getElementsByClassName("position");
  for (i = 0; i < positionEls.length; i++) {
    //Attach the listener
    positionEls[i].addEventListener("click", (e) => {
      const xCoordinate = parseInt(e.target.dataset.xCoor);
      const yCoordinate = parseInt(e.target.dataset.yCoor);
      takeRound([xCoordinate, yCoordinate])
    })

    positionEls[i].classList.add("active")
  }
}



module.exports = {fillGameboards, attachPositionListeners}