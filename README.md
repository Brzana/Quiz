# Quiz App

A simple interactive quiz application built with React. Users can test their knowledge by answering a series of questions, track their progress, and view their final score.

## Features

- Multiple-choice questions
- Progress tracking
- Score calculation
- Responsive design
- Error handling and loading states

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Brzana/Quiz.git
   ```
2. Navigate to the project directory:
   ```sh
   cd quiz
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the App

To start the development server:

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the app for production:

```sh
npm run build
```

The optimized build will be in the `build/` folder.

## Project Structure

```
quiz/
├── data/
│   └── questions.json         # Quiz questions data
├── public/
│   └── ...                   # Static assets
├── src/
│   ├── components/           # React components
│   └── index.js              # App entry point
├── package.json              # Project metadata and scripts
└── README.md                 # Project documentation
```

## Acknowledgements

This project was created with the help of Jonas Schmedtmann's course.
