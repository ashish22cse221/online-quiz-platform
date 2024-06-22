const questions = [
    {
        question: "What is the purpose of the 'volatile' keyword in C?",
        options: [
            "To declare a variable that can be accessed by multiple threads",
            "To specify that a variable's value may change at any time without any action being taken by the code",
            "To optimize code execution by storing variables in CPU registers",
            "To declare a variable that cannot be modified after initialization"
        ],
        answer: "To specify that a variable's value may change at any time without any action being taken by the code",
        explanation: "The 'volatile' keyword is used to inform the compiler that the value of a variable may change at any time without any action being taken by the code, typically due to hardware interrupts or asynchronous signals."
    },
    {
        question: "What is the purpose of the 'inline' keyword in C?",
        options: [
            "To declare a function that will be inlined by the compiler",
            "To declare a function as a member of a class",
            "To include header files inline within the source file",
            "To specify that a function should not be inlined by the compiler"
        ],
        answer: "To declare a function that will be inlined by the compiler",
        explanation: "The 'inline' keyword is used to suggest to the compiler that a function should be expanded inline at the point of call, rather than performing a function call."
    },
    {
        question: "What is function pointer in C?",
        options: [
            "A pointer variable that points to a function",
            "A function that returns a pointer",
            "A function that accepts a pointer as an argument",
            "A pointer that can be used to access global variables"
        ],
        answer: "A pointer variable that points to a function",
        explanation: "A function pointer in C is a pointer variable that stores the address of a function. It allows functions to be passed as arguments to other functions or stored in data structures."
    },
    {
        question: "What is a structure in C?",
        options: [
            "A data type that represents a single value",
            "A data type that represents a collection of variables",
            "A function that operates on multiple variables",
            "A variable that can store multiple values"
        ],
        answer: "A data type that represents a collection of variables",
        explanation: "A structure in C is a composite data type that allows you to group variables of different data types under a single name. It enables you to create complex data structures."
    },
    {
        question: "What is the purpose of 'enum' in C?",
        options: [
            "To define a set of named constants",
            "To declare a function that returns an enumerated value",
            "To define a structure with multiple members",
            "To declare a variable with enumerated data type"
        ],
        answer: "To define a set of named constants",
        explanation: "The 'enum' keyword in C is used to define a set of named constants, known as an enumeration. It provides a way to create symbolic names for integer values, making the code more readable and maintainable."
    },
    {
        question: "What is a union in C?",
        options: [
            "A data structure that holds only one value at a time",
            "A data structure that holds multiple values simultaneously",
            "A data structure that stores variables of different data types",
            "A data structure that stores variables of the same data type"
        ],
        answer: "A data structure that holds only one value at a time",
        explanation: "A union in C is a special data type that allows you to store different data types in the same memory location. However, only one member of the union can hold a value at any given time."
    },
    {
        question: "What is the purpose of 'extern' keyword in C?",
        options: [
            "To declare a variable with external linkage",
            "To declare a variable with internal linkage",
            "To specify the scope of a variable",
            "To include a header file in the source file"
        ],
        answer: "To declare a variable with external linkage",
        explanation: "The 'extern' keyword in C is used to declare a variable or function that is defined in another source file or is available externally. It specifies that the variable or function has external linkage."
    },
    {
        question: "What is recursion in C?",
        options: [
            "A function that calls itself",
            "A function that returns a pointer",
            "A function that accepts a pointer as an argument",
            "A pointer that can be used to access global variables"
        ],
        answer: "A function that calls itself",
        explanation: "Recursion in C is a programming technique in which a function calls itself directly or indirectly. It is used to solve problems that can be broken down into smaller, similar subproblems."
    },
    {
        question: "What is a macro in C?",
        options: [
            "A sequence of instructions that is repeated multiple times in a program",
            "A special type of function that can accept variable number of arguments",
            "A symbolic name that represents a piece of code",
            "A type of comment that is ignored by the compiler"
        ],
        answer: "A symbolic name that represents a piece of code",
        explanation: "A macro in C is a symbolic name that represents a piece of code. It is defined using the '#define' directive and can be used to define constants, perform text replacement, and create shortcuts for complex code."
    },
    {
        question: "What is the purpose of 'const' qualifier in function declarations?",
        options: [
            "To specify that the function does not modify its arguments",
            "To specify that the function is constant and cannot be modified",
            "To specify that the function returns a constant value",
            "To specify that the function accepts a constant argument"
        ],
        answer: "To specify that the function does not modify its arguments",
        explanation: "The 'const' qualifier in function declarations is used to specify that the function does not modify its arguments. It allows the compiler to perform optimizations and enforce immutability."
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
