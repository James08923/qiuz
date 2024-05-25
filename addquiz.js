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




var question = document.getElementById('question')
var option = document.getElementById('option')
var optionsParent = document.getElementById('optionsParent')
var correctAnswerElem =document.getElementById('correctAnswer')


var options = []
var correctAnswer

function renderOptions(){
    optionsParent.innerHTML = ''
    for(var i = 0; i<options.length; i++){
        optionsParent.innerHTML += `<li onclick="setCorrectAnswer('${options[i]}')" class='p-2 bg-light fs-5 rounded shadow my-2'>${options[i]}</li>`
    }
}


window.addOption = function(){
    options.push(option.value)
    console.log(options)
    renderOptions()
}

window.setCorrectAnswer = function(a){
    correctAnswer = a
    correctAnswerElem.innerHTML = correctAnswer
}