
const questions = [
// First set of questions
{
question: "What does the acronym 'C' stand for?",
options: ["Common", "Compact", "Computer", "Central"],
answer: "Computer",
explanation: "C stands for Computer."
},
{
question: "Which of the following is NOT a basic data type in C?",
options: ["int", "float", "char", "string"],
answer: "string",
explanation: "string is not a basic data type in C."
},
{
question: "What symbol is used to indicate the end of a statement in C?",
options: [";", ":", ".", ","],
answer: ";",
explanation: "The semicolon (;) is used to indicate the end of a statement in C."
},
{
question: "Which function is used to print output in C?",
options: ["printf()", "scanf()", "puts()", "print()"],
answer: "printf()",
explanation: "printf() function is used to print output in C."
},
{
question: "In C programming, what symbol is used for a single-line comment?",
options: ["//", "/*", "#", ";"],
answer: "//",
explanation: "The double forward slash (//) is used for single-line comments in C."
},
{
question: "Which of the following is NOT a valid variable name in C?",
options: ["myVar", "_num", "123var", "Var123"],
answer: "123var",
explanation: "123var is not a valid variable name in C because it starts with a number."
},
{
question: "What is the symbol for the modulus operator in C?",
options: ["%", "/", "*", "^"],
answer: "%",
explanation: "The percent sign (%) is used as the modulus operator in C."
},
{
question: "Which header file is required to use functions like printf() and scanf() in C?",
options: ["stdio.h", "math.h", "string.h", "ctype.h"],
answer: "stdio.h",
explanation: "The stdio.h header file is required to use functions like printf() and scanf() in C."
},
{
question: "What symbol is used to define a constant in C?",
options: ["#", "const", "define", "="],
answer: "const",
explanation: "The 'const' keyword is used to define constants in C."
},
{
question: "Which of the following loops is used for executing a block of code repeatedly until a condition is false?",
options: ["for loop", "while loop", "do-while loop", "switch loop"],
answer: "while loop",
explanation: "The 'while loop' is used for executing a block of code repeatedly until a condition is false."
},
{
question: "Which operator is used to access the value stored in a variable's address in C?",
options: ["*", "&", ".", "->"],
answer: "&",
explanation: "The ampersand (&) operator is used to access the value stored in a variable's address in C."
},
{
question: "What is the result of the expression '5 + 3 * 2' in C?",
options: ["16", "11", "13", "10"],
answer: "11",
explanation: "In C, multiplication (*) takes precedence over addition (+), so '5 + 3 * 2' equals 11."
},
{
question: "Which function is used to read input from the user in C?",
options: ["scanf()", "printf()", "gets()", "puts()"],
answer: "scanf()",
explanation: "The 'scanf()' function is used to read input from the user in C."
},
{
question: "What is the purpose of the 'return' statement in a function?",
options: ["To print output", "To declare variables", "To terminate the program", "To return a value"],
answer: "To return a value",
explanation: "The 'return' statement is used to return a value from a function in C."
},
{
question: "Which keyword is used to declare a function in C?",
options: ["method", "define", "function", "void"],
answer: "void",
explanation: "The 'void' keyword is used to declare a function in C."
},
{
question: "What is the size of 'int' data type in C?",
options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
answer: "4 bytes",
explanation: "The 'int' data type typically occupies 4 bytes of memory in C on most systems."
},
{
question: "Which operator is used for logical AND in C?",
options: ["&&", "||", "!", "&"],
answer: "&&",
explanation: "The '&&' operator is used for logical AND in C."
},
{
question: "What is the output of the expression 'sizeof(int)' in C?",
options: ["1", "2", "4", "8"],
answer: "4",
explanation: "The 'sizeof(int)' expression returns the size of the 'int' data type in bytes, which is typically 4 bytes in C."
},
{
question: "Which operator is used to perform addition in C?",
options: ["+", "-", "*", "/"],
answer: "+",
explanation: "The plus sign (+) is used to perform addition in C."
},
{
question: "What is the purpose of the 'break' statement in a switch-case statement?",
options: ["To end the switch-case statement", "To continue to the next case", "To exit the program", "To print output"],
answer: "To end the switch-case statement",
explanation: "The 'break' statement is used to end the execution of a switch-case statement."
},
{
question: "Which of the following is NOT a relational operator in C?",
options: ["==", "!=", "<>", ">="],
answer: "<>",
explanation: "'<>' is not a relational operator in C. Use '!=' for 'not equal to'."
},
{
question: "What is the purpose of the 'do-while' loop in C?",
options: ["To execute a block of code repeatedly until a condition is false", "To execute a block of code a specific number of times", "To define a function", "To declare variables"],
answer: "To execute a block of code repeatedly until a condition is false",
explanation: "The 'do-while' loop is used to execute a block of code repeatedly until a condition becomes false, even if the condition is false initially ."
},
{
question: "Which data type is used to store floating-point numbers in C?",
options: ["int", "float", "char", "double"],
answer: "float",
explanation: "The 'float' data type is used to store floating-point numbers (real numbers) in C."
},
{
question: "What is the output of the expression '10 / 3.0' in C?",
options: ["3", "3.33", "3.0", "3.333"],
answer: "3.33",
explanation: "When one or both operands of the division operation are floating-point numbers, C performs floating-point division, so '10 / 3.0' equals approximately 3.33."
},
{
question: "Which keyword is used to define a constant in C?",
options: ["constant", "define", "const", "var"],
answer: "const",
explanation: "The 'const' keyword is used to define constants in C."
},
{
question: "What is the purpose of the 'switch' statement in C?",
options: ["To execute a block of code repeatedly", "To define a function", "To execute one of many different blocks of code", "To perform arithmetic operations"],
answer: "To execute one of many different blocks of code",
explanation: "The 'switch' statement is used to execute one of many different blocks of code based on the value of a variable or expression."
},
{
question: "Which operator is used to perform multiplication in C?",
options: ["+", "-", "*", "/"],
answer: "*",
explanation: "The asterisk (*) is used to perform multiplication in C."
},
{
question: "What is the purpose of the 'break' statement in a loop?",
options: ["To continue to the next iteration of the loop", "To terminate the loop", "To print output", "To skip the current iteration and proceed to the next"],
answer: "To terminate the loop",
explanation: "The 'break' statement is used to exit the loop immediately and continue with the code following the loop."
},
{
question: "Which operator is used to perform subtraction in C?",
options: ["+", "-", "*", "/"],
answer: "-",
explanation: "The minus sign (-) is used to perform subtraction in C."
},
{
question: "What is the purpose of the 'if' statement in C?",
options: ["To define a function", "To declare variables", "To execute a block of code conditionally", "To perform arithmetic operations"],
answer: "To execute a block of code conditionally",
explanation: "The 'if' statement is used to execute a block of code conditionally based on a specified condition."
},
{
question: "Which of the following is NOT a valid relational operator in C?",
options: ["==", "!=", "<=", ">="],
answer: "<>",
explanation: "'<>' is not a valid relational operator in C. Use '!=' for 'not equal to'."
},
{
question: "What is the purpose of the 'do-while' loop in C?",
options: ["To execute a block of code repeatedly until a condition is false", "To execute a block of code a specific number of times", "To define a function", "To declare variables"],
answer: "To execute a block of code repeatedly until a condition is false",
explanation: "The 'do-while' loop is used to execute a block of code repeatedly until a condition becomes false, even if the condition is false initially."
},
{
question: "Which data type is used to store floating-point numbers in C?",
options: ["int", "float", "char", "double"],
answer: "float",
explanation: "The 'float' data type is used to store floating-point numbers (real numbers) in C."
},
{
question: "What is the output of the expression '10 / 3.0' in C?",
options: ["3", "3.33", "3.0", "3.333"],
answer: "3.33",
explanation: "When one or both operands of the division operation are floating-point numbers, C performs floating-point division, so '10 / 3.0' equals approximately 3.33."
},
{
question: "Which keyword is used to define a constant in C?",
options: ["constant", "define", "const", "var"],
answer: "const",
explanation: "The 'const' keyword is used to define constants in C."
},
{
question: "What is the purpose of the 'switch' statement in C?",
options: ["To execute a block of code repeatedly", "To define a function", "To execute one of many different blocks of code", "To perform arithmetic operations"],
answer: "To execute one of many different blocks of code",
explanation: "The 'switch' statement is used to execute one of many different blocks of code based on the value of a variable or expression."
},
{
question: "Which operator is used to perform multiplication in C?",
options: ["+", "-", "*", "/"],
answer: "*",
explanation: "The asterisk (*) is used to perform multiplication in C."
},
{
question: "What is the purpose of the 'break' statement in a loop?",
options: ["To continue to the next iteration of the loop", "To terminate the loop", "To print output", "To skip the current iteration and proceed to the next"],
answer: "To terminate the loop",
explanation: "The 'break' statement is used to exit the loop immediately and continue with the code following the loop."
},
// Fifth set of questions
{
question: "What is the purpose of the 'else' statement in C?",
options: ["To execute a block of code conditionally", "To declare variables", "To perform arithmetic operations", "To define a function"],
answer: "To execute a block of code conditionally",
explanation: "The 'else' statement is used to execute a block of code when the condition specified in the 'if' statement evaluates to false."
},
{
question: "Which keyword is used to exit from a loop in C?",
options: ["exit", "break", "continue", "return"],
answer: "break",
explanation: "The 'break' keyword is used to exit from a loop prematurely in C."
},
{
question: "What is the purpose of the 'sizeof' operator in C?",
options: ["To find the size of a variable", "To perform arithmetic operations", "To convert data types", "To declare variables"],
answer: "To find the size of a variable",
explanation: "The 'sizeof' operator in C is used to determine the size of a variable or data type in bytes."
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
