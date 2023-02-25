console.log("This is working");

function getComputerChoice() {
	let answers = ["rock", "paper", "scissors"];

	let choice = Math.floor(Math.random() * answers.length);

	return answers[choice];
}

let computerAnswer = getComputerChoice();

console.log(computerAnswer);

let playerAnswer = prompt("Pick either Rock, Paper or Scissors").toLowerCase();

function playRound(computerAnswer, playerAnswer) {
	if (computerAnswer === "rock" && playerAnswer === "rock") {
		console.log("It's a draw!");
	} else if (computerAnswer === "rock" && playerAnswer === "paper") {
		console.log("You Win!");
	} else if (computerAnswer === "rock" && playerAnswer === "scissors") {
		console.log("You Lose!");
	} else if (computerAnswer === "paper" && playerAnswer === "rock") {
		console.log("You Lose!");
	} else if (computerAnswer === "paper" && playerAnswer === "paper") {
		console.log("It's a draw!");
	} else if (computerAnswer === "paper" && playerAnswer === "scissors") {
		console.log("You Win!");
	} else if (computerAnswer === "scissors" && playerAnswer === "rock") {
		console.log("You Win!");
	} else if (computerAnswer === "scissors" && playerAnswer === "paper") {
		console.log("You Lose!");
	} else if (computerAnswer === "scissors" && playerAnswer === "scissors") {
		console.log("It's a Draw!");
	} else {
		console.log("You haven't entered a suitable answer");
	}
}

playRound(computerAnswer, playerAnswer);
