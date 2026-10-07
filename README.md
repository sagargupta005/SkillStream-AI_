# SkillStream AI

**An interactive learning companion designed for the TV experience.**

SkillStream AI is a TV-friendly learning application that provides a simple and engaging learning flow:

**Home → Topic Selection → Lesson → Quiz → Progress**

Learners can choose a topic, read a short lesson, take a quiz, and view their learning progress.

## Features

* TV-friendly user interface
* Large buttons and readable text
* Topic selection
* Interactive lessons
* Quick quizzes
* Immediate quiz feedback
* Score tracking
* Completed-topic tracking
* Simple navigation designed for a TV environment

## Available Topics

The current version includes:

* Python
* Java
* Artificial Intelligence

## Technology Stack

* **HTML** — Application structure
* **CSS** — TV-oriented interface and responsive layout
* **JavaScript** — Navigation, lessons, quiz logic, scoring, and progress
* **Kotlin** — Android application wrapper
* **Android Studio** — Application development and packaging
* **WebView** — Loads the local web application inside the Android application

## Project Structure

```text
SkillStream-AI/
├── app/
│   └── src/
│       └── main/
│           ├── assets/
│           │   ├── index.html
│           │   ├── style.css
│           │   └── app.js
│           ├── java/
│           │   └── com/skillstream/ai/
│           │       └── MainActivity.kt
│           └── AndroidManifest.xml
├── gradle/
├── build.gradle.kts
├── settings.gradle.kts
├── gradlew
├── gradlew.bat
└── README.md
```

## How It Works

1. Open SkillStream AI.
2. Select **Start Learning**.
3. Choose a learning topic.
4. Read the lesson.
5. Start the quiz.
6. Select an answer.
7. View the quiz score and completed topic.

## Running the Project

### Android Studio

1. Clone or download this repository.
2. Open the project in Android Studio.
3. Allow Gradle to synchronize.
4. Build the application.
5. Install the generated APK on a compatible Android-based device or emulator.

### Web Version

The core learning interface is implemented using HTML, CSS, and JavaScript and can also be opened directly in a web browser for development and demonstration.

## Current Implementation

The current version uses locally stored learning content and quiz logic. It does not currently require a backend or external AI service.

The Android version packages the web-based learning interface using an Android WebView.

## Future Improvements

Future versions can include:

* AI-generated personalized lessons
* AI-powered quiz generation
* Voice interaction
* Personalized learning recommendations
* Cloud-based progress synchronization
* More learning topics
* Deeper Fire TV integration
* Testing and optimization on physical Fire TV hardware

## Hackathon

**Amazon Developer Hackathon 2026**

Project: **SkillStream AI**

Track: **Fire TV**

## Demo

A project demonstration video is available on the project's Devpost submission.

## License

This project is created as a hackathon project.
