
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




const quesiton = document.querySelector("#question");
const choices = Array.from(document.querySelector(".choice-text"));
const score = document.querySelector("#score")
let currentQuestion = {};
let acceptingAnswers = true;

let questionCounter = 0;
let availableQuestions =[];



var timer = document.getElementById("timeGauge")



let myQuestions = [
  {
    question: "Who Invented JavaScript?",
     a: "Douglas Crockford",
     b: "Beyonce",
     c: "Brendan Eich",
     d: "Obama",
    answer: "c"
  },
  {
    question: "What does HTML stand for?",
 
      a: "Hyper Text Markup Language",
      b: "Happy Times Maybe Later",
      c: "Cascading Style Sheets",
      d: "Nodes",
    answer: "a"
  },

  {
    question: "Which on of these is not a language?",
   
      a: "Javascript",
      b: "HTML",
      c: "css",
      d: "browser",
     answer: "d"

  },
];

const SCORE_POINTS = 50;
const MAX_QUESTIONS =3;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...myQuestions]
  getNewQuestion()
};

getNewQuestion = () => {
  if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore, score")

    return window.location.assign("/end.html")
  }
  questionCounter++;
const questionsIndex = Math.floor(Math.random()*availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex];
question.innerText = currentQuestion.question

choices.forEach(choice=> {
  const number = choice.dataset["number"];
  choice.innerText = currentQuestion["choice" + number];
});
availableQuestions.splice[questionsIndex, 1];
acceptingAnswers = true
};

choices.forEach(choice => {
  choice.addEventListener("click", e =>{
    if(!acceptingAnswers) return;
    acceptingAnswers = false
    const selectedChoise = e.target;
    const selectdAnswer = selectedChoice.dataset["number"];

    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS)
    }
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion()
    }, 50);
  });
});

// var indexQuestions = myQuestions.length -1;
// var timeLeft = 60;
// var timeElapsed;
// var timer;
// //timer Functions
// function startTimer(){
//     timer = setInterval(tick, 1000);
// }

//every second do this
// function tick(){
//     timeElapsed++;
//     console.log(timeElapsed)
//     //end timer
//     if(timeElapsed + 1 > timeLeft){
//         endGame();
//     }
//     updateTimer();
// }
// function updateTimer(){
//     var currentTime = timeLeft - timeElapsed
//     timeElapsed.textContent = currentTime;
// }
// var count = 60;
// choices.addEventListener("click", function() {
//   timer = setInterval(function() {
//   timeGauge.innerHTML = "Time: " + count--;
//   if (count === -1) clearInterval(timer);
// },1000);
// });




//adding the correct corelation of the answer

//adding a score based on what user clicks

//when you start the quiz it starts the timer counting down

//when you answer a question wrong it subtract time from the timer. 

//when you finish you want to input your name with your score displayed.

//when you refresh page we want the high score to stay in the highscores.