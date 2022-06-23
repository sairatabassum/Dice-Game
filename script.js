'use strict';
// Selecting element
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// Rolling dice functionality

btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll

  const diceNumber = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice

  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;

  // 3. Check for rolled 1: if true then switch to new player
  if (diceNumber === 1) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    currentScore = 0;
    player0.classList.toggle('player--active'); //because on player 0 it will remove the class if it's there and if it's not it will add it.
    player1.classList.toggle('player--active');
  } else {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});
