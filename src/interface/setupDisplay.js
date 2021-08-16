const createCustomElement = require("./createCustomElement");
const positionHelpers = require("../helpers/positionHelpers");


const createNameForm = function() {
	//Create form
	const form = document.createElement("FORM");
	form.id = "name-form";

	//Create and append name request
	const nameRequest = createCustomElement("SPAN", "name-request", "Please enter your name");
	form.appendChild(nameRequest);

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
			if (enteredName && (enteredName.trim() !== "")) {
				resolve(playerName.value)
			}
		})
	})
}

const removeNameForm = function() {
	const nameFormWrapper = document.getElementById("name-form-wrapper");
	nameFormWrapper.textContent = "";
}


const askForShipsPlacement = function() {
	//Create the parent element
	const shipsPlacementDiv = document.createElement("DIV");
	shipsPlacementDiv.id = "ships-placement";

	//Add the instruction element
	const placementMessage = createCustomElement("SPAN", "message", "Select a ship and click on your board to set the endpoints");
	placementMessage.id = "placement-message"
	shipsPlacementDiv.appendChild(placementMessage);

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

const askForStartPosition = function() {
	const placementMessage = document.getElementById("placement-message");
	placementMessage.textContent = "Click the board to select one endpoint"
}

const getPosition = function(possiblePositions) {

	//Get the elements of the corresponding possibleStartPositions
	const gameboardPositions = document.getElementById("human-gameboard")
																			.getElementsByClassName("position");

	const possiblePositionDivs = possiblePositions.map(position => {
		return positionHelpers.getPositionDivFromCoors(position, gameboardPositions)
	})

	//Attach a 'selectable' class to each element
	possiblePositionDivs.forEach(div => {
		div.classList.add("selectable")
	})

	return new Promise((resolve) => {
		//Define handler
		const handleClick = function(e) {
			//Remove the 'selectable' class from all of the formerly selectable positions
			possiblePositionDivs.forEach(div => {
				div.classList.remove("selectable")
				div.removeEventListener("click", handleClick)
			})
			//Add the 'selected' class to the clicked element
			e.target.classList.add("selected");
			//resolve with the coors of the first clicked position div
			resolve([parseInt(e.target.dataset.xCoor), parseInt(e.target.dataset.yCoor)])
		}
		//Attach handler
		possiblePositionDivs.forEach(div => {
			div.addEventListener("click", handleClick)
		})
	})
}

const askForEndPosition = function() {
	const placementMessage = document.getElementById("placement-message");
	placementMessage.textContent = "Click one of the possible other endpoints"
}

const removeShipsPlacement = function() {
	const shipsPlacementWrapper = document.getElementById("ships-placement-wrapper");
	shipsPlacementWrapper.textContent = "";
}



module.exports = {
	askForName,
	getName,
	removeNameForm,
	askForShipsPlacement,
	selectShipToPlace,
	askForStartPosition,
	getPosition,
	askForEndPosition,
	removeShipsPlacement
};
