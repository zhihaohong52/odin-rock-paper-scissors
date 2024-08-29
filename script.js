function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function getHumanChoice() {
    var humanChoice = prompt('Please choose rock, paper, or scissors.');
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('It\'s a tie!');
    }
    else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') || (humanChoice === 'Paper' && computerChoice === 'Rock') || (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
        humanScore++;
    }
    else {
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
        computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log("Current score: You: " + humanScore + " Computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log('You win the game!');
    }
    else if (humanScore < computerScore) {
        console.log('You lose the game!');
    }
    else {
        console.log('It\'s a tie game!');
    }
}

playGame();
