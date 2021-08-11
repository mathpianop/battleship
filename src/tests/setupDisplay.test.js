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
  it("Creates a name form", () => {
    const nameFormWrapper = document.getElementById("name-form-wrapper");
    expect(nameFormWrapper.firstChild).not.toBeTruthy()
    setupDisplay.askForName();
    expect(nameFormWrapper.firstChild.id).toBe("name-form")
  })
})

describe("getName", () => {
  it("returns a Promise which resolves to the player's name", () => {
    setupDisplay.askForName();
    const namePromise = setupDisplay.getName();
    const submitName = document.getElementById("submit-name");
    const playerName = document.getElementById("player-name");
    playerName.value = "Paul";
    submitName.click();
    namePromise.then(name => {
        expect(name).toBe("Paul")
    })
  })

  it("does nothing if the submit is clicked with an empty string", () => {
    setupDisplay.askForName();
    const namePromise = setupDisplay.getName();
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
    setupDisplay.askForName();
    const namePromise = setupDisplay.getName();
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

