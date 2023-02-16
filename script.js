'use strict';
// define elements on top of the file instead of having to select the same elements again.
// selecting elements
//player 0
const player0El = document.querySelector('.player--0');
const score0El = document.getElementById('score--0');//held score
const current0El = document.getElementById('current--0');//current score
//player 1
const player1El = document.querySelector('.player--1');
const score1El = document.getElementById('score--1');//held score
const current1El = document.getElementById('current--1');//current score


const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing

// old Starting conditions
/* 
let playing = true;
const scores = [0, 0];
score1El.textContent = 0;
score0El.textContent = 0;
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true; */
// reset btn
const startGame = () => {
  playing = true;
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  if (player1El.classList.contains('player--active')) {
    player1El.classList.remove('player--active');
  };
  player0El.classList.add('player--active');
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
};
startGame();


const switchPlayer = () => {
  // Switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // toggle method will add class if is not there and if it is there, toggle will remove the class.
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  // old version of switch active player class/////////////////////////
  // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  // document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // add dice to current score 
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
      // old version of score 
      // current0El.textContent = currentScore
    } else {
      switchPlayer();
    }
  }
});


btnNew.addEventListener('click', startGame);

btnHold.addEventListener('click', function () {
  // ex:scores[1] = scores[1] + curreentScore
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // finish the game 
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      switchPlayer();
    }
  }
});


// old code for btnRoll.addEventListener
/* let randomNumber = Math.trunc(Math.random() * 6) + 1;
if (randomNumber === 1) {
  diceEl.src = 'dice-1.png';
  diceEl.classList.remove('hidden');
  console.log('sorizzo Ronaldo');
} else if (randomNumber === 2) {
  diceEl.src = 'dice-2.png';
  diceEl.classList.remove('hidden');
  current0El.textContent = Number(current0ElSum) + randomNumber;
} else if (randomNumber === 3) {
  diceEl.src = 'dice-3.png';
  diceEl.classList.remove('hidden');
  current0El.textContent = Number(current0ElSum) + randomNumber;
} else if (randomNumber === 4) {
  diceEl.src = 'dice-4.png';
  diceEl.classList.remove('hidden');
  current0El.textContent = Number(current0ElSum) + randomNumber;
} else if (randomNumber === 5) {
  diceEl.src = 'dice-5.png';
  diceEl.classList.remove('hidden');
  current0El.textContent = Number(current0ElSum) + randomNumber;
} else if (randomNumber === 6) {
  diceEl.src = 'dice-6.png';
  diceEl.classList.remove('hidden');
  current0El.textContent = Number(current0ElSum) + randomNumber;
} */