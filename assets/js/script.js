const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:'what Year was the collosuem finsihed?',
        choice1: '80 AD',
        choice2: '90 AD',
        choice3: '60 AD',
        choice4: '50 AD',  
        answer: 1,
    },
    {
        question:'Who was the first emperor for rome?',
        choice1: "Augustus",
        choice2: "Julius Caesar",
        choice3: "Nero",
        choice4: "Marcus Aurelius",  
        answer: 1,
    },
    {
        question:'What was the bloodiest battle during the first world war?',
        choice1: "Battle of Somme",
        choice2: "Battle of Amiens",
        choice3: "Battle of Verdun",  
        choice4: "Battle of Passchebdaele",
        answer: 3,
    },
    {
        question:'What year did Queen Elizabeth II become queen of United Kingdom?',
        choice1: "10th of May 1954",
        choice2: "3rd of August 1949",
        choice3: "2nd of June 1953",
        choice4: "23rd of july 1951", 
        answer: 3,
    },

    {
        question:'Which country gave the statue of liberty a gift to the United States?',
        choice1: "Germany",
        choice2: "Spain",
        choice3: "United Kingdom",
        choice4: "France",
        answer: 4,
    },
    {
        question:'What was the Largest Contiguous Empire in History?',
        choice1: "Roman Empire",
        choice2: "Mongolian Empire",
        choice3: "British Empire",
        choice4: "Ottoman Empire",  
        answer: 2,
    },
    {
        question:'When was the Declaration of Independence Signed?',
        choice1: "July 2nd 1776",
        choice2: "March 10th 1776",
        choice3: "August 21st 1776",
        choice4: "September 1st 1776", 
        answer: 1,
    },
    {
        question:'Who was the first president of the United States?',
        choice1: "George Washington",
        choice2: "Abraham Lincoln",
        choice3: "John Adams",
        choice4: "Thomas Jefferson",  
        answer: 1,
    },

    {
        question:'Who was the first man in space?',
        choice1: "Yuri Gagarin",
        choice2: "Neil Armstrong",
        choice3: "Buzz Aldrin",
        choice4: "Wally Schirra",  
        answer: 1,
    },
    {
        question:'What year was Microsoft Founded?',
        choice1: "12th of March 1970",
        choice2: "22nd of  Febuary 1988",
        choice3: "4th April 1975",
        choice4: "31st of May 1975", 
        answer: 3,
    },
    {
        question:'How many wives did Herny VIII have?',
        choice1: "8",
        choice2: "9",
        choice3: "7",
        choice4: "6",  
        answer: 4,
    },
    {
        question:'What was the pirate Blackbeards real name?',
        choice1: "Edward Teach",
        choice2: "Bartholomew Robert",
        choice3: "Charles Van",
        choice4: "William Kid",  
        answer: 1,
    },
    {
        question:'Who panited the Mona Lisa?',
        choice1: "Vincent van-Gogh",
        choice2: "Leonardo Da Vinci",
        choice3: "Michelangelo",
        choice4: "Rembrandt",  
        answer: 2,
    },
    {
        question:'Which one of these presidents are not on Mount Rushmore?',
        choice1: "George Washington",
        choice2: "Abraham Lincoln",
        choice3: "Andrew Jackson",
        choice: "Theodore Roosevel",  
        answer: 3,
    },
    {
        question:'During which war was a Christmas Truce called?',
        choice1: "WW1",
        choice2: "ww2",
        choice3: "American Revolution",
        choice4: "Cold War",  
        answer: 1,
    },

    {
        question:'Who was the first ruler of the Mongol Empire?',
        choice1: "Genghis Khan",
        choice2: "Tolui Khan",
        choice3: "Ogedei Khan",
        choice4: "Guyuk Khan",  
        answer: 1,
    },
    {
        question:'What year was the first iPhone released?',
        choice1: "1996",
        choice2: "1999",
        choice3: "1997",
        choice4: "1998", 
        answer: 3,


    }
]   

const SCORE_POINTS = 1
const MAX_QUESTIONS = 17

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/score.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 60)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()
