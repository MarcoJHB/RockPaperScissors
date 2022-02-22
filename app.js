// Rock, Paper, Scissors

// initialise scores

let playerScore = 0;
let computerScore = 0;
let round = 0;
let maxRound = 5;

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
}

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

const latestScore = document.querySelector(".latest-score");
const totalScore = document.querySelector(".total-score");
const winner = document.querySelector(".winner");

function playRound() {
  let userChoice = this.value;
  let computerChoice = computerPlay();

  if (computerChoice == userChoice) {
    console.log(`It's a tie! You both chose ${computerChoice}`);
    latestScore.textContent = "It's a tie! You both chose " + computerChoice;
  } else if (
    (computerChoice == "rock" && userChoice == "paper") ||
    (computerChoice == "paper" && userChoice == "scissors") ||
    (computerChoice == "scissors" && userChoice == "rock")
  ) {
    console.log(`You win! ${userChoice} beats ${computerChoice}`);
    latestScore.textContent =
      "You win! " +
      userChoice.toUpperCase() +
      " beats " +
      computerChoice.toUpperCase();
    playerScore++;
  } else if (
    (computerChoice == "paper" && userChoice == "rock") ||
    (computerChoice == "scissors" && userChoice == "paper") ||
    (computerChoice == "rock" && userChoice == "paper")
  ) {
    console.log(`You lose! ${computerChoice} beats ${userChoice}`);
    latestScore.textContent =
      "You win! " +
      computerChoice.toUpperCase() +
      " beats " +
      userChoice.toUpperCase();
    computerScore++;
  }
  round++;
  totalScore.textContent =
    "Player: " + playerScore + " | Computer: " + computerScore + "";
  console.log(
    `Round ${round}: You have ${playerScore} points. The computer has ${computerScore} points.`
  );

  // Select number of rounds before game ends

  if (round >= maxRound) {
    if (playerScore > computerScore) {
      console.log(
        `You win! You beat the computer with a score of ${playerScore} to ${computerScore}`
      );
      winner.textContent =
        "Congrats! You beat the computer with a score of " +
        playerScore +
        " to " +
        computerScore +
        ".";
      replayBtn.classList.remove("end-round");
      buttons.forEach((button) =>
        button.removeEventListener("click", playRound)
      );
    } else if (playerScore < computerScore) {
      console.log(
        `You lose! The computer won with a score of ${computerScore} to ${playerScore}`
      );
      winner.textContent =
        "You lose! The computer won with a score of " +
        computerScore +
        " to " +
        playerScore +
        ".";
      replayBtn.classList.remove("end-round");
      buttons.forEach((button) =>
        button.removeEventListener("click", playRound)
      );
    } else {
      console.log(
        `It's a tie! You both got a score of ${computerScore} to ${playerScore}`
      );
      winner.textContent = "It's a tie!! You both scored " + playerScore + ".";
      replayBtn.classList.remove("end-round");
      buttons.forEach((button) =>
        button.removeEventListener("click", playRound)
      );
    }
  }
}

/////////////////// UPDATE - ADDING UI AND CHECKING SELECTION

const buttons = document.querySelectorAll(".player-btn");

buttons.forEach((button) => button.addEventListener("click", playRound));

const replayBtn = document.querySelector("#player-btn");
replayBtn.addEventListener("click", resetGame);

function resetGame() {
  console.log("game reset!");
  latestScore.textContent = "Good luck!";
  totalScore.textContent = "Player: 0 | Computer: 0";
  winner.textContent = "🪨 beats ✂️, ✂️ beats 📃, 📃 beats 🪨.";
  playerScore = 0;
  computerScore = 0;
  round = 0;
  replayBtn.classList.add("end-round");
  buttons.forEach((button) => button.addEventListener("click", playRound));
}
