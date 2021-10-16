// Intro screen
// players 1 and 2 names
let p1 = 'p1';
let p2 = 'p2';
let gameDuration = 'game-duration';
let gameTone = 'game-tone';

// game start button
const startBtn = document.querySelector('#game-start');

// Event listeners
startBtn.addEventListener('click', assignVals);

// Functions
// think about how to abstract this further to take in any number of arguments and assign each with it's relevant radioVals
function assignVals() {
    p1 = getInputVals(p1);
    p2 = getInputVals(p2);
    gameDuration = getRadioVals(gameDuration);
    gameTone = getRadioVals(gameTone);
    console.log({p1, p2, gameDuration, gameTone})
}

function getRadioVals(inputName) {
    return document.querySelector(`input[name="${inputName}"]:checked`).value;
}

function getInputVals(inputName) {
    return document.querySelector(`input[name="${inputName}"]`).value;
}
