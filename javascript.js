const rButton = document.querySelector("#rock");
const pButton = document.querySelector("#paper");
const sButton = document.querySelector("#scissors");
const resultsDiv = document.querySelector(".results");
const finalResultDiv = document.querySelector(".final-result");
const scoreDiv = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

rButton.addEventListener("click", () => {
    let result = playRound("rock", getComputerChoice());
    updateResultsDiv(result);
    checkResult(result);
    updateScoreDiv(result);
})

pButton.addEventListener("click", () => {
    let result = playRound("paper", getComputerChoice());
    updateResultsDiv(result);
    checkResult(result);
    updateScoreDiv(result);
})

sButton.addEventListener("click", () => {
    let result = playRound("scissors", getComputerChoice());
    updateResultsDiv(result);
    checkResult(result);
    updateScoreDiv(result);
})

function checkResult(result) {
    if (result.includes("Win")) {
        playerScore++;
        if (playerScore === 5) {
            finalResultDiv.textContent = "You won the match!";
            resetMatch();
        }
    } else if (result.includes("Lose")) {
        computerScore++;
        if (computerScore === 5) {
            finalResultDiv.textContent = "The computer won the match!";
            resetMatch();
        }
    }
}

function resetMatch() {
    toggleButtons(false);
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.setAttribute("id", "resetButton");
    resetButton.addEventListener("click", () => {
        toggleButtons(true);
        resultsDiv.textContent = "";
        scoreDiv.textContent = "";
        computerScore = 0;
        playerScore = 0;
        resetButton.remove();
    })
    document.body.insertBefore(resetButton, resultsDiv);
}

function toggleButtons(setting) {
    if (setting) {
        rButton.disabled = false;
        pButton.disabled = false;
        sButton.disabled = false;
    } else if (!setting) {
        rButton.disabled = true;
        pButton.disabled = true;
        sButton.disabled = true;
    }
}

function updateResultsDiv(result) {
    resultsDiv.textContent = (result);
}

function updateScoreDiv(result) {
    scoreDiv.textContent = `You: ${playerScore}
    Computer: ${computerScore}`
}

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
        return `Draw! You both chose ${playerSelection}`
    }
}

/*function playGame() {
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
*/