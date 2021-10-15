// Intro screen
let gameDuration = 'game-duration';
let gameTone = 'game-tone';

const startBtn = document.querySelector('#game-start');

// Event listeners

startBtn.addEventListener('click', assignRadioVals);

// Functions
// think about how to abstract this further to take in any number of arguments and assign each with it's relevant radioVals
function assignRadioVals() {
    gameDuration = getRadioVals(gameDuration);
    gameTone = getRadioVals(gameTone);
    console.log({gameDuration, gameTone})
}

function getRadioVals(inputName) {
    return document.querySelector(`input[name="${inputName}"]:checked`).value;
}