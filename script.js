let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Return random number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const targetNumber = generateTarget();

//
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

console.log(compareGuesses(1, 7, targetNumber));