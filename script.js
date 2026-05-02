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
    // choice = prompt("Please enter Rock, Scissors, or Paper:");
    // choice = choice.toLowerCase();

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

const main = document.querySelector(".text");
const resultDisplay = document.createElement("p");
main.appendChild(resultDisplay);


const finalResult = document.querySelector(".output");

const scoreDisplay = document.createElement("div");
const winner = document.createElement("p");

finalResult.appendChild(scoreDisplay);
finalResult.appendChild(winner);


function playGame() {
    let humanScore = 0
    let computerScore = 0

function playRound(humanChoice, computerChoice) {
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        resultDisplay.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } 
    else if (humanChoice === "paper" && computerChoice === "rock") {
        resultDisplay.textContent = "You win! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        resultDisplay.textContent = "You lose! Scissors beats Paper";      
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultDisplay.textContent = "You win! Scissors beats Paper";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        resultDisplay.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultDisplay.textContent = "You win! Rock beats Scissors";
        humanScore++;
    }


scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;


if (humanScore === 5) {
    winner.textContent = "You win!";
}

else if (computerScore === 5) {
    winner.textContent = "Computer wins!";
}
}


const rockBtn = document.querySelector(".one");
rockBtn.addEventListener('click', function() {
    if (humanScore === 5 || computerScore === 5) return;
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});


const paperBtn = document.querySelector(".two");
paperBtn.addEventListener('click', function() {
    if (humanScore === 5 || computerScore === 5) return;
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});


const scissorsBtn = document.querySelector(".three");
scissorsBtn.addEventListener('click', function() {
    if (humanScore === 5 || computerScore === 5) return;
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});
}

playGame()