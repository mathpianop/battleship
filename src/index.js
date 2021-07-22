import "./style/style.css"
import Game from "./factories/Game";


const createPositionDiv = function() {
  const positionDiv = document.createElement("DIV");
  positionDiv.className = "position";
  return positionDiv
}

const humanGameboard = document.getElementById("human-gameboard")
const computerGameboard = document.getElementById("computer-gameboard")

for (let i = 0; i < 100; i++) {
  humanGameboard.appendChild(createPositionDiv())
  computerGameboard.appendChild(createPositionDiv());
}

Game();