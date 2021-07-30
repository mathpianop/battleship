/**
 * @jest-environment jsdom
 */


 const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

 const gameplayDisplay = require("../interface/gameplayDisplay")
 const Game = require("../factories/Game");


 


describe("updateBoard", () => {
  
  it("assigns a class of 'missed' to missed positions of the defensive gameboard", () => {
    const game = Game();
    const mockPlayer = {
      getShots: () => {
        return {
        hit: [],
        missed: [
          {coors: [1,2]},
          {coors: [4,5]}
        ],
        sunk: []
        }
      }
    }
    gameplayDisplay.updateBoard(mockPlayer);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[34];
    expect(pos1.classList.contains("missed")).toBeTruthy();
    expect(pos2.classList.contains("missed")).toBeTruthy();
  })

  it("works for the human gameboard", () => {
    const game = Game();
    const mockPlayer = {
      getShots: () => {
        return {
        hit: [],
        missed: [
          {coors: [1,2]},
          {coors: [4,5]}
        ],
        sunk: []
        }
      },
      isComputer: true
    }
    gameplayDisplay.updateBoard(mockPlayer);
    const humanGameboard = document.getElementById("human-gameboard");
    const pos1 = humanGameboard.getElementsByClassName("position")[1];
    const pos2 = humanGameboard.getElementsByClassName("position")[34];
    expect(pos1.classList.contains("missed")).toBeTruthy();
    expect(pos2.classList.contains("missed")).toBeTruthy();
  })

  it("assigns a class of 'hit' to the hit positions of the defensive gameboard", () => {
    const game = Game();
    const mockPlayer = {
      getShots: () => {
        return {
        hit: [
          {coors: [1,2], shipName: "Battleship"},
          {coors: [4,5], shipName: "Battleship"}
        ],
        missed: [],
        sunk: []
        }
      }
    }
    gameplayDisplay.updateBoard(mockPlayer);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[34];
    expect(pos1.classList.contains("hit")).toBeTruthy();
    expect(pos2.classList.contains("hit")).toBeTruthy();
  })

  it("inserts the initial of the hit ship into the position div of a hit position ", () => {
    const game = Game();
    const mockPlayer = {
      getShots: () => {
        return {
        hit: [
          {coors: [1,2], shipName: "Battleship"},
          {coors: [4,5], shipName: "Battleship"}
        ],
        missed: [],
        sunk: []
        }
      }
    }
    gameplayDisplay.updateBoard(mockPlayer);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[34];
    expect(pos1.textContent).toBe("B");
    expect(pos2.textContent).toBe("B"); 
  })

  it("assigns a class of 'sunk' to all positions of a sunk ship", () => {
    const game = Game();
    const mockPlayer = {
      getShots: () => {
        return {
        hit: [
          {coors: [1,2], shipName: "Battleship"},
          {coors: [1,3], shipName: "Battleship"},
          {coors: [1,4], shipName: "Battleship"},
          {coors: [1,5], shipName: "Battleship"}
        ],
        missed: [],
        sunk: [
            {
              coorsSet: [[1,2],[1,3],[1,4],[1,5]],
              shipName: "Battleship"
            }
          ]
        }
      }
    }
    gameplayDisplay.updateBoard(mockPlayer);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[2];
    const pos3 = computerGameboard.getElementsByClassName("position")[3];
    const pos4 = computerGameboard.getElementsByClassName("position")[4];
    expect(pos1.classList.contains("sunk")).toBeTruthy();
    expect(pos2.classList.contains("sunk")).toBeTruthy();
    expect(pos3.classList.contains("sunk")).toBeTruthy();
    expect(pos4.classList.contains("sunk")).toBeTruthy();

  })
})

describe("displayIllegalMessage", () => {
  it("inserts the message into the message element", () => {
    const messageEl = document.getElementById("error-message");
    expect(messageEl.textContent).toBe("");
    gameplayDisplay.displayIllegalMessage("Hello World");
    expect(messageEl.textContent).toBe("Hello World");
  })

  it("disappears the message after 3 seconds", () => {
    jest.useFakeTimers();
    const messageEl = document.getElementById("error-message");
    gameplayDisplay.displayIllegalMessage("Hello World");
    jest.advanceTimersByTime(3000);
    expect(messageEl.textContent).toBe("");
  })
})

describe("displayVictory", () => {
  xit("", () => {
    
  })
})