const questions = [
    {
        question: "What does the 'sizeof' operator return in C?",
        options: ["Size of a variable", "Size of a function", "Size of a datatype", "Size of a pointer"],
        answer: "Size of a datatype",
        explanation: "The 'sizeof' operator in C returns the size (in bytes) of a datatype."
    },
    {
        question: "What is the result of the expression 'sizeof(int)' in C?",
        options: ["1", "2", "4", "Depends on the system"],
        answer: "Depends on the system",
        explanation: "The size of 'int' in C depends on the system architecture (16-bit, 32-bit, or 64-bit), so the result of 'sizeof(int)' varies."
    },
    {
        question: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    printf(\"%d\", x++);\n    return 0;\n}",
        options: ["5", "6", "Error", "Undefined behavior"],
        answer: "5",
        explanation: "The code prints the value of 'x' (5) and then increments it due to the postfix increment operator 'x++'."
    },
    {
        question: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int x = 5, y;\n    y = x++ + ++x;\n    printf(\"%d\", y);\n    return 0;\n}",
        options: ["11", "12", "13", "Error"],
        answer: "12",
        explanation: "The expression 'x++ + ++x' results in undefined behavior due to modifying 'x' multiple times between sequence points. Avoid such expressions in your code."
    },
    {
        question: "What will be the value of 'x' after the following code is executed?\n\nint x = 10;\nx += x -= x *= x;",
        options: ["-90", "-70", "90", "70"],
        answer: "-70",
        explanation: "The expression 'x += x -= x *= x;' is equivalent to 'x = x + (x = x - (x = x * x));'. After each operation, 'x' is updated. The final value of 'x' is -70."
    },
    {
        question: "Which of the following is not a valid variable name in C?",
        options: ["myVariable", "123variable", "_variable", "variable123"],
        answer: "123variable",
        explanation: "Variable names in C cannot start with a digit. Therefore, '123variable' is not a valid variable name."
    },
    {
        question: "What is the purpose of the 'break' statement in C?",
        options: ["To skip the current iteration of a loop", "To exit a loop or switch statement", "To terminate the program", "To skip the current iteration of a switch statement"],
        answer: "To exit a loop or switch statement",
        explanation: "The 'break' statement in C is used to exit the current loop or switch statement and continue with the next statement after the loop or switch."
    },
    {
        question: "What will be the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int x = 5;\n    if (x = 0) printf(\"True\");\n    else printf(\"False\");\n    return 0;\n}",
        options: ["True", "False", "Error", "Undefined behavior"],
        answer: "False",
        explanation: "The condition 'x = 0' assigns 0 to 'x' and evaluates to 0, making the 'if' condition false. Therefore, the code prints 'False'."
    },
    {
        question: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int arr[] = {1, 2, 3};\n    printf(\"%d\", arr[3]);\n    return 0;\n}",
        options: ["1", "2", "3", "Error"],
        answer: "Error",
        explanation: "The code tries to access an element outside the bounds of the array 'arr', resulting in undefined behavior."
    },
    {
        question: "What is the output of the following code?\n\n#include <stdio.h>\nint main() {\n    int x = 5, y = 2;\n    printf(\"%d\", x / y);\n    return 0;\n}",
        options: ["2.5", "2", "2.0", "2.00"],
        answer: "2",
        explanation: "The code performs integer division of 'x' by 'y' and prints the integer quotient (2)."
    }

];


let score = 0;
let timeLeft = 0;
let timer;
let shuffledQuestions = [];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreElement = document.getElementById("score-value");
const timerElement = document.getElementById("time-left");
const startBtn = document.getElementById("start-btn");
const leaderboardList = document.getElementById("leaderboard-list");
const usernameInput = document.getElementById("username");
const exitBtn = document.getElementById("exit-btn");
const explanationDiv = document.getElementById("explanation");
const explanationText = document.getElementById("explanation-text");
const nextBtn = document.getElementById("next-btn");

startBtn.addEventListener("click", startQuiz);
exitBtn.addEventListener("click", exitQuiz);
nextBtn.addEventListener("click", loadNextQuestion);

function startQuiz() {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("user-input").style.display = "none";
    startBtn.style.display = "none";
    exitBtn.style.display = "none";
    explanationDiv.style.display = "none";
    nextBtn.style.display = "none";
    score = 0;
    timeLeft = 60;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    shuffledQuestions = shuffledQuestions.slice(0, 10);
    loadQuestion();
    updateTimer();
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    } else {
        timeLeft--;
    }
}

function loadQuestion() {
    if (shuffledQuestions.length === 0) {
        endQuiz();
        return;
    }
    explanationDiv.style.display = "none"; // Hide explanation
    nextBtn.style.display = "none";
    const question = shuffledQuestions.pop();
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.addEventListener("click", () => {
            if (option === question.answer) {
                score++;
                scoreElement.textContent = score;
                button.classList.add("correct");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            } else {
                button.classList.add("wrong");
                showExplanation(question.explanation);
                nextBtn.style.display = "block";
            }
            // Disable all options after selecting one
            document.querySelectorAll('.option').forEach(button => button.disabled = true);
        });
        optionsElement.appendChild(button);
    });
}

function showExplanation(explanation) {
    explanationDiv.style.display = "block";
    explanationText.textContent = explanation;
}

function loadNextQuestion() {
    explanationDiv.style.display = "none";
    loadQuestion();
}

function endQuiz() {
    questionElement.textContent = "Quiz Over!";
    optionsElement.innerHTML = "";
    clearInterval(timer);
    document.getElementById("user-input").style.display = "block";
    exitBtn.style.display = "inline-block";
    nextBtn.style.display = "none"; // Hide the Next button
    updateLeaderboard(usernameInput.value.trim(), score);
}

function updateLeaderboard(username, score) {
    let leaderboard = localStorage.getItem("leaderboard");
    leaderboard = leaderboard ? JSON.parse(leaderboard) : [];
    leaderboard.push({ username, score });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard = leaderboard.slice(0, 5); // Keep only top 5 scores
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    leaderboardList.innerHTML = "";
    leaderboard.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = `#${index + 1}: ${entry.username} - ${entry.score}`;
        leaderboardList.appendChild(li);
    });
}

  const leftEye = document.querySelector(".eye-left");
  const rightEye = document.querySelector(".eye-right");
  const mouth = document.querySelector(".mouth");

  nextBtn.addEventListener("click", () => {
    // Blink eyes
    setTimeout(() => {
      leftEye.style.transform = "scaleY(0)";
      rightEye.style.transform = "scaleY(0)";
    }, 100);

    setTimeout(() => {
      leftEye.style.transform = "scaleY(1)";
      rightEye.style.transform = "scaleY(1)";
    }, 500);

    // Talk mouth
    mouth.style.transform = "translateY(5px)";
    setTimeout(() => {
      mouth.style.transform = "translateY(0)";
    }, 500);
  });

function exitQuiz() {
    location.reload();
}
