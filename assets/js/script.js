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
var counter = 70;

// targets the <div> where our question/answers sit in
var visableQuiz = document.querySelector(".quiz-holder");

// targets the <h3> to store the question text
var questContainer = document.querySelector(".question");

// targets the <ul> where we will dynamically append <li> elements
var answerContainer = document.querySelector(".visable-answers");

// targets the <h4> where we will respond to user clicks
var feedback = document.querySelector(".response");

// targets the <h4> where the timer will be displayed 
var timeStamp = document.querySelector(".time-keeper");

// targets the <div> "row" where we hold the timer & feedback <h4>'s
var talker = document.querySelector(".row-tres")

// targets the 3 <p> elements describing the game
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");
var p3 = document.querySelector(".p3");

function timerStart() {
    var myTimer = setInterval(function(){
        counter--;
        timeStamp.textContent = "Time left: " + counter;
        if (counter === 0) {
            clearInterval(myTimer);
            timeStamp.textContent = "game over"
            loseGame();
        }
        if (counter < 0) {
            clearInterval(myTimer);
            timeStamp.textContent = "game over"
            loseGame();
        }
        if (currentQuestion == questionList.length) {
            clearInterval(myTimer);
            timeStamp.textContent = "you WIN!"
            winGame();
        }
    },1000)
};

function populateQuest() {
    var questObjEl = questionList[currentQuestion];
    questionTxt = questObjEl.questionText;
    questContainer.textContent = questionTxt;
    for (i = 0; i < questObjEl.answers.length; i++) {
        questionSingleEl = document.createElement("button");
        questionSingleEl.type = "button";
        questionSingleEl.textContent = questObjEl.answers[i];
        questionSingleEl.setAttribute("data-question-num", i);
        questionSingleEl.classList.add("btn");
        questionSingleEl.classList.add("btn-warning");
        questionSingleEl.classList.add("mb-2");
        questionSingleEl.id = i;
        answerContainer.appendChild(questionSingleEl);
    }
    document.getElementById("start-game").remove();
    p1.remove();
    p2.remove();
    p3.remove();
};

function removeLastQuestion() {
    questContainer.textContent=""
    var questObjEl = questionList[currentQuestion];
    for (i = 0; i < questObjEl.answers.length; i++) {
        var currentAnswer = document.getElementById(i);
        currentAnswer.remove();
    }
};

function nextQuestion () {
    feedback.textContent = "";
    removeLastQuestion();
    currentQuestion++;
    populateQuest();
    
};

function selectAnswer(event) {
    if (questionList[currentQuestion].answerIndex == event.target.getAttribute("data-question-num")) {
        feedback.textContent = "CORRECT!";
        setTimeout(nextQuestion, 600);

    }
    else {
        feedback.textContent = "WRONG!"
        counter = counter - 10;
    }
};

function winGame() {
    console.log("game over");

    // remove game elements
    talker.remove();
    document.querySelector(".answer-holder").remove();
    document.querySelector(".row-quatro").remove();

    //provide 
    questContainer.textContent = "All done!";
    var scoreKeep = document.createElement("p");
    scoreKeep.innerHTML = "Your final score was: " + counter;
    scoreKeep.classList.add("col-12");
    scoreKeep.classList.add("text-center");
    visableQuiz.appendChild(scoreKeep);

};


// listens for the button click of "START GAME"
    //starts populating questions
document.getElementById("start-game").addEventListener("click",populateQuest);
    //starts the countdown
document.getElementById("start-game").addEventListener("click",timerStart);

// adds event listeners to each ANSWER stored in <li> tags 
answerContainer.addEventListener("click", selectAnswer);
