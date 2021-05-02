'use strict';

const number = document.querySelector('.equal');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const check = document.querySelector('.check');
const input = document.querySelector('input');
const message = document.querySelector('.message');
const hights = document.querySelector('.highscore');
let x = 1;
number.innerHTML = Math.floor(Math.random(x) * 21);
number.style.visibility = 'hidden';
const checkNumber = function () {
  if (input.value === number.innerHTML) {
    message.innerHTML = 'You won';
    score.innerHTML = parseInt(score.innerHTML) + 10;
    number.innerHTML = Math.floor(Math.random(x) * 21);
    hights.innerHTML = Math.max(parseInt(score.innerHTML));
    document.body.style.background = 'green';
  } else if (parseInt(input.value) < parseInt(number.innerHTML)) {
    message.innerHTML = 'Higher!';
    score.innerHTML = parseInt(score.innerHTML) - 2;
  } else {
    message.innerHTML = 'Lower!';
    score.innerHTML = parseInt(score.innerHTML) - 2;
  }
};
check.addEventListener('click', checkNumber);

const reset = function () {
  number.innerHTML = Math.floor(Math.random(x) * 21);
  message.innerHTML = 'Start guessing...';
  document.body.style.background = '#222';
  input.value = 0;
};

again.addEventListener('click', reset);
