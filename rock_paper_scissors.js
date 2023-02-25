console.log("This is working");

function getComputerChoice() {
	let answers = ["rock", "paper", "scissors"];

	let choice = Math.floor(Math.random() * answers.length);

	return answers[choice];
}

let computerAnswer = getComputerChoice();

console.log(computerAnswer);

let playerAnswer = prompt("Pick either Rock, Paper or Scissors");

console.log(playerAnswer);
