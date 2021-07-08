questions = {
    abcd:["abcd", "defg", "hijk", "lmnop"],
    blue:["brown", "red", "blue", "yellow"],
    fork:["spoon", "fork", "knife", "plate"],
    hello:["hi", "hola", "sup", "hello"]
}

var questionListEl = document.querySelector(".question-list")

function questionStepper() {
    questionContainerEl = document.createElement("ul");
    for (i = 0; i < questions.abcd.length; i++) {
        questionSingleEl = document.createElement("li")
        questionSingleEl.textContent = questions.abcd[i];
        questionContainerEl.appendChild(questionSingleEl);
        questionListEl.appendChild(questionContainerEl);
    }
};

questionStepper();