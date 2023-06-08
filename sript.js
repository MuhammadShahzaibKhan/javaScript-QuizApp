var questions = [
  {
    id: 1,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Randomely Access Memory",
      "Random Access Memory",
      "Read Accept Memory",
      "None Of These",
    ],
  },
  {
    id: 2,
    question: "What does Au stand for in the periodic table ?",
    answer: "Gold",
    options: ["Potassium", "Carbon", "Gold", "None Of These"],
  },
  {
    id: 3,
    question: "Who is the CEO of Twitter ?",
    answer: "Jack Dorsey",
    options: ["Jack Dorsey", "Steve Jobs", "Mark Zuckerberg", "None Of These"],
  },
  {
    id: 4,
    question: "Who invented first Computer ?",
    answer: "Charles Babbage",
    options: ["Bill Gates", "Jack Dorsey", "Charles Babbage", "None Of These"],
  },
  {
    id: 5,
    question: "Who is the CEO of Microsoft ?",
    answer: "Satya Narayana Nadella",
    options: [
      "Bill Gates",
      "Satya Narayana Nadella",
      "Mark Zuckerberg",
      "None Of These",
    ],
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
    <button onclick="checkAnswer('${que.answer}', '${que.options[i]}')" class="btn btn-outline-info text-black w-100 py-2">${que.options[i]}</button>
</div>`;
  }
  
}

function checkAnswer(a, b) {
  console.log(a, b);
  if (a == b) {
    marks = marks + 1;
  }
  nextPage.innerHTML = `<p class="fw-bold">Score <span class="py-1 px-3 bg-black text-white border border-primary">${marks}</span></p>`
  console.log(marks);
  nextQuestion();
}

function nextQuestion() {
  indexVal++;
  renderQuestion();
}

renderQuestion();
