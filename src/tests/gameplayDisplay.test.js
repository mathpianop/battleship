/**
 * @jest-environment jsdom
 */


 const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

 const gameplayDisplay = require("../interface/gameplayDisplay")


describe("updateBoard", () => {
  xit("assigns a class of 'missed' to missed positions of the defensive gameboard", () => {
    
  })

  xit("assigns a class of 'hit' to the hit positions of the defensive gameboard", () => {
    
  })

  xit("inserts the initial of the hit ship into the position div of a hit position ", () => {
    
  })

  xit("assigns a class of 'sunk' to all positions of a sunk ship", () => {
    
  })
})

describe("displayIllegalMessage", () => {
  xit("inserts the message into the message div", () => {
    
  })

  xit("disappears the message after 3 seconds", () => {
    
  })
})

describe("displayVictory", () => {
  xit("", () => {
    
  })
})