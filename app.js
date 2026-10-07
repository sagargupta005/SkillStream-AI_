const screens = {
  home: document.getElementById("home"),
  topics: document.getElementById("topics"),
  lesson: document.getElementById("lesson"),
  quiz: document.getElementById("quiz"),
  progress: document.getElementById("progress")
};

const topics = {
  Python: {
    lesson: "Python is a beginner-friendly programming language used for automation, data science, AI, and web development.",
    question: "Which symbol is used to create a comment in Python?",
    options: ["//", "#", "<!--", "/*"],
    answer: 1
  },
  Java: {
    lesson: "Java is an object-oriented programming language widely used for applications, Android development, and enterprise software.",
    question: "Which keyword is used to create a class in Java?",
    options: ["function", "define", "class", "object"],
    answer: 2
  },
  AI: {
    lesson: "Artificial Intelligence allows computers to perform tasks that normally require human intelligence, such as learning and decision making.",
    question: "What does AI stand for?",
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

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    screen.classList.remove("active");
  });

  screens[name].classList.add("active");

  // Put focus on the first interactive element.
  const firstButton = screens[name].querySelector("button");
  if (firstButton) {
    setTimeout(() => firstButton.focus(), 50);
  }
}

function startLearning() {
  showScreen("topics");
}

function openTopic(topic) {
  selectedTopic = topic;

  document.getElementById("lessonTitle").textContent =
    `${topic} Lesson`;

  document.getElementById("lessonText").textContent =
    topics[topic].lesson;

  showScreen("lesson");
}

function startQuiz() {
  const data = topics[selectedTopic];

  document.getElementById("question").textContent =
    data.question;

  const optionsContainer =
    document.getElementById("options");

  optionsContainer.innerHTML = "";

  data.options.forEach((option, index) => {
    const button = document.createElement("button");

    button.textContent = option;
    button.className = "quiz-option";

    button.addEventListener("click", () => {
      if (index === data.answer) {
        score++;
        alert("Correct! 🎉");
      } else {
        alert("Not quite. Keep learning!");
      }

      showProgress();
    });

    optionsContainer.appendChild(button);
  });

  showScreen("quiz");
}

function showProgress() {
  document.getElementById("score").textContent =
    `Quiz Score: ${score}`;

  document.getElementById("topicCompleted").textContent =
    `Completed Topic: ${selectedTopic}`;

  showScreen("progress");
}

function goHome() {
  showScreen("home");
}

// Keyboard / TV remote support
document.addEventListener("keydown", event => {
  if (event.key === "Escape" || event.key === "Backspace") {
    goHome();
  }
});