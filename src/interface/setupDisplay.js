const createCustomElement = require("./createCustomElement");
const positionHelpers = require("../helpers/positionHelpers");


const askForShipsPlacement = function() {
	//Create the parent element
	const shipsPlacementDiv = document.createElement("DIV");
	shipsPlacementDiv.id = "ships-placement";

	//Add the instruction element
	const placementMessage = createCustomElement("SPAN", "message");
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

const askForShipSelection = function(shipDetailsArray) {
	//Update placement message
	const placementMessage = document.getElementById("placement-message");
	placementMessage.textContent = "Click one of the ships to place on the board";

	//Add 'placed' class to buttons of placed ships (remove it from a ship that is being 're-placed')
	const shipPlacementBtns = document.getElementsByClassName("ship-placement-btn");
	const placedShipNames = shipDetailsArray.map(shipDetails => shipDetails.ship.name)
	Array.from(shipPlacementBtns).forEach(btn => {
		if (placedShipNames.includes(btn.dataset.shipName)) {
			btn.classList.add("placed")
		}
	})
}

const removePlacedClass = function(shipName) {
	const shipPlacementBtns = document.getElementsByClassName("ship-placement-btn");
	Array.from(shipPlacementBtns).forEach(btn => {
		if (btn.dataset.shipName === shipName) {
			btn.classList.remove("placed");
		}
	})
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
	askForShipsPlacement,
	askForShipSelection,
	removePlacedClass,
	selectShipToPlace,
	askForStartPosition,
	getPosition,
	askForEndPosition,
	removeShipsPlacement
};
