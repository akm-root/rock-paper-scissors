function getComputerChoice() {
  let objects = ["rock", "paper", "scissors"];
  return objects[Math.floor(Math.random() * objects.length)];
}

function playRound() {
  let userChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
  let computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    return "tied";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer";
    } else {
      return "user";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "user";
    } else {
      return "computer";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer";
    } else {
      return "user";
    }
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  let i = 0;
  while (i < 5) {
    let roundWinner = playRound();
    if (roundWinner === "user") {
      userScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    }
    i++;
  }
  if (userScore === computerScore) {
    alert(`
    User: ${userScore}
    Computer: ${computerScore}
    Game tied`);
  } else if (userScore < computerScore) {
    alert(`
    User: ${userScore}
    Computer: ${computerScore}
    Computer won!`);
  } else if (userScore > computerScore) {
    alert(`
    User: ${userScore}
    Computer: ${computerScore}
    User won!`);
  }
}

game();
