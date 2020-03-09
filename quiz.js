// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const submitHighscores = document.getElementById("submitHighscores");
const viewHighscores = document.getElementById("viewHighscores");
const highscoreInput = document.getElementById("highscoreInput");
// create our questions
let questions = [
  {
    question:
      "The largest circular storm in our solar system is on the surface of which of the following planets?",
    choiceA: "Jupiter",
    choiceB: "Venus",
    choiceC: "Uranus",
    choiceD: "Earth",
    correct: "A"
  },
  {
    question:
      "One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on: ",
    choiceA: "Jupiter's moon Callisto",
    choiceB: "Venus",
    choiceC: "Saturn's moon Titan",
    choiceD: "Mars",
    correct: "D"
  },
  {
    question: "Heliocentric (pron: he-lee-o-sen-trik) means around:",
    choiceA: "Jupiter",
    choiceB: "The Moon",
    choiceC: "The Sun",
    choiceD: "Neptune",
    correct: "C"
  },
  {
    question:
      "In our solar system, which planet has a moon with a mass closest to its own?",
    choiceA: "Earth",
    choiceB: "Mars",
    choiceC: "Jupiter",
    choiceD: "Pluto",
    correct: "D"
  },
  {
    question: "The biggest asteroid known is:",
    choiceA: "Vesta",
    choiceB: "Icarus",
    choiceC: "Ceres",
    choiceD: "Eros",
    correct: "C"
  }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 60;
let timer;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  timer = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let i = 0; i <= lastQuestion; i++) {
    progress.innerHTML += "<div class='prog' id=" + i + "></div>";
  }
}

// counter render
function renderCounter() {
  count--;
  counter.innerHTML = count;
}

// Check Answer

function checkAnswer(answer) {
  if (answer === questions[runningQuestion].correct) {
    // answer is correct
    alert("Correct!");
    // count += 10;
  } else {
    count += -10;
    alert("Wrong!");
  }

  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    counter.style.display = "none";
    quiz.style.display = "none";
    scoreRender();
  }
}
viewHighscores.addEventListener("click", scoreRender);
// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  start.style.display = "none";
  counter.style.display = "none";
  // calculate the amount of question percent answered by the user
  const score = count;
  scoreDiv.innerHTML += "<h3>You got a score of " + score + "!</h3>";
  // scoreDiv.li.list - group - item.leaderboarditem.innerHTML +=
  //   "<li class='list-group-item leaderboardItem'>" + score + "</li>";
}

//local storage -----------
// //log players score in leaderboard
// let saveHighscore = {

//   score: count.value(),
//   name: highscoreInput.

// submitHighscores.addEventListener("click", function (event){
// event.preventDefault();

// }
// localStorage.setItem("saveHighscore", JSON.stringify(saveHighscore));

// let lastUser = JSON.parse(localStorage.getItem('saveHighscore'));
// #.textContent = lastUser.name;
// #.textContent = lastUser.score;

// }
