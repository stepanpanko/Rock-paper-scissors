const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById('result');

const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

function computerPlay(){
    const choices = ["Камінь", "Папір", "Ножиці"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Нічия!";
    } else if (
        (playerSelection === "Камінь" && computerSelection === "Ножиці") ||
        (playerSelection === "Папір" && computerSelection === "Камінь") ||
        (playerSelection === "Ножиці" && computerSelection === "Папір") 
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "Ви виграли!  😃" + playerSelection + " перемагає " + computerSelection;
    }
    else{
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "Ви програли!  😥" + playerSelection + " перемагає " + computerSelection;
    }
}