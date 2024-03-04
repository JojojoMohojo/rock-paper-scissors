function getComputerChoice() {
    let options = Array("rock", "paper", "scissors");
    let selection = Math.floor(Math.random() * options.length);
    return(options[selection]);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors" 

    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats rock"

    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats paper"

    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats rock"

    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper"

    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors"

    } else {
        return "Draw!"
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}:`);
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log(`Final scores:
    You: ${playerScore}
    Computer: ${computerScore}`)

    if (playerScore > computerScore) {
        console.log("You won the game!")
    } else if (playerScore < computerScore) {
        console.log("You lose the game!")
    } else {
        console.log("It was a draw!")
    }
}

function getPlayerChoice() {
    let selection = null;
    while (checkPlayerChoice(selection)) {
        selection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
        if (checkPlayerChoice(selection)) {
            console.log(`${selection} is not a valid choice, please type Rock, Paper or Scissors.`);
        }
    }
    return selection;
}

function checkPlayerChoice(selection) {
    if (selection != "rock" && selection != "paper" && selection != "scissors") {
        return true;
    } else {
        return false;
    }
}

playGame()