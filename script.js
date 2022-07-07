var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var startTimer = 75;
var currentIndex = 0;
var score = 0;
var timer 
var options = document.querySelector(".btn-group");





/* Questions and answers used in quiz */
var questions = [
{
title: "Commonly used data type do not include:",
choices: ["strings","boolean","alerts", "numbers"],
answer : "alerts"    
},
{
title: "The condition in an if/else statement is enclosed within:",
choices: ["quotes","Curly brackets","parentheses", "square brackets"],
answer : "parentheses"    
},
{
title: "Arrays in JavaScript can be used to store:",
choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
answer : "all of the above"    
},
{
title: "String values must be enclosed within --- when being assigned to variables ",
choices: ["commas","curly brackets","quotes","parentheses"],
answer : "quotes"    
},
{
title: "A very useful tool used during development and debugging for printing content to the debugger is:",
choices: ["JavaScript","terminal/bash","alerts", "console.log"],
answer : "console.log"    
},
]

/* Adding click event to button */
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    clearInterval(timer)
    timer = setInterval(setTime, 1000)
    startTimer = 75;
    console.log("quiz started") 
    displayQuestions();
}
    
function setTime() {
    startTimer--;
    timerElement.textContent = startTimer;
  if(startTimer <= 0 || currentIndex === questions.length) {
    clearInterval(timerInterval);
    timerElement.textContent = "";
    alert("Game Over");
    results();}
}

function displayQuestions() {
    for (var i = 0; i < questions.length; i++)
    var q = questions[currentIndex].title;
    var c = questions[currentIndex].choices;
    console.log("questionsStarted")
    wordBlank.innerHTML = q;
    options.innerHTML = c;
   /*choices.innerHTML = c[0];
    choices.innerHTML = c[1];
    choices.innerHTML = c[2];
    choices.innerHTML = c[3];
    /*for (var i = 0; i < questions.length; i++) {}*/
}  

 
function checkAnswer(answer) {
if (questions[currentIndex].answer == answer) {
    alert("correct");
    score++;
    nextQuestion();
}
else {
    alert("incorrect");
    startTimer= startTimer - 10;
    nextQuestion();
}}

function nextQuestion(){
    currentIndex++;
    if (currentIndex===questions.length){
    results()}
    else {displayQuestions();}
}



