let images = ["images/rock.png", "images/paper.png", "images/scissors.png"];
const image = document.createElement("img");
// const rock_div = document.getElementById("rock");
// const paper_div = document.getElementById("paper");
// const scissors_div = document.getElementById("scissors");
const buttons = document.querySelectorAll('.choice');

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choice[randomNumber];
}

for (let button of buttons) {
    button.addEventListener("click", clickHandler)
}

function clickHandler(event) {
    let computerChoice = getComputerChoice();
    let playerChoice = event.target.id;
    findWinner(computerChoice,playerChoice);
}

function findWinner(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        alert("Tie")
    } 
    else if (computerChoice === "rock" && playerChoice === "scissors" || computerChoice === "paper" && playerChoice === "rock" || computerChoice === "scissors" && playerChoice === "paper") {
        alert("Computer Wins")
    }
    else alert("Player Wins")
}