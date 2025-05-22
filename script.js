let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//Return random number between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

const targetNumber = generateTarget();

//Get absolute distance between two numbers
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

//Function to check which guess - human or computer is closest to target
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    
    //Throw alert if human guess is not between 0 and 9
    if (humanGuess < 0 || humanGuess > 9) {
        alert('Your guess must be between 0 and 9.');
        return false;
    }
    //Find difference between targe and guess value and convert to absolute number
    const humanTargetDiff = getAbsoluteDistance(humanGuess, targetNumber);
    const computerTargetDiff = getAbsoluteDistance(computerGuess, targetNumber);
    
    //Return true if humanTargetDiff is less than or equal to computerTargetDiff and false otherwise
    return humanTargetDiff <= computerTargetDiff;
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