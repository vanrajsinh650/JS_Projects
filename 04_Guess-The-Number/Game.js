let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessslot = document.querySelector('.Guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.loworhi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    } else if(guess < 1){
        alert('Please enter a more than 1');
    } else if(guess > 100){
        alert('Plaese enter a less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            cleanupGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    } else if (guess < randomNumber){
        displayMessage(`Number is Too low`);
    } else if (guess > randomNumber){
        displayMessage(`Number is Too high`);
    }
}

function cleanupGuess(guess){
    userInput.value = '';
    guessslot.innerHTML += `${guess},`;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="Newgame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    startGame();
}

function startGame(){
    const newGameButton = document.querySelector('#Newgame');
    newGameButton.addEventListener('click', function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessslot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    loworhi.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
    });
}