// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUzo7aE_x-oTLELYf1Ip_9Vj-64rMg1Ug",
  authDomain: "quiz-app-8e5a7.firebaseapp.com",
  databaseURL: "https://quiz-app-8e5a7-default-rtdb.firebaseio.com",
  projectId: "quiz-app-8e5a7",
  storageBucket: "quiz-app-8e5a7.appspot.com",
  messagingSenderId: "756701031421",
  appId: "1:756701031421:web:98ccee971ddd21d5b3c794"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);








var questions = [
    {
      question: "HTML Stands for ?",
      options: ["Hyper Text Markup Language", "Hyper Tech Markup Language", "Hyper Touch Markup Language"],
      correctAns: "Hyper Text Markup Language"
    },
    {
      question: "CSS Stands for ?",
      options: ["Cascoding Style Sheets", "Cascading Style Sheets", "Cascating Style Sheets"],
      correctAns: "Cascading Style Sheets"
    },
    {
      question: "Which tag is used for most large heading ?",
      options: ["h6", "h2", "h1"],
      correctAns: "h1"
    },
    {
      question: "Which tag is used to make element unique ?",
      options: ["id", "class  ", "label"],
      correctAns: "id"
    },
    {
      question: "Any element assigned with id, can be get in css ?",
      options: ["by # tag", "by @ tag", "by & tag"],
      correctAns: "by # tag"
    },
    {
      question: "CSS can be used with ______ methods ?",
      options: ["8", "3", "4"],
      correctAns: "3"
    },
    {
      question: "In JS variable types are ____________ ?",
      options: ["6", "3", "8"],
      correctAns: "8"
    },
    {
      question: "In array we can use key name and value ?",
      options: ["True", "False", "None of above"],
      correctAns: "False"
    },
  ];

  var currentQuestion = document.getElementById('currentQuestion')
  var totalQuestion = document.getElementById('totalQuestion')
  var question = document.getElementById('question')
  var answerParent = document.getElementById('answerParent')

  var indexNum = 0
  var score = 0

  function renderQuestion() {
    currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length

    var obj = questions[indexNum]

    question.innerHTML = obj.question
    answerParent.innerHTML = ''
    for(var i = 0; i<obj.options.length; i++){
      answerParent.innerHTML += `<div class="col-md-4">
      <div class="py-2">
          <button onClick="checkQuestion('${obj.options[i]}','${obj.correctAns}')" class="btn btn-dark fs-4 rounded-pill w-100">
            ${obj.options[i]}
          </button>
      </div>
  </div>`
    }
  }
  renderQuestion()




  function nextQuestion(){
    indexNum++
    renderQuestion()
  }

  function checkQuestion(a,b){
    if(a == b){
      score ++
      console.log(score)
    }

    nextQuestion()
  }