// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  getDatabase,
  push,
  ref,
  set,
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

var question = document.getElementById("question");
var option = document.getElementById("option");
var optionsParent = document.getElementById("optionsParent");
var correctAns = document.getElementById("correctAns");

var options = [];
var correctAnswer;

function renderOptions() {
  optionsParent.innerHTML = "";
  for (var i = 0; i < options.length; i++) {
    optionsParent.innerHTML += `<li class="list" onclick="setAns('${options[i]}')">${options[i]}</li>`;
  }
}

window.addOp = function () {
  if (option.value != "") {
    options.push(option.value);
    renderOptions();
    option.value = "";
  } else {
    alert("Enter option");
  }
};

window.setAns = function (ans) {
  correctAnswer = ans;
  correctAns.innerHTML = correctAnswer;
};

window.submitBtn = function () {
  var obj = {
    question: question.value,
    options: options,
    correctAnswer: correctAnswer,
  };

  var questionRef = push(ref(database, "questions/"));
  obj.id = questionRef.key;

  set(questionRef, obj);

  question.value = "";
  optionsParent.innerHTML = "";
  option.value = "";
};
