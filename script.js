function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    var humanChoice = prompt('Please choose rock, paper, or scissors.');
    return humanChoice;
}

console.log(getComputerChoice());
console.log(getHumanChoice());