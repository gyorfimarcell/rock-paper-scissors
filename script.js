const scoreElement = document.getElementById("score");
const resultText = document.getElementById("result");

const playerChoiceElement = document.getElementById("player-choice");
const opponentChoiceElement = document.getElementById("opponent-choice");

const pickScreen = document.getElementById("pick-screen");
const resultScreen = document.getElementById("result-screen");

let score = 0;

function PlayAgain() {
    resultScreen.style.display = "none";

    playerChoiceElement.classList.remove("rock", "paper", "scissor", "win");
    opponentChoiceElement.classList.remove("rock", "paper", "scissor", "win");

    pickScreen.style.display = "initial";
}

function Choose(choice) {
    let opponentChoice = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];

    if (choice == opponentChoice) {
        resultText.innerText = "YOU TIED";
    }
    else if ((choice == "rock" && opponentChoice == "scissor") || (choice == "paper" && opponentChoice == "rock") || (choice == "scissor" && opponentChoice == "paper")) {
        resultText.innerText = "YOU WIN";
        scoreElement.innerText = ++score;
        playerChoiceElement.classList.add("win");
    }
    else {
        resultText.innerText = "YOU LOSE";
        opponentChoiceElement.classList.add("win");
    }

    playerChoiceElement.classList.add(choice);
    opponentChoiceElement.classList.add(opponentChoice);

    pickScreen.style.display = "none";
    resultScreen.style.display = "initial";
}