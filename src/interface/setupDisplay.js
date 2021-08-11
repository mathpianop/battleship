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

}

module.exports = {
	askForName,
	getName,
	askForShipsPlacement
};
