// Get the computer's choice
function getComputerChoice() {
    // Random integer in the range (0, 2)
    let choiceNum = Math.floor(Math.random() * 3);

    if (choiceNum === 0) {
        return 'rock';
    } else if (choiceNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// Play a single round of rock-paper-scissors
function playRound(playerChoice, computerChoice) {
    // Convert to lowercase
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'Tie! Rock can\'t beat rock!';
        } else if (computerChoice === 'paper') {
            return 'You lose! Paper beats rock!';
        } else {
            return 'You win! Rock beats scissors!';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'You win! Paper beats rock!';
        } else if (computerChoice === 'paper') {
            return 'Tie! Paper can\'t beat paper!';
        } else {
            return 'You lose! Scissors beats paper!';
        }
    } else {
        if (computerChoice === 'rock') {
            return 'You lose! Rock beats scissors!';
        } else if (computerChoice === 'paper') {
            return 'You win! Scissors beats paper!';
        } else {
            return 'Tie! Scissors can\'t beat scissors!';
        }
    }
}