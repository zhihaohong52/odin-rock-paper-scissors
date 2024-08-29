var humanScore = 0;
var computerScore = 0;

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
    // Check for a tie
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

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

console.log('Human Score: ' + humanScore);
console.log('Computer Score: ' + computerScore);