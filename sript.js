// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  onChildAdded,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-wJEKabU_qWi26b7tNdoB01sZQpM253s",
  authDomain: "javascript-calculator-d8fc9.firebaseapp.com",
  databaseURL:
    "https://javascript-calculator-d8fc9-default-rtdb.firebaseio.com",
  projectId: "javascript-calculator-d8fc9",
  storageBucket: "javascript-calculator-d8fc9.appspot.com",
  messagingSenderId: "151718557912",
  appId: "1:151718557912:web:3b612b6de4b962b89fffad",
  measurementId: "G-PNJ4XE7379",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

function getData() {
  var dataRef = ref(database, "questions/");
  onChildAdded(dataRef, function (data) {
    questions.push(data.val());
  });
}

getData();

var questions = [
  {
    id: 1,
    question: "Javascript is an _______ language?",
    answer: "Object Oriented",
    options: ["Object Oriented", "Object based", "Procedural", "None Of These"],
  },
];

var displayQuestion = document.getElementById("displayQuestion");
var currentQuestion = document.getElementById("currentQuestion");
var totalQuestion = document.getElementById("totalQuestion");
var optionsParent = document.getElementById("optionsParent");
var nextPage = document.getElementById("nextPage");

var indexVal = 0;
var marks = 0;

function renderQuestion() {
  var que = questions[indexVal];
  displayQuestion.innerHTML = que.question;
  totalQuestion.innerHTML = questions.length;
  currentQuestion.innerHTML = indexVal + 1;

  optionsParent.innerHTML = "";
  for (var i = 0; i < que.options.length; i++) {
    optionsParent.innerHTML += `<div id="optionsParent" class="col-md-6 my-3">
    <button onclick="checkAnswer('${que.answer}', '${que.options[i]}')" class="btn optionBtn text-white w-100 py-2">${que.options[i]}</button>
</div>`;
  }
}

window.checkAnswer = function (a, b) {
  console.log(a, b);
  if (a == b) {
    marks = marks + 1;
  }
  nextPage.innerHTML = `<p class="fw-bold">Score <span class="py-1 px-3 bg-black text-white border border-primary">${marks}</span></p>`;
  console.log(marks);
  nextQuestion();
};

window.nextQuestion = function () {
  indexVal++;
  renderQuestion();
};

renderQuestion();
