/** Quiz App */

const questionsElement = document.getElementById("quizdisplay");
const choicesElement = document.getElementById("choices");
const startButton = document.getElementById("startQuiz");

let timer = 60;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let currentQuestions = 0;

const questions = [
  {
    title:
      "The largest circular storm in our solar system is on the surface of which of the following planets?",
    code: "",
    choices: ["Jupiter", "Venus", "Uranus", "Earth"],
    answer: "Jupiter"
  },
  {
    title: "The biggest asteroid known is:",
    code: "",
    choices: ["Vesta", "Icarus", "Ceres", "Eros"],
    answer: "Ceres"
  },
  {
    title:
      " One of the largest volcanos in our solar system-if not the largest-is named Olympus Mons. This volcano is located on: ",
    code: "",
    choices: [
      "Jupiter's moon Callisto",
      "Venus",
      "Saturn's moon Titan",
      "Mars"
    ],
    answer: "Mars"
  },
  {
    title: "Heliocentric (pron: he-lee-o-sen-trik) means around:",
    code: "",
    choices: ["Jupiter", "the Moon", "the Sun", "Neptune"],
    answer: "the Sun"
  },
  {
    title:
      "In our solar system, which planet has a moon with a mass closest to its own?",
    code: "",
    choices: ["Earth", "Mars", "Jupiter", "Pluto"],
    answer: "Pluto"
  }
];

startGame = () => {
  // hide start screen
  var startPage = document.getElementById("startSection");
  startPage.style.display = "none";

  //remove the attribute that hides your quizzplay div
  questionsElement.removeAttribute("class");

  //questionCounter = 0;
  // score = 0;
  // availableQuestions = [...questions];
  getNewQuestions();
  // return;
};

//Render the questions (one by one)
//Render the  corresponding options
//Clear out any old questions that may have previously been there

getNewQuestions = () => {
  //Grab the array that holds the questions
  //creating a variable to hold the value of the array[index]
  // array[index] = to 0 (the vriable currentQuestion indicates a 0 index ((look at line 10)))
  var currentQ = questions[currentQuestions];

  //EVENT LISTENER STARTS
  // update title with current question
  //Instead of seeing the start quix and the quiz optoion hide it and showcse the question
  //Step 1 hide the title and button

  var titleSector = document.getElementById("questions");
  //what is textContent: grabbing/placing the content (specifying the form of content ((i.e text))) from/to your desired location
  titleSector.textContent = currentQ.title;

  //Clear out any overlapping questions
  choices.innerHTML = " ";

  //Loop through the choices - append (textContent) to push the choices to the html
  currentQ.choices.forEach(function(choice, i) {
    //Create a button for each choice
    var choiceButton = document.createElement("button");
    //Give the button a class
    choiceButton.setAttribute("class", "choice");
    //<button class='choice'></button>
    //Give the button values
    choiceButton.setAttribute("value", choice);

    //place the text of the current index (of the choice array) into the choice button
    choiceButton.textContent = i + 1 + ". " + choice;

    // display on the page
    choicesElement.appendChild(choiceButton);
  });

  //  questionCounter++;
};

//choices.forEach(choices => {
// choices.addEventListener("click", e => {
//    if (!acceptingAnswers) return;

//  });
//});

//THEN I can save my initials and score

// Array that sorts the players array by the score
const sortArray = arr => {
  arr.sort((a, b) => {
    const scoreA = a.score;
    const scoreB = b.score;
    if (scoreA < scoreB) return 1;
    if (scoreA > scoreB) return -1;
    return 0;
  });
};

// Saves the player to the LocalStorage
const saveToLocalStorage = player => {
  if (localStorage.getItem("players") === null) {
    const players = [];
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
  } else {
    const players = JSON.parse(localStorage.getItem("players"));
    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
  }
};

// user clicks button to start quiz
startButton.onclick = startGame;
