const createCustomElement = require("./createCustomElement");


const createNameForm = function() {
	//Create form
	const form = document.createElement("FORM");
	form.id = "name-form";

	//Create and append field
	const playerName = document.createElement("INPUT");
	playerName.type = "text";
	playerName.id = "player-name";
	form.appendChild(playerName)

	//Create and append submit button
	const submitName = document.createElement("INPUT");
	submitName.type = "button";
	submitName.value = "Submit";
	submitName.id = "submit-name"
	form.appendChild(submitName)

	return form
}


const askForName = function() {
	const nameFormWrapper = document.getElementById("name-form-wrapper");
	const nameForm = createNameForm();
	nameFormWrapper.appendChild(nameForm);
}

const getName = function() {
	const playerName = document.getElementById("player-name")
	const submitName = document.getElementById("submit-name");
	return new Promise((resolve) => {
		submitName.addEventListener("click", () => {
			//resolve promise only if user has entered 
			//something other than a whitespace string
			const enteredName = playerName.value
			if (enteredName.value & enteredName.trim() !== "") {
							resolve(playerName.value)
			}
		})
	})
}

const askForShipsPlacement = function() {
	//Create the parent element
	const shipsPlacementDiv = document.createElement("DIV");
	shipsPlacementDiv.id = "ships-placement";

	//Add the instruction element
	const shipsPlacementRequest = createCustomElement("SPAN", "", "Select a ship and click on your board to set the endpoints");
	shipsPlacementDiv.appendChild(shipsPlacementRequest);

	//Add the ship placement buttons
	const ships = [
		"Patrol Boat (2)",
		"Submarine (3)",
		"Destroyer (3)",
		"Battleship (4)",
		"Carrier (5)"
	]


	const shipPlacementBtns = ships.map(shipLabel => {
		const btn = createCustomElement("BUTTON", "ship-placement-btn", shipLabel)
		btn.dataset.shipName = shipLabel.slice(0, -4);
		return btn;
	})
	shipPlacementBtns.forEach(btn => {
		shipsPlacementDiv.appendChild(btn)
	})

	//Add the parent element to the wrapper element
	const shipsPlacementWrapper = document.getElementById("ships-placement-wrapper");
	shipsPlacementWrapper.appendChild(shipsPlacementDiv);
}

const selectShipToPlace = function() {
	const shipPlacementBtns = document.getElementsByClassName("ship-placement-btn");
	return new Promise((resolve) => {
		//resolve with the shipName of the first clicked btn
		Array.from(shipPlacementBtns).forEach(btn => {
			btn.addEventListener("click", (e) => {
				resolve(e.target.dataset.shipName)
			})
		})
	})
}


module.exports = {
	askForName,
	getName,
	askForShipsPlacement,
	selectShipToPlace
};
