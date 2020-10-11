
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
  //console.log(timeElapsed)
  // //     //end timer
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
    var selection = document.querySelector('[data-number=' + '"' + selectorNum + '"]').innerHTML = choice
    console.log(choice, selectorNum, selection)
  });
 
}

var submit = document.getElementById("submit")

//console.log(submit)

function submitAnswer() {


}



document.addEventListener("DOMContentLoaded", function (event) {
  //do work
  startCount(60);
  setChoices(questionCounter);
  submit.addEventListener('click', function() {
    var checkedAnswer = document.querySelector('input[name="questions"]:checked').value
    
    console.log(questions[questionCounter].answer,checkedAnswer)
    if(checkedAnswer === questions[questionCounter].answer) {
     score++
     document.getElementById("score").innerHTML = score
      console.log("this is the score",score)
    } else {
      console.log("false")
    }

    questionCounter++;
    setChoices(questionCounter);

  });
    
  });

//ading the correct corelation of the answer

//adding a score based on what user clicks

//when you start the quiz it starts the timer counting down

//when you answer a question wrong it subtract time from the timer. 

//when you finish you want to input your name with your score displayed.

//when you refresh page we want the high score to stay in the highscores.