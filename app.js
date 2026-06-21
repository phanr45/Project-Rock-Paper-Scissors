const headerElement = document.querySelector("h3");
const humanScoreElement = document.querySelector("#humanScore")
const computerScoreElement = document.querySelector("#computerScore")


let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let computerChoices = ["Rock", "Paper", "Scissors"]
    let randomize = Math.floor(Math.random() * computerChoices.length)
    return computerChoices[randomize].toLowerCase();
}
const computerSelection = getComputerChoice();

let buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case 'rock':

            playRound("rock", getComputerChoice())
            break;

        case 'paper':

            playRound("paper", getComputerChoice())
            break;

        case 'scissors':

            playRound("scissors", getComputerChoice())
            break;
    }

})


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        headerElement.textContent = "TIE"
    }

    else if (humanChoice === "rock" && computerChoice === "paper") {
        headerElement.textContent = "Computer Wins!"
        computerScoreElement.textContent = computerScore+=1;
        console.log("cpu: " + computerScore, "human: " + humanScore)


    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        headerElement.textContent = "Human Wins!"
        humanScoreElement.textContent = humanScore+=1;
        console.log("cpu: " + computerScore, "human: " + humanScore)
    }


    else if (humanChoice === "paper" && computerChoice === "rock") {
        headerElement.textContent = "Human Wins!"
        humanScoreElement.textContent = humanScore+=1;
        console.log("cpu: " + computerScore, "human: " + humanScore)
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        headerElement.textContent = "Computer Wins!"
        computerScoreElement.textContent = computerScore+=1;
        console.log("cpu: " + computerScore, "human: " + humanScore)

    }

    else if (humanChoice === "scissors" && computerChoice === "rock") {
        headerElement.textContent = "Computer Wins!"
        computerScoreElement.textContent = computerScore+=1;
        console.log("cpu: " + computerScore, "human: " + humanScore)

    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        headerElement.textContent = "Human Wins!"
        humanScoreElement.textContent = humanScore+=1;
        console.log("cpu: " + computerScore, "human: " + humanScore)
    }

}




