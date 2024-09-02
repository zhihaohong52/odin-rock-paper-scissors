// Game logic

let playerScore = 0;
let computerScore = 0;
let roundWinner = '';

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

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        roundWinner = 'tie';
    }
    else if ((playerChoice === 'Rock' && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        roundWinner = 'player';
        playerScore++;
    }
    else {
        roundWinner = 'computer';
        computerScore++;
    }
    updateScoreBoard(roundWinner, playerChoice, computerChoice);
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5;
}

// UI

const scoreInfo = document.getElementById('scoreInfo');
const scoreMessage = document.getElementById('scoreMessage');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const endGameModal = document.getElementById('endGameModal');
const endGameText = document.getElementById('endGameText');
const overlay = document.getElementById('overlay');
const restartButton = document.getElementById('restartButton');

rockButton.addEventListener('click', () => handleClick('Rock'));
paperButton.addEventListener('click', () => handleClick('Paper'));
scissorsButton.addEventListener('click', () => handleClick('Scissors'));
restartButton.addEventListener('click', restartGame);
overlay.addEventListener('click', hideModal);

function handleClick(playerChoice) {
    if (isGameOver()) {
        openModal();
        return;
    }

    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateChoiceDisplay(playerChoice, computerChoice);
    updateScore();

    if (isGameOver()) {
        openModal();
        setFinalMessage();
    }
}

function updateChoiceDisplay(playerChoice, computerChoice) {
    // Update images
    playerChoiceDisplay.innerHTML = `<img src="images/${playerChoice}.png" alt="${playerChoice}">`;
    computerChoiceDisplay.innerHTML = `<img src="images/${computerChoice}.png" alt="${computerChoice}">`;
}

function updateScore() {
    playerScoreDisplay.textContent = 'Player: ' + playerScore;
    computerScoreDisplay.textContent = 'Computer: ' + computerScore;
}

function updateScoreBoard(roundWinner, playerChoice, computerChoice) {
    if (roundWinner === 'tie') {
        scoreInfo.textContent = 'It\'s a tie!';
    }
    else if (roundWinner === 'player') {
        scoreInfo.textContent = 'You win! ' + playerChoice + ' beats ' + computerChoice;
    }
    else {
        scoreInfo.textContent = 'You lose! ' + computerChoice + ' beats ' + playerChoice;
    }
}

function openModal() {
    endGameModal.classList.add('active')
    overlay.classList.add('active')
}

function hideModal() {
    endGameModal.classList.remove('active')
    overlay.classList.remove('active')
}

function setFinalMessage() {
    return playerScore > computerScore ?
        endGameText.textContent = 'You win the game!' :
        endGameText.textContent = 'You lose the game!';
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    scoreInfo.textContent = 'Choose your weapon!';
    scoreMessage.textContent = 'First to score 5 points wins the game';
    playerScoreDisplay.textContent = 'Player: 0';
    computerScoreDisplay.textContent = 'Computer: 0';
    playerChoiceDisplay.innerHTML = '<img src="images/question-mark.png" alt="Question Mark">';
    computerChoiceDisplay.innerHTML = '<img src="images/question-mark.png" alt="Question Mark">';
    endGameModal.classList.remove('active');
    overlay.classList.remove('active');
}