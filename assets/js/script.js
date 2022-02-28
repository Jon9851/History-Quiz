const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progress');
const scoreText = document.querySelector('#score');
const progressBarFull= document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = Text
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question:'what Year was the collosuem finsihed?',
        choice1: '80 AD ',
        choice2: '90 AD',
        choice3: '60 AD',
        choice4: '50 AD',  
        answer: '1',
    },
    {
        question:'Who was the first emperor for rome?',
        choice1: 'Augustus ',
        choice2: 'Julius Caesar',
        choice3: 'Nero',
        choice4: 'Marcus Aurelius',  
        answer: '1',
    },
    {
        question:'Whats was the bloodiest battle during the first world war?',
        choice1: 'Battle of Somme',
        choice2: 'Battle of Amiens',
        choice3: 'Battle of Verdun',  
        choice4: 'Battle of Passchebdaele',
        answer: '3',
    },
    {
        question:'What year did Queen Elizabeth become queen of United Kingdom?',
        choice1: '10th of May 1954',
        choice2: '3rd of August 1949',
        choice3: '2nd of June 1953 ',
        choice4: '23rd of july 1951', 
        answer: '3',
    },

    {
        question:'Which country gave the statue of liberty a gift to the united states?',
        choice1: 'Germany',
        choice2: 'Spain',
        choice3: 'United Kingdom',
        choice4: 'France',
        answer: '4',
    },
    {
        question:'What was the Largest Contiguous Empire in History?',
        choice1: 'Roman Empire',
        choice2: 'Mongolian Empire',
        choice3: 'British Empire',
        choice4: 'Ottoman Empire',  
        answer: '2',
    },
    {
        question:'When was the Declaration of Independence Signed?',
        choice1: 'July 2nd 1776 ',
        choice2: 'March 10th 1776',
        choice3: 'August 21st 1776',
        choice4: 'September 1st 1776', 
        answer: '1',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },

    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '', 
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },

    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '',  
        answer: '',
    },
    {
        question:'',
        choice1: '',
        choice1: '',
        choice1: '',
        choice1: '', 
        answer: '',

    }
]   