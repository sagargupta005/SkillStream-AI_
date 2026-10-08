const screens = {
    home: document.getElementById("home"),
    topics: document.getElementById("topics"),
    lesson: document.getElementById("lesson"),
    quiz: document.getElementById("quiz"),
    progress: document.getElementById("progress")
};

const topics = {

    Python: {
        lesson:
            "Python is a beginner-friendly programming language used for automation, data science, AI, and web development.",

        question:
            "Which symbol is used to create a comment in Python?",

        options: [
            "//",
            "#",
            "<!--",
            "/*"
        ],

        answer: 1
    },

    Java: {
        lesson:
            "Java is an object-oriented programming language widely used for applications, Android development, and enterprise software.",

        question:
            "Which keyword is used to create a class in Java?",

        options: [
            "function",
            "define",
            "class",
            "object"
        ],

        answer: 2
    },

    AI: {
        lesson:
            "Artificial Intelligence allows computers to perform tasks that normally require human intelligence, such as learning and decision making.",

        question:
            "What does AI stand for?",

        options: [
            "Automated Internet",
            "Artificial Intelligence",
            "Advanced Interface",
            "Applied Information"
        ],

        answer: 1
    }
};

let selectedTopic = null;
let score = 0;


/* SCREEN MANAGEMENT */

function showScreen(name) {

    Object.values(screens).forEach(screen => {
        screen.classList.remove("active");
    });

    screens[name].classList.add("active");

    focusFirstElement(screens[name]);
}


function focusFirstElement(container) {

    const firstButton =
        container.querySelector("button");

    if (firstButton) {

        setTimeout(() => {
            firstButton.focus();
        }, 100);
    }
}


/* HOME */

function startLearning() {

    showScreen("topics");
}


/* TOPIC */

function openTopic(topic) {

    selectedTopic = topic;

    document.getElementById("lessonTitle").textContent =
        `${topic} Lesson`;

    document.getElementById("lessonText").textContent =
        topics[topic].lesson;

    showScreen("lesson");
}


/* QUIZ */

function startQuiz() {

    const data = topics[selectedTopic];

    document.getElementById("question").textContent =
        data.question;

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    data.options.forEach((option, index) => {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.className =
            "quiz-option focusable";

        button.addEventListener("click", () => {

            if (index === data.answer) {

                score++;

                alert("Correct! Great job!");

            } else {

                alert("Not quite. Keep learning!");

            }

            showProgress();
        });

        optionsContainer.appendChild(button);
    });

    showScreen("quiz");
}


/* PROGRESS */

function showProgress() {

    document.getElementById("score").textContent =
        score;

    document.getElementById("topicCompleted").textContent =
        selectedTopic;

    showScreen("progress");
}


/* HOME */

function goHome() {

    showScreen("home");
}


/* KEYBOARD / TV REMOTE SUPPORT */

document.addEventListener("keydown", event => {

    const activeScreen =
        document.querySelector(".screen.active");

    if (!activeScreen) return;

    const buttons =
        Array.from(
            activeScreen.querySelectorAll(
                "button:not([disabled])"
            )
        );

    const currentIndex =
        buttons.indexOf(document.activeElement);


    /* SELECT */

    if (
        event.key === "Enter" ||
        event.key === " "
    ) {

        if (
            document.activeElement &&
            document.activeElement.tagName === "BUTTON"
        ) {

            event.preventDefault();

            document.activeElement.click();
        }

        return;
    }


    /* BACK */

    if (
        event.key === "Escape" ||
        event.key === "Backspace"
    ) {

        event.preventDefault();

        if (
            activeScreen.id === "topics"
        ) {

            goHome();

        } else if (
            activeScreen.id === "lesson"
        ) {

            showScreen("topics");

        } else if (
            activeScreen.id === "quiz"
        ) {

            showScreen("lesson");

        } else if (
            activeScreen.id === "progress"
        ) {

            goHome();

        } else {

            goHome();
        }

        return;
    }


    /* ARROW NAVIGATION */

    if (buttons.length === 0) return;

    let nextIndex =
        currentIndex >= 0
            ? currentIndex
            : 0;


    if (event.key === "ArrowRight") {

        event.preventDefault();

        nextIndex =
            Math.min(
                currentIndex + 1,
                buttons.length - 1
            );
    }


    if (event.key === "ArrowDown") {

        event.preventDefault();

        nextIndex =
            Math.min(
                currentIndex + 1,
                buttons.length - 1
            );
    }


    if (event.key === "ArrowLeft") {

        event.preventDefault();

        nextIndex =
            Math.max(
                currentIndex - 1,
                0
            );
    }


    if (event.key === "ArrowUp") {

        event.preventDefault();

        nextIndex =
            Math.max(
                currentIndex - 1,
                0
            );
    }


    if (
        document.activeElement !==
        buttons[nextIndex]
    ) {

        buttons[nextIndex].focus();
    }

});
