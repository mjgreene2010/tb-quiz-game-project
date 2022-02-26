let countDownTimer;
let timerInterval;
let arrayOfQuestions = [];

const maxTime = 5 * 60; //time is insecond
function setCountDownTimer() {
  countDownTimer = maxTime;
}

//When the person clicks the begin button the timer starts
//start time
timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  countDownTimer -= 1;
}

//questions is asked
function setUpQuestions() {
  let question0 = {
    id: "quest0",
    question: "To select elements with a specific class",
    answer1: "write a semicolon (;) character, followed by the class name",
    answer2: "write a period (.) character, followed by the class name",
    answer3: "write a period (.) character",
    answer4: "write a comma (,) character",
    correctAnswer: 2,
  };

  let question1 = {
    id: "quest1",
    question: "In CSS, a color can be specified by using a predefined co",
    answer1: "yes",
    answer2: "no",
    answer3: null,
    answer4: null,
    correctAnswer: 1,
  };

  arrayOfQuestions.push(question0);
  arrayOfQuestions.push(question1);

  console.log("SetupQuestions arrayOfQuestions: ", arrayOfQuestions);
}

function doQuestionwRo4Tqm3Loop() {
  for (let i = 0; i < arrayOfQuestions.length; i++) {}
}

function showQuestion(questionindex) {
  let question = document.getElementById("question");
  let newQuestion = document.createElement("div");
  newQuestion.id = arrayOfQuestions[questionindex].id;
  newQuestion.innerText = arrayOfQuestions[questionindex].question;
  questionSection.appendChild();
}

//if question is correct next question
//if question is incorrect time penalty
//if answer is correct show points and then go to the next question
//Once all the question have been answereed give options to save
//Once all question have been answered, give options to save score
//if user chooses to save score show the scoreboard
