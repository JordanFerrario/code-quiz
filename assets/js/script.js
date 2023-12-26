
let question = document.getElementById('question')
let choiceA = document.getElementById('choice-a')
let choiceB = document.getElementById('choice-b')
let choiceC = document.getElementById('choice-c')
let choiceD = document.getElementById('choice-d')
let timerDisplay = document.getElementById('timer-display')
let correctOrWrong = document.getElementById('correct-or-wrong')
let timeLeft = 120; 
let correctChoice;
let currentQuestion = 1;

function startQuiz(event) {
    event.preventDefault();
    location.assign('quiz.html');

    loadQuestion1();
    countdownTimer();
}

function countdownTimer() {
    let countdown = setInterval(function() {
        timeLeft--;
        timerDisplay.innerHTML = `Time: ${timeLeft}s`;

        // If the countdown is finished, then display "TIME'S UP"
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = "TIME'S UP";
        }
    }, 1000);
}

function checkAnswer(userChoice) {
    if (userChoice === correctChoice) {
        correctOrWrong.innerHTML = 'Correct!'
        currentQuestion++;
        setTimeout(() => {
            correctOrWrong.innerHTML = '';
        switch(currentQuestion) {
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
            default:
                alert('ahhhh!');
                break;
        }
    }, 1000);
    } else {
        correctOrWrong.innerHTML = 'Wrong!'
        timeLeft-=5;
        setTimeout(() => {
            correctOrWrong.innerHTML = '';
        }, 1000);
    }
}

function loadQuestion1() {
    correctChoice = 'choice-c';
    question.innerHTML = '1. What is the correct syntax for referring to an external script called "app.js"?'
    choiceA.innerHTML = 'A. &lt;script href="app.js"&gt;'
    choiceB.innerHTML = 'B. &lt;script name="app.js"&gt;'
    choiceC.innerHTML = 'C. &lt;script src="app.js"&gt;'
    choiceD.innerHTML = 'D. &lt;script file="app.js"&gt;'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion2() {
    correctChoice = 'choice-b';
    question.innerHTML = '2. How do you write "Hello World" in an alert box?'
    choiceA.innerHTML = 'A. alertBox("Hello World");'
    choiceB.innerHTML = 'B. alert("Hello World");'
    choiceC.innerHTML = 'C. msg("Hello World");'
    choiceD.innerHTML = 'D. msgBox("Hello World");'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion3() {
    correctChoice = 'choice-c';
    question.innerHTML = '3. Which of the following is a valid type of function in JavaScript?'
    choiceA.innerHTML = 'A. Named function'
    choiceB.innerHTML = 'B. Anonymous function'
    choiceC.innerHTML = 'C. Both named and anonymous functions'
    choiceD.innerHTML = 'D. None of the above'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion4() {
    correctChoice = 'choice-b';
    question.innerHTML = '4. How do you create a function in JavaScript?'
    choiceA.innerHTML = 'A. function:myFunction()'
    choiceB.innerHTML = 'B. function myFunction()'
    choiceC.innerHTML = 'C. function = myFunction()'
    choiceD.innerHTML = 'D. create myFunction()'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion5() {
    correctChoice = 'choice-b';
    question.innerHTML = '5. How can you add a comment in JavaScript?'
    choiceA.innerHTML = 'A. $This is a comment'
    choiceB.innerHTML = 'B. // This is a comment'
    choiceC.innerHTML = 'C. &lt;!-- This is a comment --&gt;'
    choiceD.innerHTML = 'D. ** This is a comment **'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion6() {
    correctChoice = 'choice-d';
    question.innerHTML = '6. What will the following code return: Boolean(10&gt;9)?'
    choiceA.innerHTML = 'A. NaN'
    choiceB.innerHTML = 'B. false'
    choiceC.innerHTML = 'C. null'
    choiceD.innerHTML = 'D. true'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion7() {
    correctChoice = 'choice-d';
    question.innerHTML = '7. How do you declare a JavaScript variable?'
    choiceA.innerHTML = 'A. variable carName;'
    choiceB.innerHTML = 'B. v carName;'
    choiceC.innerHTML = 'C. var = carName;'
    choiceD.innerHTML = 'D. var carName;'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion8() {
    correctChoice = 'choice-a';
    question.innerHTML = '8. Which event occurs when the user clicks on an HTML element?'
    choiceA.innerHTML = 'A. onclick'
    choiceB.innerHTML = 'B. onmouseover'
    choiceC.innerHTML = 'C. onchange'
    choiceD.innerHTML = 'D. onmouseclick'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion9() {
    correctChoice = 'choice-b';
    question.innerHTML = '9. Which operator is used to assign a value to a variable?'
    choiceA.innerHTML = 'A. *'
    choiceB.innerHTML = 'B. ='
    choiceC.innerHTML = 'C. -'
    choiceD.innerHTML = 'D. x'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

function loadQuestion10() {
    correctChoice = 'choice-c';
    question.innerHTML = '10. What is the correct way to write a JavaScript array?'
    choiceA.innerHTML = 'A. var team7 = "naruto", "sasuke", "sakura"'
    choiceB.innerHTML = 'B. var team7 = ("naruto", "sasuke", "sakura")'
    choiceC.innerHTML = 'C. var team7 = ["naruto", "sasuke", "sakura"]'
    choiceD.innerHTML = 'D. var team7 = {"naruto", "sasuke", "sakura"}'

    choiceA.onclick = () => checkAnswer('choice-a');
    choiceB.onclick = () => checkAnswer('choice-b');
    choiceC.onclick = () => checkAnswer('choice-c');
    choiceD.onclick = () => checkAnswer('choice-d');
}

document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn')
    const scoresBtn = document.getElementById('scores-btn')

    startBtn.addEventListener('click', startQuiz);
    scoresBtn.addEventListener('click', () => window.location.assign('scores.html'));
});