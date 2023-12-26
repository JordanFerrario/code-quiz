const startBtn = document.getElementById('start-btn')
const scoresBtn = document.getElementById('scores-btn')
let question = document.getElementById('question')
let choiceA = document.getElementById('choice-a')
let choiceB = document.getElementById('choice-b')
let choiceC = document.getElementById('choice-c')
let choiceD = document.getElementById('choice-d')
let correctChoice;
let currentQuestion = 1;

function countdownTimer() {
    // Display the #timer-display element 
    let timerDisplay = document.getElementById('timer-display')

    // Start time at 90s
    let timeLeft = 90; 

    let countdown = setInterval(function() {
        timeLeft--;
        timerDisplay.innerHTML = timeLeft;

        // If the countdown is finished, then display "TIME'S UP"
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.innerHTML = "TIME'S UP";
        }
    }, 1000);
}

function startQuiz() {
    loadQuestion1();
    countdownTimer();
}

function checkAnswer(userChoice) {
    if (userChoice === correctChoice) {
        alert('Correct!')
        currentQuestion++;
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
    } else {
        alert('Wrong answer!')
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

startQuiz()


// startBtn.addEventListener('click', () => window.location.assign('quiz.html'));
// scoresBtn.addEventListener('click', () => window.location.assign('scores.html'))