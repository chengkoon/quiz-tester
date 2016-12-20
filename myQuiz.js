/*
Create your quiz in this file.
Note the tests will only work if you name your functions accordingly based on the instructions.
*/

var question1 = {
  prompt: "What is 10 + 10?",
  options: [10, 20, 30, 50],
  correctAnswerIndex: 1
}

var question2 = {
  prompt: "Who is Moon Mayor?",
  options: ["Donald Trump", "Obama", "Steve Geluso", "Rachel Lim"],
  correctAnswerIndex: 2
}

var quiz = {
  questions: [question1, question2], // question1 and question2 were defined above!
  isGameOver: false,
  currentQuestion: 0,
  player1Points: 0,
  player2Points: 0
}

// numberOfQuestions
// It should return an integer that is the number of questions in a game
var numberOfQuestions = function() {
  return quiz.questions.length;
}

//currentQuestion()
//It should return an integer that is the zero-based index of the current question in the quiz
var currentQuestion = function() {
  return quiz.currentQuestion;
}

//correctAnswer()
//It should return an integer that is the zero-based index the correct answer for the current question
var correctAnswer = function() {
  return quiz.questions[currentQuestion()].correctAnswerIndex;
}

//numberOfAnswers()
//It should return an integer that is the number of choices for the current question
var numberOfAnswers = function() {
  return quiz.questions[currentQuestion()].options.length;
}

var currentPlayer = 1;

//playTurn(choice)
//It should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
var playTurn = function(choice) {
  if (isGameOver() === true) {
    whoWon();
  }
  else if (choice === correctAnswer()) {
    if (currentPlayer === 1) {
      quiz.player1Points++;
      currentPlayer = 2;
    }
    else {
      quiz.player2Points++;
      currentPlayer = 1;
    }
    quiz.currentQuestion++;
    return true;
  }
  else {
    quiz.currentQuestion++;
    return false;
  }
}

//isGameOver()
//It should return a true or false if the quiz is over.
var isGameOver = function() {
  if (currentQuestion() === numberOfQuestions()) {
    quiz.isGameOver = true;
  }
  return quiz.isGameOver;
}

//whoWon()
//It should return 0 if the game is not yet finished. Else it should return either 1 or 2 depending on which player won. It should return 3 if the game is a draw.
var whoWon = function() {
  if (isGameOver() !== true) {
    return 0;
  }
  else if (quiz.player1Points > quiz.player2Points) {
    return 1;
  }
  else if (quiz.player2Points > quiz.player1Points) {
    return 2;
  }
  else if (quiz.player1Points === quiz.player2Points) {
    return 3;
  }
}

//restart()
//It should restart the game so it can be played again.
var restart = function() {
  quiz.isGameOver = false;
  quiz.player1Points = 0;
  quiz.player2Points = 0;
  quiz.currentQuestion = 0;
}
