// Rock, Paper, Scissors

// initialise scores

let playerScore = 0;
let computerScore = 0;
let round = 0;

// First, the computer needs to create a random choice from Rock, Paper, Scissors

function computerPlay() {
  //define Rock, paper, scissors array
  let gameSelection = ["rock", "paper", "scissors"];

  // get a random number between 0 and 2 for the array
  // Math.random() returns anything between 0 and 1
  // If you multiply by 3 and add Math.ceil, it will limit it between 0 and 2
  let randThree = Math.floor(Math.random() * 3);
  let computerChoice = gameSelection[randThree];
  // Now it just needs to entered into the answer
  // console.log(`The computer chose ${computerChoice}`);
  return computerChoice;
};

// Player selection
// Prompts the player to choose rock, paper or scissors


// function playerSelection {
//   let playerChoice = this.value;
//   console.log(`You clicked on ${playerChoice} good job!`);
//   return playerChoice;
// };

// Game is played and this decides who wins
// IF computer chooses rock and player chooses paper, player wins, "You win, Paper beats Rock!"
// ELSE IF computer chooses rock and player chooses scissors, player loses, "You lose, Rock beats Scissors!"
// Win Conditions
// Paper > Rock, Scissors > Paper, Rock > Scissors

const latestScore = document.querySelector('.latest-score');
const totalScore = document.querySelector('.total-score')

function playRound() {
  let userChoice = this.value;
  // console.log(`You clicked on ${userChoice}, now to get the rest working`);
  let computerChoice = computerPlay();
  // console.log(`PC clicked on ${computerChoice}, now to get the rest working`);
  
  if (computerChoice == userChoice) {
    console.log(`It's a tie! You both chose ${computerChoice}`);
    latestScore.textContent = "It's a tie! You both chose " + computerChoice;
  } else if (
    (computerChoice == "rock" && userChoice == "paper") ||
    (computerChoice == "paper" && userChoice == "scissors") ||
    (computerChoice == "scissors" && userChoice == "rock")
  ) {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    latestScore.textContent = "You win! " + userChoice + " beats " + computerChoice;
    playerScore++;
  } else if (
    (computerChoice == "paper" && userChoice == "rock") ||
    (computerChoice == "scissors" && userChoice == "paper") ||
    (computerChoice == "rock" && userChoice == "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    latestScore.textContent = "You win! " + computerChoice + " beats " + userChoice;
    computerScore++;
  }
  round++;
  totalScore.textContent = "You have " + playerScore + " points. The computer has " + computerScore + " points.";
  console.log(
    `Round ${round}: You have ${playerScore} points. The computer has ${computerScore} points.`
  );

  game();
}

// Best of 5 game

function game() {
  for (let i = 0; i < 5; i++) {

  if (playerScore > computerScore) {
    console.log("Well done, you won!");
  } else console.log("Sorry, the computer won!");
} 
}


/////////////////// UPDATE - ADDING UI AND CHECKING SELECTION


// console.log(`You clicked on ${buttonValue}`);
// playerSelection = buttonValue;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => button.addEventListener("click", playRound));
