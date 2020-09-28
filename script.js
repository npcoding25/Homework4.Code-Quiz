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

var doneQuiz = false
var score = 0
var timeLeft = 60
var timeInterval = setInterval(startCountdown, 1000)

function startCountdown() {
    timer.textContent = timeLeft
    timeLeft--

    if (timeLeft <= 0) {
        clearInterval(timeInterval)
        questions[0, 1, 2, 3, 4].classList.add("hide")
        console.log(questions)
        results.classList.remove("hide")
        timer.classList.add("hide")
    }

    if (doneQuiz) {
        clearInterval(timeInterval)
        timer.classList.add("hide")
    }
}

startButton.addEventListener("click", startQuiz)


function startQuiz() {
    score = 0
    startCountdown()
    startScreen.classList.add("hide")
    question1.classList.remove("hide")
}

question1.addEventListener("click", checkAnswer1)

function checkAnswer1(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion2()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion2()
    }
}

function askQuestion2() {
    question1.classList.add("hide")
    question2.classList.remove("hide")
}

question2.addEventListener("click", checkAnswer2)

function checkAnswer2(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion3()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion3()
    }
}

function askQuestion3() {
    question2.classList.add("hide")
    question3.classList.remove("hide")
}

question3.addEventListener("click", checkAnswer3)

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

function askQuestion4() {
    question3.classList.add("hide")
    question4.classList.remove("hide")
    console.log('show question 4')
}

question4.addEventListener("click", checkAnswer4)

function checkAnswer4(event) {
    if ( event.target.classList.contains("correct")) {
        score++
        askQuestion5()
    } else {
        timeLeft = (timeLeft - 5)
        askQuestion5()
    }
}
function askQuestion5() {
    question4.classList.add("hide")
    question5.classList.remove("hide")
}

question5.addEventListener("click", checkAnswer5)
function checkAnswer5(event) {
    if ( event.target.classList.contains("correct")) 
    score++
    console.log("your score is " + score)
    showFinalPage()
}

function showFinalPage () {
    question5.classList.add("hide")
    results.classList.remove("hide")
    doneQuiz = true
}

document.querySelector(".submit").addEventListener("click", submitScore)

function submitScore() {
    var userName = document.querySelector(".form-control").value

    localStorage.setItem("username", userName)
    localStorage.setItem("score", score)

    var inputEmail = localStorage.getItem("username")
    var inputScore = localStorage.getItem("score")
    document.querySelector(".input-username").textContent = inputEmail
    document.querySelector(".input-score").textContent = inputScore
}