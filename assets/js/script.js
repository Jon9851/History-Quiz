// quiz section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

// question section
let questionNo = document.querySelector("#questionNo");
let questionText = document.querySelector("#questionText");

// Multiple Chocies 
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

// correct answer and next question
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");

// results section
let points = document.querySelector("#points");
let exit = document.querySelector("#exit");

// All h4 for quiz section
let questionchoices = document.querySelector("#questionchoices");

let index = 0;
let timer = 0;
let interval = 0;

// total points
let correct = 0;

//answer vaules

let UserAns = undefined;

// timer for the quiz
let countDown = ()=>{
    if(timer === 30)
    {
        clearInterval(interval);
    }
    else{
        timer++;
        console.log(timer);
    }
}

// setInterval(countDown,1000);

let loadData = ()=>{
 questionNo.innerText = quiz + 1 + 1 ".";
 questionsText.innerText = MCQS[quiz.question];
 option1.innerText = MCQS[quiz].
}