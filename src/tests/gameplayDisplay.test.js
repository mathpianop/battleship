/**
 * @jest-environment jsdom
 */


 const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

 const gameplayDisplay = require("../interface/gameplayDisplay")
 const initializeBoards = require("../interface/initializeBoards")
 const Game = require("../factories/Game");
 const Player = require("../factories/Player");

 
 


describe("updateBoard", () => {
  
  it("assigns a class of 'missed' to missed positions of the defensive gameboard", () => {
    initializeBoards.fillGameboards();
    //Set up a record of shots made by the human
    const mockShots = {
      human: {
        hit: [],
        missed: [
          {coors: [1,2]},
          {coors: [4,5]}
        ],
        sunk: []
      }
    }

    gameplayDisplay.updateBoard(mockShots, false);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[34];
    expect(pos1.classList.contains("missed")).toBeTruthy();
    expect(pos2.classList.contains("missed")).toBeTruthy();
  })

  it("works for the human gameboard", () => {
    initializeBoards.fillGameboards();
    //Set up a record of shots made by the computer
    const mockShots = {
      computer: {
        hit: [],
        missed: [
          {coors: [1,2]},
          {coors: [4,5]}
        ],
        sunk: []
      }
    }

    gameplayDisplay.updateBoard(mockShots, true);
    const humanGameboard = document.getElementById("human-gameboard");
    const pos1 = humanGameboard.getElementsByClassName("position")[1];
    const pos2 = humanGameboard.getElementsByClassName("position")[34];
    expect(pos1.classList.contains("missed")).toBeTruthy();
    expect(pos2.classList.contains("missed")).toBeTruthy();
  })

  it("assigns a class of 'hit' to the hit positions of the defensive gameboard", () => {
    const game = Game();
    const mockPlayer = {
      shots: {
        hit: [
          {coors: [1,2], shipName: "Battleship"},
          {coors: [4,5], shipName: "Battleship"}
        ],
        missed: [],
        sunk: []
      }
    }
    const mockShots = {
      human: {
        hit: [
          {coors: [1,2], shipName: "Battleship"},
          {coors: [4,5], shipName: "Battleship"}
        ],
        missed: [],
        sunk: []
      }
    }
    
    gameplayDisplay.updateBoard(mockShots, false);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[34];
    expect(pos1.classList.contains("hit")).toBeTruthy();
    expect(pos2.classList.contains("hit")).toBeTruthy();
  })

  it("inserts the initial of the hit ship into the position div of a hit position ", () => {
    const game = Game();
    const mockShots = {
      human: {
        hit: [
          {coors: [1,2], shipName: "Battleship"},
          {coors: [4,5], shipName: "Battleship"}
        ],
        missed: [],
        sunk: []
      }
    }
    gameplayDisplay.updateBoard(mockShots, false);
    const computerGameboard = document.getElementById("computer-gameboard");
    const pos1 = computerGameboard.getElementsByClassName("position")[1];
    const pos2 = computerGameboard.getElementsByClassName("position")[34];
    expect(pos1.textContent).toBe("B");
    expect(pos2.textContent).toBe("B"); 
  })

  it("assigns a class of 'sunk' to all positions of a sunk ship", () => {
    const game = Game();
    const mockShots = {
      human: {
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
    gameplayDisplay.updateBoard(mockShots, false);
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
  const wrapperEl = document.getElementById("error-message-wrapper");
  
  it("creates and inserts a message element into the message wrapper element", () => {
    expect(wrapperEl.firstChild).not.toBeTruthy();
    gameplayDisplay.displayIllegalMessage("Hello World");
    expect(wrapperEl.firstChild.id).toBe("error-message");
  })
  
  it("inserts the message into the message element", () => {
    gameplayDisplay.displayIllegalMessage("foo");
    const messageEl = document.getElementById("error-message");
    expect(messageEl.textContent).toBe("foo");
  })

  it("disappears the message element after 3 seconds", () => {
    jest.useFakeTimers();
    gameplayDisplay.displayIllegalMessage("Hello World");
    expect(wrapperEl.firstChild.id).toBe("error-message");
    jest.advanceTimersByTime(3000);
    expect(wrapperEl.firstChild).toBe(null);
  })
})

describe("displayVictory", () => {
  const wrapperEl = document.getElementById("victory-message-wrapper");
  const humanVictor = Player("Paul")
  const humanAnonymousVictor = Player();
  const computerVictor = Player("computer", true);

  it("creates and inserts a message element into the message wrapper element", () => { 
    expect(wrapperEl.firstChild).not.toBeTruthy();
    gameplayDisplay.displayVictory(humanVictor);
    expect(wrapperEl.firstChild.id).toBe("victory-message");
  })

  it("inserts a disappointed message if the computer wins", () => {
    gameplayDisplay.displayVictory(computerVictor);
    expect(wrapperEl.firstChild.textContent).toBe("Rats! Computer wins...");
  })

  it("inserts a generic message if an anonymous human wins", () => {
    gameplayDisplay.displayVictory(humanAnonymousVictor);
    expect(wrapperEl.firstChild.textContent).toBe("Congratulations, you win!");
  })

  it("inserts a custom message if a named human wins", () => {
    gameplayDisplay.displayVictory(humanVictor);
    expect(wrapperEl.firstChild.textContent).toBe("Congratulations, Paul, you win!");
  })

  xit("adds a new game button", () => {
    gameplayDisplay.displayVictory(humanVictor);
    const newGameBtn = document.getElementById("new-game-btn")
    expect(newGameBtn).toBeTruthy();
  })
})

describe("displayComputerResponse", () => {
  it("adds the message to the response element", () => {
    gameplayDisplay.displayComputerResponse("Hello World")
    const responseEl = document.getElementById("computer-response")
    expect(responseEl.textContent).toBe("Hello World")
  })

  it("disappears the response element after 3 seconds", () => {
    const wrapperEl = document.getElementById("computer-response-wrapper")
    jest.useFakeTimers();
    gameplayDisplay.displayComputerResponse("Hello World")
    expect(wrapperEl.firstChild.id).toBe("computer-response");
    jest.advanceTimersByTime(3000);
    expect(wrapperEl.firstChild).toBe(null);
  })
})