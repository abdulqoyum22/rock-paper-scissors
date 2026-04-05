console.log("Hello World")

function getComputerChoice(random) {
    let result = Math.floor(Math.random() * 30) + 1;
    if (result < 10) {
        return "Rock";
    }
    else if (result > 10 && result < 20) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}
// console.log(getComputerChoice())


function getHumanChoice(choice) {
    choice = prompt("Please enter Rock, Scissors, or Paper:");
    choice = choice.toLowerCase();

    if (choice === "rock") {
        return choice;
    }

    else if (choice === "scissors") {
        return choice; 
    } 

    else if (choice === "paper") {
        return choice;
    }
}
// console.log(getHumanChoice())

// let humanScore = 0
// let computerScore = 0

// function playRound(humanChoice, computerChoice) {
//     computerChoice = computerChoice.toLowerCase();

//     if (humanChoice === computerChoice) {
//         console.log("It's a tie!");
//     }
//     else if (humanChoice === "rock" && computerChoice === "paper") {
//         console.log("You lose! Paper beats Rock")
//         computerScore++;
//     } 
//     else if (humanChoice === "paper" && computerChoice === "rock") {
//         console.log("You win! Paper beats Rock");
//         humanScore++;
//     }
//     else if (humanChoice === "paper" && computerChoice === "scissors") {
//         console.log("You lose! Scissors beats Paper");
//         computerScore++;
//     }
//     else if (humanChoice === "scissors" && computerChoice === "paper") {
//         console.log("You win! Scissors beats Paper");
//         humanScore++;
//     }
//     else if (humanChoice === "scissors" && computerChoice === "rock") {
//         console.log("You lose! Rock beats Scissors");
//         computerScore++;
//     }
//     else if (humanChoice === "rock" && computerChoice === "scissors") {
//         console.log("You win! Rock beats Scissors");
//         humanScore++;
//     }
// }

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame() {
    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice) {
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
}

console.log("Final Score:");
console.log("You:", humanScore);
console.log("Computer:", computerScore)

}

playGame()