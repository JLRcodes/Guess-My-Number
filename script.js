"use strict";

// IMPLEMENTING THE GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Getting a random number between 1 & 20, then removes the decimal
let score = 20; // Called a state variable, Apart of the so-called application state - All the data relevant to the application
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const backGroundColor = function (color) {
  document.querySelector(`body`).style.backgroundColor = color;
};
const numberWidth = function (width) {
  document.querySelector(`.number`).style.width = width;
};
const scoreText = function (score) {
  document.querySelector(`.score`).textContent = score;
};
const numberText = function (number) {
  document.querySelector(`.number`).textContent = number;
};

// HANDLING CLICK EVENTS
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    // This Works - 0 is falsy, so guess is false. Use ! to turn it into true... Condition only executes if true
    displayMessage(`⛔ No Number!`);

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎉 Correct Number!`);
    numberText(secretNumber);
    backGroundColor(`#60b347`);
    numberWidth(`30rem`);

    // Implementing a highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `📈 Too high!` : `📉 Too low!`);
      score--;
      scoreText(score);
    } else {
      displayMessage(`💥 You lost the game`);
      scoreText(`0`);
    }
  }
});

// Using the again button to reset the game
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  scoreText(score);
  numberText(`?`);
  backGroundColor(`#222`);
  numberWidth(`15rem`);
  document.querySelector(`.guess`).value = ``;
});
