// screens
const introScreen = document.querySelector('#intro');
const gameScreen = document.querySelector('#game');
const insightScreen = document.querySelector('#insight');
hide(gameScreen);
hide(insightScreen);
// game start button on intro screen
const startBtn = document.querySelector('#game-start');
// player name display on game screen
const pNameDisplay = document.querySelector('.player-name');
// players 1 and 2 names
let p1 = 'p1';
let p2 = 'p2';
// variables assigned to 'name' attribute of input
let gameDuration = 'game-duration';
let gameTone = 'game-tone';

// cards arrays
const casual =
 ['What kind of joint sporting activity would you like to make a habit?',
  'What healthy habit do you want to introduce into your life in the near future?',
  'What recent achievement of your partner are you most proud of?',
  'How can you make your partner\'s day a little more beautiful tomorrow?',
  'Which holiday or short trip is currently at the top of your wishlist?',
  'What would make a household task easier or more pleasant for you?',
  'For who or what could you do something nice together?', 
  'In which outfit would you love to see your partner (again) and which should (finally) be tossed in the trash?', 
  'What makes your relationship unique, and how has this been expressed lately?',
  'What was a memorable shared activity recently?', 
  'When, in recent weeks/months, did you have the most fun with your partner?', 
  'What would you like to do together more often?'];

const mindful = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
const deep =  [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

// event listener on add button
startBtn.addEventListener('click', () => {
    assignVals();
    hide(introScreen);
    display(gameScreen);
    displayPlayerName();
    // initiate target length of card deck 
    let targetLength = 0;
    // assign number of cards to deal based on selected game duration 
    if (gameDuration === '15') {
        targetLength = 4;
    }

    if (gameDuration === '30') {
        targetLength = 8
    }

    if (gameDuration === '50') {
        targetLength = 12
    }

    // create new Set to hold unique cards
    const deck = new Set();
    
    // add elements to Set while set size is less than target deck length
    while (deck.size < targetLength) {
        // assign index to random number from 1-11 to select cards 'randomly'
        let i = Math.floor(Math.random() * 12);
         
        if (gameTone === 'casual') {
            deck.add(casual[i]);
        }
        if (gameTone === 'mindful') {
            deck.add(mindful[i]);
        }
        if (gameTone === 'deep') {
            deck.add(deep[i]);
        }
    }

    // initialise a set iterator to access cards
    const deckIterator = deck.values();
    // grab card text element
    const cardText = document.querySelector('#card-text');
    // deal first card 
    cardText.textContent = deckIterator.next().value
    
    // grab next button in game screen
    const nextBtn = document.querySelector('.next-btn');
    // variable to count the number of cards that have been dealt
    let dealtCardsCount = 1;

    // event listener on next button
    nextBtn.addEventListener('click', () => {
        // display insight screen at end of game
        if (nextBtn.textContent === 'End game') {
            hide(gameScreen);
            display(insightScreen);
        }
        // alternate player names on each card dealing
        displayPlayerName();
        // deal cards until end of deck
        if (dealtCardsCount < deck.size){
            cardText.textContent = deckIterator.next().value;
            dealtCardsCount++;
        } else {
            nextBtn.textContent = 'End game';
            cardText.textContent = 'Well done! You have completed a round of Vertellis'
        }
    })
    
    // grab game title in insight screen
    const gameTitle = insightScreen.querySelector('#game-title');
    gameTitle.value = `${p1} and ${p2}'s conversation on ${formatDate()}`;
});


// Helper functions
// think about how to abstract this further to take in any number of arguments and assign each with it's relevant radioVals
function assignVals() {
    p1 = getInputVals(p1);
    p2 = getInputVals(p2);
    gameDuration = getRadioVals(gameDuration);
    gameTone = getRadioVals(gameTone);
    console.log({p1, p2, gameDuration, gameTone})
}

function getInputVals(inputName) {
    return document.querySelector(`input[name="${inputName}"]`).value;
}

function getRadioVals(inputName) {
    return document.querySelector(`input[name="${inputName}"]:checked`).value;
}

// alterante player name display 
function displayPlayerName() {
        if (pNameDisplay.textContent === '' || pNameDisplay.textContent === p2) {
            pNameDisplay.textContent = p1;
        } else {
            pNameDisplay.textContent = p2;
        }    
}

function hide(el) {
    el.setAttribute('hidden', true);
}

function display(el) {
    el.removeAttribute('hidden');
}

function formatDate() {
    // get current date
    const date = new Date();
    // format i.e 15/12/2021
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
}