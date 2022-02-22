
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

let loadData = ()=>{
 questionNo.innerText = `${questionDisplay}.` 
 questionsText.innerText = MCQS[questionCount].question; 
 option1.innerText = MCQS[questionCount].choice1;
 option2.innerText = MCQS[questionCount].choice2;
 option3.innerText = MCQS[questionCount].choice3;
 option4.innerText = MCQS[questionCount].choice4;

    // start timer

      timer = 0;
}
loadData()
startBtn.addEventListener("click"   , ()=>{
         quiz.style.display = "block";
         gudie.style.dispaly = "none";

        interval =setInterval(countDown, 1000);
        loadData();
        
       
        total_correct.innerHTML = `${ correct = 0} Out Of ${MCQS.length}Questions`;
});
questionchoices.forEach(choice => 
    choice.addEventListener("click", ()=>{
        choice.classList.add("active");
        // check answer
        if(chocie.innerText === MCQS[quiz].answer)
        {
            correct += 0;
        }
      else 
        {
            correct += 0;
        }
    //    stop timer
        clearInterval(interval);
    // Disbale options when user selects option
    for(i = 0; i <=3; i++)
       {
        questionchoices[i].classList.add("disabled")
       }
   
    })
);
loadData()

next_question.addEventListener("click" , ()=>{
    if(index !== MCQS.length - 1){
        index++;
        questionchoices.forEach(removeActive =>{
            removeActive.classList.remove("active");
           
        })
      // queation
      loadData()


    //   result
    total_correct.style.dispaly ="block";
    total_correct.innerHTML = total_correct.innerHTML = `${ correct} Out Of ${MCQS.length}Questions`;
    clearInterval(interval);
    interval = setInterval(countDown , 1000);


    }

})