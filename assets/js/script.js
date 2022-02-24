
// quiz section
let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

// question section
let questionNo = document.getElementById("questionNo");
let questionText = document.getElementById("questionText");
let questionCount = 0;
let questionDisplay = questionCount + 1

// Multiple Chocies 
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
console.log(option1)
console.log(MCQS)


// correct answer and next question
let total_correct = document.querySelector("#total_correct");
let next_question = document.querySelector("#next_question");


// results section
let points = document.querySelector("#points");
let exit = document.querySelector("#exit");

// All h4 for quiz section
let questionchoiceProto = document.getElementsByClassName("questionchoices");
let questionchoices = Array.from(questionchoiceProto)
console.log(questionchoices)

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
        next_question.click();
    }
    else{
        timer++;
        time.innerText = timer;
    }
}

// setInterval(countDown,1000);

const loadData = () =>{
    questionNo.innerText = `${questionDisplay}.` 
    questionsText.innerText = MCQS[questionCount].question; 
    option1.innerText = MCQS[questionCount].choice1;
    option2.innerText = MCQS[questionCount].choice2;
    option3.innerText = MCQS[questionCount].choice3;
    option4.innerText = MCQS[questionCount].choice4;

    // start timer

    timer = 0;
}
const MAX_QUESTIONS = 10;

const checkAnswer = () => {
    questionchoices.forEach(choice => {
        choice.addEventListener("click", ()=>{
            console.log(choice.innerText)
            choice.classList.add("active");
             // check answer
            if(choice.innerText === MCQS[questionCount].answer) {
                console.log(MCQS[questionCount].answer)
                correct = correct + 1;
            }

            //    stop timer
            clearInterval(interval);
            // Disbale options when user selects option
            for(i = 0; i <=3; i++)
            {
                questionchoices[i].classList.add("disabled")
            }
        
            })
        });
}

console.log(correct)
// change questions 


next_question.addEventListener("click" , ()=>{
    if(questionCount !== MCQS.length - 1){
        questionCount = questionCount + 1;
        questionDisplay = questionDisplay + 1;
        questionchoices.forEach(removeActive =>{
        removeActive.classList.remove("active");
        console.log("active");
    
    });
        if (questionCount == 10){
        
            return window.location.assign("/score.html");
        
        
            console.log("10 questions answered");

        
    };    
       
    

      // question
      init()


    //   result
    total_correct.style.dispaly ="block";
    total_correct.innerHTML = total_correct.innerHTML = `${ correct} Out Of ${MCQS.length}Questions`;
    clearInterval(interval);
    interval = setInterval(countDown , 1000);


    }
    
console.log("total_correct");
})
const init = () => {
    loadData()
    checkAnswer()
    questionchoices.forEach(choice => {
        choice.classList.remove("disabled")
    })


    
    console.log(correct)
}
init()
