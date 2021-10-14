// Intro screen
let gameDuration = '';
let gameTone = '';
const startBtn = document.querySelector('#game-start');

// Event listeners
startBtn.addEventListener('click', assignRadioVals);

// Functions
// think about how to abstract this further to take in any number of arguments and assign each with it's relevant radioVals
function assignRadioVals() {
    gameDuration = getRadioVals('game-duration');
    gameTone = getRadioVals('game-tone');
    console.log({gameDuration, gameTone})
}

// create a function to convert variable name into string 

// pass that string into getRadioVals and assign the result to the variable
// pass the variables in an array to the assignRadioVals function

function assignRadioVals(variables) {
    // loop and assign each variable the result of calling getRadioVals on it's name
}

function getRadioVals(inputName) {
    return document.querySelector(`input[name="${inputName}"]:checked`).value;
}