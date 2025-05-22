let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Return random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const targetNumber = generateTarget();

//Function to check which guess - human or computer is closest to target
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    //Find difference between targe and guess value and convert to absolute number
    const humanTargetDiff = Math.abs(humanGuess - targetNumber);
    const computerTargetDiff = Math.abs(computerGuess - targetNumber);
    
    //Return true if humanTargetDiff is less than or equal to computerTargetDiff and false otherwise
    if (humanTargetDiff <= computerTargetDiff) {
        return true;
    } else {
        return false;
    }
}

//Update correct score by 1 based on winner
const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

//Advance Round by 1
const advanceRound = () => currentRoundNumber++;