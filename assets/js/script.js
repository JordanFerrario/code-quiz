// Global variables
const question = document.getElementById("question");
const choiceA = document.getElementById("choice-a");
const choiceB = document.getElementById("choice-b");
const choiceC = document.getElementById("choice-c");
const choiceD = document.getElementById("choice-d");
const correctOrWrong = document.getElementById("correct-or-wrong");
const userForm = document.querySelector(".form-container");
const timerDisplay = document.getElementById("timer-display");
let timeLeft = 121;
let correctChoice;
let currentQuestion = 1;
let score = 0;
let countdown;

// Quiz timer function and display
function countdownTimer() {
  // Decrement time every second and display it
  countdown = setInterval(function () {
    timeLeft--;
    timerDisplay.innerHTML = `Time: ${timeLeft}s`;

    // Display "TIME'S UP" when time runs out
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerDisplay.innerHTML = "TIME'S UP";
      endQuiz();
    }
  }, 1000);
}

// Check user's answer and load next question
function checkAnswer(userChoice) {
  if (userChoice === correctChoice) {
    correctOrWrong.innerHTML = "Correct!"; // Display "Correct!" message
    currentQuestion++;
    score += 10; // Add 10 points for a correct answer
    setTimeout(() => {
      correctOrWrong.innerHTML = ""; // Clear "Correct!" message
      switch (currentQuestion) {
        case 2:
          loadQuestion2();
          break;
        case 3:
          loadQuestion3();
          break;
        case 4:
          loadQuestion4();
          break;
        case 5:
          loadQuestion5();
          break;
        case 6:
          loadQuestion6();
          break;
        case 7:
          loadQuestion7();
          break;
        case 8:
          loadQuestion8();
          break;
        case 9:
          loadQuestion9();
          break;
        case 10:
          loadQuestion10();
          break;
        case 11:
          endQuiz();
          break;
        default:
          alert("ahhhh!");
          break;
      }
    }, 1000);
  } else {
    correctOrWrong.innerHTML = "Wrong!"; // Display "Wrong!" message
    timeLeft -= 10; // Deduct 10 seconds for a wrong answer
    setTimeout(() => {
      correctOrWrong.innerHTML = ""; // Clear "Wrong!" message
    }, 1000);
  }
}

