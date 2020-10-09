// Global constant variables
const startButton = document.querySelector(".start-btn")
const startScreen = document.querySelector("#start-screen")
const question1 = document.querySelector("#question1")
const question2 = document.querySelector("#question2")
const question3 = document.querySelector("#question3")
const question4 = document.querySelector("#question4")
const question5 = document.querySelector("#question5")
const questions = [question1, question2, question3, question4, question5]
const results = document.querySelector("#results")
const timer = document.querySelector("#timer")

// Global variables
var doneQuiz = false
var score = 0
var timeLeft = 30

// Function that will start timer
function startCountdown() {
    timer.textContent = timeLeft
    timeLeft--
    
    // If there is no time left the timer disappears and you will see the final page
    if (timeLeft <= 0) {
        clearInterval(setInterval)
        for ( var i=0; i<5; i++) {
            questions[i].classList.add("hide")
        }
        results.classList.remove("hide")
        timer.classList.add("hide")
    }
    
    // If on the final page the timer will disappear
    if (doneQuiz) {
        clearInterval(setInterval)
        timer.classList.add("hide")
    }
}

// Button that starts quiz
startButton.addEventListener("click", startQuiz)

// Function that sets score, activates timer and switches to next question
function startQuiz() {
    var timeInterval = setInterval(startCountdown, 1000)
    score = 0
    startScreen.classList.add("hide")
    question1.classList.remove("hide")
}

// Activating clicking
question1.addEventListener("click", checkAnswer1)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer1(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion2()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion2()
    }
}

// Switch to next question
function askQuestion2() {
    question1.classList.add("hide")
    question2.classList.remove("hide")
}

// Activating clicking
question2.addEventListener("click", checkAnswer2)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer2(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion3()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion3()
    }
}

// Switch to next question
function askQuestion3() {
    question2.classList.add("hide")
    question3.classList.remove("hide")
}

// Activating clicking
question3.addEventListener("click", checkAnswer3)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer3(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion4()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion4()
    }
    console.log(score)
    console.log("ask question 4")
}

// Switch to next question
function askQuestion4() {
    question3.classList.add("hide")
    question4.classList.remove("hide")
}

// Activating clicking
question4.addEventListener("click", checkAnswer4)

// Listening for clicks, adding to score if correct answer chosen and decrease time by 5 if wrong answer chosen
function checkAnswer4(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion5()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion5()
    }
}

// Switch to next question
function askQuestion5() {
    question4.classList.add("hide")
    question5.classList.remove("hide")
}

// Activating clicking
question5.addEventListener("click", checkAnswer5)

// Listening for clicks and adding to score if correct answer chosen
function checkAnswer5(event) {
    if ( event.target.classList.contains("correct")) 
    score++
    console.log("your score is " + score)
    showFinalPage()
}

// Switch to final page / results
function showFinalPage () {
    question5.classList.add("hide")
    results.classList.remove("hide")
    doneQuiz = true
}

// Make submit button clickable
document.querySelector(".submit").addEventListener("click", submitScore)

// When you click submit it will store your score and initials and display them on the screen
function submitScore() {
    var userName = document.querySelector(".form-control").value
    var scoreList = JSON.parse(localStorage.score || "[]")
    var userList = JSON.parse(localStorage.userName || "[]")
    scoreList.push(score)
    userList.push(userName)
    localStorage.score = JSON.stringify( scoreList )
    localStorage.userName = JSON.stringify( userList )
  
    // This chooses where to place the info gathered
    document.querySelector(".input-username").textContent = userName
    document.querySelector(".input-score").textContent = score
}