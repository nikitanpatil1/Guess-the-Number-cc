let randomNumber = parseInt(Math.random() * 100 + 1);

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
    if(isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

// used to check the value input by user with random number
// i.e value > randomNum , value = randomNum , value < randomNum
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
    }else if (guess < randomNumber){
        displayMessage('Number is TOOO low')
    }else if (guess > randomNumber){
        displayMessage('Number is TOOO High')
    }
}

// will clean the previous values
// will update the previous guesses and remaining guesses
// cleanup guess
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++ ;
    guessesRemaining.innerHTML = `${11 - numGuess}`
}

// will display the message of lowOrHigh variable
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}


// used to end game
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

// used to start new game
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        guessesRemaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        
        playGame = true
    })

}