// Load questions and answers
function loadQuestion1() {
  correctChoice = "choice-c";
  question.innerHTML =
    '1. What is the correct syntax for referring to an external script called "app.js"?';
  choiceA.innerHTML = 'A. &lt;script href="app.js"&gt;';
  choiceB.innerHTML = 'B. &lt;script name="app.js"&gt;';
  choiceC.innerHTML = 'C. &lt;script src="app.js"&gt;';
  choiceD.innerHTML = 'D. &lt;script file="app.js"&gt;';

  // Add event listeners to each choice
  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion2() {
  correctChoice = "choice-b";
  question.innerHTML = '2. How do you write "Hello World" in an alert box?';
  choiceA.innerHTML = 'A. alertBox("Hello World");';
  choiceB.innerHTML = 'B. alert("Hello World");';
  choiceC.innerHTML = 'C. msg("Hello World");';
  choiceD.innerHTML = 'D. msgBox("Hello World");';

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion3() {
  correctChoice = "choice-c";
  question.innerHTML =
    "3. Which of the following is a valid type of function in JavaScript?";
  choiceA.innerHTML = "A. Named function";
  choiceB.innerHTML = "B. Anonymous function";
  choiceC.innerHTML = "C. Both named and anonymous functions";
  choiceD.innerHTML = "D. None of the above";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion4() {
  correctChoice = "choice-b";
  question.innerHTML = "4. How do you create a function in JavaScript?";
  choiceA.innerHTML = "A. function:myFunction()";
  choiceB.innerHTML = "B. function myFunction()";
  choiceC.innerHTML = "C. function = myFunction()";
  choiceD.innerHTML = "D. create myFunction()";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion5() {
  correctChoice = "choice-b";
  question.innerHTML = "5. How can you add a comment in JavaScript?";
  choiceA.innerHTML = "A. $This is a comment";
  choiceB.innerHTML = "B. // This is a comment";
  choiceC.innerHTML = "C. &lt;!-- This is a comment --&gt;";
  choiceD.innerHTML = "D. ** This is a comment **";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion6() {
  correctChoice = "choice-d";
  question.innerHTML =
    "6. What will the following code return: Boolean(10&gt;9)?";
  choiceA.innerHTML = "A. NaN";
  choiceB.innerHTML = "B. false";
  choiceC.innerHTML = "C. null";
  choiceD.innerHTML = "D. true";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion7() {
  correctChoice = "choice-d";
  question.innerHTML = "7. How do you declare a JavaScript variable?";
  choiceA.innerHTML = "A. variable carName;";
  choiceB.innerHTML = "B. v carName;";
  choiceC.innerHTML = "C. var = carName;";
  choiceD.innerHTML = "D. var carName;";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion8() {
  correctChoice = "choice-a";
  question.innerHTML =
    "8. Which event occurs when the user clicks on an HTML element?";
  choiceA.innerHTML = "A. onclick";
  choiceB.innerHTML = "B. onmouseover";
  choiceC.innerHTML = "C. onchange";
  choiceD.innerHTML = "D. onmouseclick";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion9() {
  correctChoice = "choice-b";
  question.innerHTML =
    "9. Which operator is used to assign a value to a variable?";
  choiceA.innerHTML = "A. *";
  choiceB.innerHTML = "B. =";
  choiceC.innerHTML = "C. -";
  choiceD.innerHTML = "D. x";

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

function loadQuestion10() {
  correctChoice = "choice-c";
  question.innerHTML =
    "10. What is the correct way to write a JavaScript array?";
  choiceA.innerHTML = 'A. var team7 = "naruto", "sasuke", "sakura"';
  choiceB.innerHTML = 'B. var team7 = ("naruto", "sasuke", "sakura")';
  choiceC.innerHTML = 'C. var team7 = ["naruto", "sasuke", "sakura"]';
  choiceD.innerHTML = 'D. var team7 = {"naruto", "sasuke", "sakura"}';

  choiceA.onclick = () => checkAnswer("choice-a");
  choiceB.onclick = () => checkAnswer("choice-b");
  choiceC.onclick = () => checkAnswer("choice-c");
  choiceD.onclick = () => checkAnswer("choice-d");
}

// End quiz and display score
function endQuiz() {
  question.innerHTML = `Your score is ${score}`;

  // Hide choices and display form to enter initials
  const choices = document.querySelectorAll(".choice");
  choices.forEach((choice) => (choice.hidden = true));
  userForm.hidden = false;

  // Stop the timer
  clearInterval(countdown);

  // Save score as an object with initials and score on form submit
  userForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const initials = document.getElementById("initials").value;

    const userScore = {
      initials: initials,
      score: score,
    };

    // Save score to local storage
    saveScore(userScore);

    // Redirect to scores page
    window.location.assign("scores.html");
  });
}

// Function to save score to local storage
function saveScore(userScore) {
  // Get scores from local storage or create an empty array if there are no scores
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  // Add new score to the array
  scores.push(userScore);
  // Save the updated array to local storage
  localStorage.setItem("scores", JSON.stringify(scores));
}

// Function to display scores on scores.html page
function displayScores() {
  const scoresList = document.getElementById("scores-list");
  // Get scores from local storage or create an empty array if there are no scores
  const scores = JSON.parse(localStorage.getItem("scores")) || [];
  // Sort scores in descending order
  scores.sort((a, b) => b.score - a.score);

  // Display scores in a list
  scores.forEach((score) => {
    const scoreItem = document.createElement("li");
    scoreItem.textContent = `${score.initials} - ${score.score}`;
    scoreItem.style.listStyleType = "none";
    scoresList.appendChild(scoreItem);
  });
}

// Event listeners for start, scores, go back, and clear scores buttons that only load when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Check if the startQuiz query parameter is present in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const startQuiz = urlParams.get("startQuiz");

  // Load the first question and start the timer when the startQuiz query parameter is present
  if (startQuiz) {
    loadQuestion1();
    countdownTimer();
  }

  // Event listeners
  const startBtn = document.getElementById("start-btn");
  const scoresBtn = document.getElementById("scores-btn");
  const goBackBtn = document.getElementById("go-back-btn");
  const clearScoresBtn = document.getElementById("clear-scores-btn");

  if (startBtn) {
    startBtn.addEventListener("click", () =>
      window.location.replace("quiz.html?startQuiz=true")
    );
  }

  if (scoresBtn) {
    scoresBtn.addEventListener("click", () =>
      window.location.replace("scores.html")
    );
  }

  if (goBackBtn) {
    goBackBtn.addEventListener("click", () =>
      window.location.replace("index.html")
    );
  }

  if (clearScoresBtn) {
    clearScoresBtn.addEventListener("click", () => {
      localStorage.removeItem("scores");
      window.location.reload(); // Reload the page to clear the scores
    });
  }

  // Display scores on scores.html page when the page is loaded
  if (window.location.pathname === "/scores.html") {
    displayScores();
  }
});
