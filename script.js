// Get the computer's choice
function getComputerChoice() {
    // Random integer in the range (0, 2)
    const choiceNum = Math.floor(Math.random() * 3);

    if (choiceNum === 0) {
        return 'rock';
    } else if (choiceNum === 1) {
        return 'paper';
    } else {
        return 'scissor';
    }
}
