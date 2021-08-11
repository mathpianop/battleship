/**
 * @jest-environment jsdom
 */


 const fs = require("fs");
 window.document.body.innerHTML = fs.readFileSync("./dist/index.html");

const setupDisplay = require("../interface/setupDisplay");

beforeEach(() => {
  const nameFormWrapper = document.getElementById("name-form-wrapper");
  nameFormWrapper.textContent = "";
})

describe("askForName", () => {
  it("returns a Promise which resolves to the player's name", () => {
    const namePromise = setupDisplay.askForName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })

  it("does nothing if the submit is clicked with an empty string", () => {
    const namePromise = setupDisplay.askForName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    submitName.click();
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })

  it("does nothing if the submit is clicked with whitespace", () => {
    const namePromise = setupDisplay.askForName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    playerName.value = "  ";
    submitName.click();
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })
})

