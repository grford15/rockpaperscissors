console.log("This is working");

function getComputerChoice() {
	let answers = ["rock", "paper", "scissors"];

	let choice = Math.floor(Math.random() * answers.length);

	return answers[choice];
}

console.log(getComputerChoice());
