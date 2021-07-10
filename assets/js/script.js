var questionList = [
    {
        questionText: "what is batmans real name?",
        answers: ["bruce wayne", "peter parker", "spongebob"],
        answerIndex: 0
    },
    {
        questionText: "what is spidermans real name?",
        answers: ["bruce wayne", "peter parker", "spongebob"],
        answerIndex: 1
    },
    {
        questionText: "who lives in a pinapple under the sea?",
        answers: ["bruce wayne", "peter parker", "spongebob"],
        answerIndex: 2
    },  
];

currentQuestion = 0;


// targets the <div> where our <ul> sits in
var visableQuestions = document.querySelector(".question-list");
// targets the <ul> where we will dynamically append <li> elements
var questionContainerEl = document.querySelector(".visable-questions")

function startGame() {
    // create the content of HTML
    // set the "game's state" -- know where the game is at global variable 
    // evaluate the answer 
        // pass in the event listener to capture what was clicked in an if/then format
        // eventually append a right/wrong text on to the screen 
    thisQuestion = questionList[currentQuestion];
    for (i = 0; i < thisQuestion.answers.length; i++) {
        questionSingleEl = document.createElement("li");
        questionSingleEl.textContent = thisQuestion.answers[i];
        questionSingleEl.setAttribute("data-question-num", i);
        questionContainerEl.appendChild(questionSingleEl);
        visableQuestions.appendChild(questionContainerEl);
    }
}

function selectAnswer(event) {
    if (questionList[currentQuestion].answerIndex == event.target.getAttribute("data-question-num")) {
        alert("you selected the correct answer!")
    }
    else {
        alert("wrong!")
    }
};

// replace this with a start game function 
document.getElementById("start-game").addEventListener("click",startGame);

// adds event listener to li elements
visableQuestions.addEventListener("click", selectAnswer);