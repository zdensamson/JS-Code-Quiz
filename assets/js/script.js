// an array full of question objects to be called below
var questionList = [
    {
        questionText: "what is batmans real name?",
        answers: ["bruce wayne", "peter parker", "spongebob"],
        answerIndex: 0
    },
    {
        questionText: "is god real?",
        answers: ["yes", "maybe", "no"],
        answerIndex: 1
    },
    {
        questionText: "who will win the NBA 2021 championship?",
        answers: ["Bucks", "Nets", "Suns"],
        answerIndex: 2
    },  
];
// global variable to keep track of what question the user is on 
var currentQuestion = 0;

// global variable to keep track of game time
var counter = 30;

// targets the <div> where our question/answers sit in
var visableQuiz = document.querySelector(".quiz-holder");

// targets the <h3> to store the question text
var questContainer = document.querySelector(".question");

// targets the <ul> where we will dynamically append <li> elements
var answerContainer = document.querySelector(".visable-answers");

// targets the <h4> where we will respond to user clicks
var feedback = document.querySelector(".response");

// targets the <h4> where the timer will be displayed 
var timeStamp = document.querySelector(".time-keeper")

function populateQuest() {
    var questObjEl = questionList[currentQuestion];
    questionTxt = questObjEl.questionText;
    questContainer.textContent = questionTxt;
    for (i = 0; i < questObjEl.answers.length; i++) {
        questionSingleEl = document.createElement("li");
        questionSingleEl.textContent = questObjEl.answers[i];
        questionSingleEl.setAttribute("data-question-num", i);
        questionSingleEl.id = i;
        answerContainer.appendChild(questionSingleEl);
        visableQuiz.appendChild(answerContainer);
    }
    document.getElementById("start-game").remove();
}

function removeLastQuestion() {
    questContainer.textContent=""
    var questObjEl = questionList[currentQuestion];
    for (i = 0; i < questObjEl.answers.length; i++) {
        var currentAnswer = document.getElementById(i);
        currentAnswer.remove();
    }
}

function nextQuestion () {
    feedback.textContent = "";
    removeLastQuestion();
    currentQuestion++;
    populateQuest();
    
}

function selectAnswer(event) {
    if (questionList[currentQuestion].answerIndex == event.target.getAttribute("data-question-num")) {
        feedback.textContent = "CORRECT!";
        setTimeout(nextQuestion, 1000);
        // feedback.textContent = "";

    }
    else {
        feedback.textContent = "WRONG!"
        counter = counter - 10;
    }
};



function timerStart() {
    var myTimer = setInterval(function(){
        counter--;
        timeStamp.textContent = counter;
        if (counter === 0) {
            clearInterval(myTimer);
            timeStamp.textContent = "you LOSE!";
        }
        if (counter < 0) {
            clearInterval(myTimer);
            timeStamp.textContent = "you LOSE!";
        }
    },1000)
};
// listens for the button click of "START GAME"
    //starts populating questions
document.getElementById("start-game").addEventListener("click",populateQuest);
    //starts the countdown
document.getElementById("start-game").addEventListener("click",timerStart);

// adds event listeners to each ANSWER stored in <li> tags 
answerContainer.addEventListener("click", selectAnswer);
