
// start button loads quiz
//when you click start button it triggers a function that reveals the div with the 
//questions.
//going to populate the span with a question.
//create array of objects with questions, answers and the correct answers.
// taking question from the array and populating the span, by using your ids

//populate buttons with answers.
//targeting the array and assigning each indvidual object to a button.
//change the inner HTML of the element
//each button has another event listener, to move you to the next question
//answering each question moves you to the next question until the end.
//when you get to the end, make buttons invisible again. and displays this is the end.




var question = document.querySelector("#question");
var choice = document.querySelector(".choice-text");
var scoreText = document.querySelector("#score")
var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var checkedAnswer = document.querySelector('input[name="questions"]:checked').value;
var startbtn = document.querySelector(".btn1");

var count = 60;

var questions = [
  {
    question: "Who Invented JavaScript?",
    choices: [
      "Douglas Crockford",
      "Beyonce",
      "Brendan Eich",
      "Obama"
    ],
    answer: "c"
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "Happy Times Maybe Later",
      "Cascading Style Sheets",
      "Nodes"
    ],
    answer: "a"
  },

  {
    question: "Which on of these is not a language?",

    choices: [
      "Javascript",
      "HTML",
      "css",
      "browser"
    ],
     answer: "d"

  },
];
// for (var i = 0; i < questions.length; i++) {
//   choice +
// }

var indexQuestions = questions.length - 1;

var timer = document.querySelector("timeGauge")

var timeLeft = 60;
var timeElapsed;



// timer Functions
function startTimer() {
  timer = setInterval(tick, 1000);
}

function questionDisplay() {

}

// //every second do this
function tick() {
  timeElapsed++;

  if (timeElapsed + -1 > timeLeft) {
    endGame();
  }
  updateTimer();
}
function updateTimer() {
  var currentTime = timeLeft - timeElapsed
  timeElapsed.textContent = currentTime;
}

//choice.addEventListener("click", );

function startCount() {
  timer = setInterval(function () {
    timeGauge.innerHTML = "Time: " + count--;
    if (count === -1) clearInterval(timer);
  }, 1000);

}

function setChoices(questionNum) {
  questions[questionNum].choices.forEach(function (choice, i) {
    var selectorNum = i + 1;
    document.querySelector('[data-number=' + '"' + selectorNum + '"]').innerHTML = choice
  });
 
}

var submit = document.getElementById("submit")






document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  startCount(60);
  setChoices(questionCounter);
  document.getElementById("question").innerHTML = questions[0].question;

  submit.addEventListener('click', function() {
   
   
  

    var checkedAnswer = document.querySelector('input[name="questions"]:checked').value;
    var questionSelector = document.querySelector("#question");
  
    if(checkedAnswer === questions[questionCounter].answer) {
      score++
      document.getElementById("score").innerHTML = score

     } else {

       count = count - 10;
     }

     if(questionCounter === 2) {
      localStorage.setItem("highscore", JSON.stringify(score))
     window.location.href = "/highscores.html";
     
    }


    questionCounter++;
  console.log(questionCounter)
    setChoices(questionCounter);
    questionSelector.innerHTML = questions[questionCounter].question;
    
      document.querySelector(".scores").innerText = localStorage.getItem("highscore");
 
  
  });
    
  });
