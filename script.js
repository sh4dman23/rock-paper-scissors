// Maximum number of rounds in a game
const MAXROUNDS = 5;

// Get the player's choice
function getPlayerChoice(roundNumber) {
    let playerChoice;

    // Continue looping while user doesnt give a valid answer
    while (true) {
        playerChoice = prompt(`Round #${roundNumber}: Choose your weapon. Rock/Paper/Scissors`);

        if (playerChoice == null) {
            // Error 1: Game was aborted.
            return 1;
        }

        playerChoice = playerChoice.trim().toLowerCase();
        if (['rock', 'paper', 'scissor', 'scissors'].includes(playerChoice)) {
            break;
        }
    }

    // Also accept scissor as an answer but convert it to scissors
    return playerChoice !== 'scissor' ? playerChoice : 'scissors';
}

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

// Get the winner of a single round of rock-paper-scissors
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === 'rock') {
        if (computerChoice === 'rock') {
            return 'tie';
        } else if (computerChoice === 'paper') {
            return 'win';
        } else {
            return 'loss';
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            return 'win';
        } else if (computerChoice === 'paper') {
            return 'tie';
        } else {
            return 'loss';
        }
    } else {
        if (computerChoice === 'rock') {
            return 'loss';
        } else if (computerChoice === 'paper') {
            return 'win';
        } else {
            return 'tie';
        }
    }
}

// Play multiple rounds of the game
function game() {
    // Set rounds played to 0
    let roundsPlayed = 0;

    // Initialize counts to 0
    let winCount = 0, lossCount = 0, tieCount = 0;

    // Initialize logs to an empty list
    let logs = [];

    console.log('Welcome to Rock, Paper, Scissors- uh, I meant, Rock, Paper, Scissors!');
    console.log('The game has begun. Get the best of 5 rounds to win!');

    // Play Maxround number of rounds
    while(roundsPlayed < MAXROUNDS) {
        // Get and store player's choice
        let playerChoice = getPlayerChoice(roundsPlayed + 1);

        // Abort if playerChoice is empty
        if (playerChoice === 1) {
            console.warn('Game was aborted! Type \'game()\' in the console to play again!');
            return;
        }

        let computerChoice = getComputerChoice();

        // Get the winner and return result to player
        const result = getWinner(playerChoice, computerChoice);

        // Title-case player's choice
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

        logs[roundsPlayed] = {
            'player': playerChoice,
            'computer': computerChoice,
            'result': result.charAt(0).toUpperCase() + result.slice(1)
        };

        if (result === 'win') {
            winCount++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        } else if (result === 'loss') {
            lossCount++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}!`);
        } else {
            tieCount++;
            console.log(`Tie! ${playerChoice} can\'t beat ${computerChoice}`);
        }

        // Increase rounds played
        roundsPlayed++;
    }

    // Provide overall result
    if (winCount > lossCount) {
        console.log('You won the game!');
    } else {
        // There will be no overall ties as there are odd numbered rounds
        console.log('You lost the game! Play again by typing \'game()\' in the console.');
    }

    // Provide details
    console.log('Details:\n');
    console.log(`Wins: ${winCount} \nLosses: ${lossCount} \nTies: ${tieCount}`);
    for (let i = 0; i < MAXROUNDS; i++) {
        console.log(`    Round #${i + 1}:`);
        console.log(`        Your Choice: ${logs[i]['player']}`);
        console.log(`        Computer's Choice: ${logs[i]['computer']}`);
        console.log(`        Result: ${logs[i]['result']}`);
    }

    return 'Thanks for playing!';
}

