// Rock, Paper, Scissors

// initialise scores

let playerScore = 0;
let computerScore = 0;
let round = 0;

// First, the computer needs to create a random choice from Rock, Paper, Scissors

const computerSelection = function computerPlay() {
  //define Rock, paper, scissors array
  let gameSelection = ["rock", "paper", "scissors"];

  // get a random number between 0 and 2 for the array
  // Math.random() returns anything between 0 and 1
  // If you multiply by 3 and add Math.ceil, it will limit it between 0 and 2
  let randThree = Math.floor(Math.random() * 3);
  let computerChoice = gameSelection[randThree];
  // Now it just needs to entered into the answer
  return computerChoice;
};

// this runs the computer's choice
// computerPlay();

// Player selection
// Prompts the player to choose rock, paper or scissors

const playerSelection = () => {
  let playerChoice = prompt("Choose!").toLowerCase();
  return playerChoice;
};

// Game is played and this decides who wins
// IF computer chooses rock and player chooses paper, player wins, "You win, Paper beats Rock!"
// ELSE IF computer chooses rock and player chooses scissors, player loses, "You lose, Rock beats Scissors!"
// Win Conditions
// Paper > Rock, Scissors > Paper, Rock > Scissors

function playRound(playerSelection, computerSelection) {
  if (computerSelection == playerSelection) {
    console.log(`It's a tie! You both chose ${computerSelection}`);
  } else if (
    (computerSelection == "rock" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "rock")
  ) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  } else if (
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "rock" && playerSelection == "paper")
  ) {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
  round++;
  console.log(
    `Round ${round}: You have ${playerScore} points. The computer has ${computerScore} points.`
  );
}

// Best of 5 game

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection(), computerSelection());
  }
  if (playerScore > computerScore) {
    console.log("Well done, you won!");
  } else console.log("Sorry, the computer won!");
}
