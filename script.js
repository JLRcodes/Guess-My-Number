"use strict";

// IMPLEMENTING THE GAME LOGIC
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Getting a random number between 1 & 20, then removes the decimal

let score = 20; // Called a state variable, Apart of the so-called application state - All the data relevant to the application

let highScore = 0;

// HANDLING CLICK EVENTS
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // This Works - 0 is falsy, so guess is false. Use ! to turn it into true... Condition only executes if true
    document.querySelector(`.message`).textContent = `⛔ No Number!`;

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector(`.message`).textContent = `🎉 Correct Number!`;
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`body`).style.backgroundColor = "#60b347";
    document.querySelector(`.number`).style.width = `30rem`;

    // Implementing a highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📈 Too high!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥 You lost the game`;
      document.querySelector(`.score`).textContent = 0;
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `📉 Too low!`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = `💥 You lost the game!`;
      document.querySelector(`.score`).textContent = 0;
    }
  }
});

// Using the again button to reset the game
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;

  document.querySelector(`body`).style.backgroundColor = "#222";
  document.querySelector(`.number`).style.width = "15rem";
});
