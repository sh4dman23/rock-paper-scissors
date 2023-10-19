const newGameButton = document.querySelector('#newGame');
const restartGameButton = document.querySelector('#restartGame');

// Keep buttons disabled until the game starts
restartGameButton.disabled = true;
const buttonContainer = document.querySelector('#choiceSelection');
const buttons = document.querySelectorAll('.choice');
toggleButtons();

const statusBox = document.querySelector('#status');
const resultBox = document.querySelector('#moveResult');

const playerScoreElement = document.querySelector('#playerScore');
const computerScoreElement = document.querySelector('#computerScore');

let playerScore = 0, computerScore = 0, roundsPlayed = 0, gameStarted = false;

newGameButton.addEventListener('click', () => {
    newGameButton.disabled = true;
    restartGameButton.disabled = false;
    startGame();
    toggleButtons();
});

restartGameButton.addEventListener('click', () => {
    startGame();
});


// Play multiple rounds of the game
buttonContainer.addEventListener('click', (e) => {
    if (!gameStarted) {
        return;
    }

    const target = e.target;
    const playerChoice = target.name;
    const computerChoice = getComputerChoice();
    const roundResult = getWinner(playerChoice, computerChoice);

    updateImage('player', playerChoice);
    updateImage('computer', computerChoice);

    if (roundResult === 'win') {
        statusBox.textContent = 'You won the round!';
        resultBox.textContent = `${playerChoice} beats ${computerChoice}!`;
        playerScoreElement.textContent = ++playerScore;
    } else if (roundResult === 'loss') {
        statusBox.textContent = 'You lost the round!';
        resultBox.textContent = `${playerChoice} was beaten by ${computerChoice}!`;
        computerScoreElement.textContent = ++computerScore;
    } else {
        statusBox.textContent = 'You tied!';
        resultBox.textContent = `${playerChoice} can\'t beat ${computerChoice}!`;
    }

    roundsPlayed++;

    // Check for winner
    if (playerScore === 5 || computerScore === 5) {
        newGameButton.disabled = false;
        restartGameButton.disabled = true;
        toggleButtons();

        let result;
        if (playerScore === 5) {
            statusBox.textContent = 'You won the game!';
            result = 'won';
        } else {
            statusBox.textContent = 'You lost the game';
            result = 'lost';
        }

        resultBox.textContent = `You ${result} by ${Math.abs(computerScore - playerScore)} points!`;
    }
});

function startGame() {
    playerScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    gameStarted = true;
}

function toggleButtons() {
    buttons.forEach(element => {
        element.disabled = element.disabled ? false : true;
    });
}

// Get the computer's choice
function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);

    if (choiceNum === 0) {
        return 'Rock';
    } else if (choiceNum === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// Get the winner of a single round of rock-paper-scissors
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === 'Rock') {
        return (computerChoice === 'Rock') ? 'tie'
            : (computerChoice === 'Paper') ? 'loss'
            : 'win';
    } else if (playerChoice === 'Paper') {
        return (computerChoice === 'Rock') ? 'win'
            : (computerChoice === 'Paper') ? 'tie'
            : 'loss';
    } else {
        return (computerChoice === 'Rock') ? 'loss'
            : (computerChoice === 'Paper') ? 'win'
            : 'tie';
    }
}

function updateImage(sideToUpdate, choice) {
    const img = (sideToUpdate === 'player') ? document.querySelector('.last-moves .move-box:nth-child(1)').querySelector('img')
                : document.querySelector('.last-moves .move-box:nth-child(2)').querySelector('img');
    img.alt = choice;

    switch(choice) {
        case 'Rock':
            img.src = './images/rock.png';
            break;
        case 'Paper':
            img.src = './images/paper.png';
            break;
        case 'Scissors':
            img.src = './images/scissors.png';
            break;
    }
}
