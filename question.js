
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

var question = document.getElementById("#questions");
var start = document.getElementById("#startBtn");
var btn1 =document.getElementById("#btn1");
var btn2 =document.getElementById("#btn2");
var btn3 =document.getElementById("#btn3");
var btn4 =document.getElementById("#btn4");
var invisible = document.getElementsByClassName(".invisible");

const myQuestions = [
  {
    question: "Who Invented JavaScript?",
    answer1: {
     a: "Douglas Crockford",
     b: "Beyonce",
     c: "Brendan Eich",
     d: "Obama"
    },
    correctAnswer: "c"
  },
  {
    question: "What does HTML stand for?",
    answer2: {
      a: "Hyper Text Markup Language",
      b: "Happy Times Maybe Later",
      c: "Cascading Style Sheets",
      d: "Nodes"

    },
    correctAnswer: "a"
  },

  {
    question: "Which on of these is not a language?",
    answer: {
      a: "Javascript",
      b: "HTML",
      c: "css",
      d: "browser"
    },
    CorrectAnswer: "d"

  },
]









//adding the correct corelation of the answer

//adding a score based on what user clicks

//when you start the quiz it starts the timer counting down

//when you answer a question wrong it subtract time from the timer. 

//when you finish you want to input your name with your score displayed.

//when you refresh page we want the high score to stay in the highscores.







