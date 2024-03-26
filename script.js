const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const guessesRemaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


const p = document.createElement('p')




let  prevGuess = []
let numGuess = 1

let playGame = true 

if(playGame){
    submit.addEventListener('click', function (e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}


// this function is used to see weather the guess given by user is valid/ not
// i.e it lies between our condition/not
function validateGuess(guess){

}

// used to check the value input by user with random number
// i.e value > randomNum , value = randomNum , value < randomNum
function checkGuess(guess){

}

// will clean the previous values
// will update the previous guesses and remaining guesses
function displayGuess(guess){

}

// will display the message of lowOrHigh variable
function displayMessage(message){

}


// used to end game
function endGame(){

}

// used to start new game
function newGame(){

}

