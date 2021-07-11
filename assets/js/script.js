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
currentQuestion = 0;

// targets the <div> where our question/answers sit in
var visableQuiz = document.querySelector(".quiz-holder");

// targets the <h3> to store the question text
var questContainer = document.querySelector(".question")

// targets the <ul> where we will dynamically append <li> elements
var answerContainer = document.querySelector(".visable-answers")

function questStepper() {
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

function selectAnswer(event) {
    if (questionList[currentQuestion].answerIndex == event.target.getAttribute("data-question-num")) {
        alert("you selected the correct answer!")
        removeLastQuestion();
        currentQuestion++;
        questStepper();

    }
    else {
        alert("wrong!")
    }
};

// listens for the button click of "START GAME"
document.getElementById("start-game").addEventListener("click",questStepper);

// adds event listeners to each ANSWER stored in <li> tags 
visableQuiz.addEventListener("click", selectAnswer);