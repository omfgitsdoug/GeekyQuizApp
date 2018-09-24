'use strict';

let answerValue = 4.2.toFixed(2);
let questionNum = 1;
let totalScore = 0;


function questionTemplate(correctAnswers, question, questionsAnswered) {
  return `
  <section class="questionContainer" id="questionContainer">  
    <form>
      <fieldset>
        <legend id="question">${question.text}</legend>
        <label for="answer1">
          <input type="radio" class="answer" name="answer" id="answer1" value="${question.ans1}" checked required/>
          <span>${question.ans1}</span>
        </label>
  
        <label for="answer2">
          <input type="radio" class="answer" name="answer" id="answer2" value="${question.ans2}" />
          <span>${question.ans2}</span>
        </label>
  
        <label for="answer3">
          <input type="radio" class="answer" name="answer" id="answer3"  value="${question.ans3}" />
         <span>${question.ans3}</span>
        </label>
  
        <label for="answer4">
          <input type="radio" class="answer" name="answer" id="answer4"  value="${question.ans4}" />
          <span>${question.ans4}</span>
        </label>
      </fieldset>  
    </form>
    <button type="button" class="submitAnswer" id="js-submitAnswer">Submit</button>
    </section>
    `
}


function handleStartButton() {
  $('#beginQuiz').click(function (event) {
    $('#startSplash').remove();
    nextQuestion();
  });
}

function handleSubmitButton() {
  $('#container').on('click', '#js-submitAnswer', function (event) {
    event.preventDefault()

    const answer = $('input:checked').siblings('span');

    const userIsCorrect = checkUserAnswer(answer);
    if (userIsCorrect) {
      generateCorrectFeedback();
    } else {
      generateIncorrectFeedback();
    }
  });
}

function handleNextButton() {
  $('#container').on('click', '#js-nextQuestion', function (event) {

    if (questionNum === 10) {
      createResultsPage(totalScore);
    } else {
      questionNum++;
      nextQuestion();
    }
  });
}

function handleRestartButton() {
  $('#container').on('click', '#restartQuiz', function (event) {

    questionNum = 1;

    totalScore = 0;

    nextQuestion();
    resetScore();
  });
}

function resetScore() {
  $('.totalScore').text((totalScore));
}

function nextQuestion() {

  const question = quizQuestions[questionNum - 1];

  const questionsAnswered = questionNum - 1;

  $('.questionNum').text(questionNum);

  $('#container').html(questionTemplate(totalScore, question, questionsAnswered));

}

function checkUserAnswer(answer) {
  if (answer.text() === correctAnswer[questionNum - 1]) {
    return true;
  } else {
    return false;
  }
}


function generateCorrectFeedback() {
  changeScore();
  $('#container').html(correctFeedback(questionNum));
}

function correctFeedback(questionNum) {
  return `
  <section class="feedbackPage" role="main">
    <img src="${correctImage[questionNum - 1]}" alt="${correctImageAlt[questionNum-1]}">
    <h2>Correct! Your current score is ${(totalScore * answerValue).toFixed(1)}!</h2>
    <button class="nextQuestion" id="js-nextQuestion">Next</button>
  </section>
`;
}

function generateIncorrectFeedback() {
  $('#container').html(incorrectFeedbackTemplate(questionNum));
}

function incorrectFeedbackTemplate(questionNum) {
  return `
    <section class="feedbackPage">
      <img src="${wrongImage[questionNum - 1]}" alt="${wrongImageAlt[questionNum-1]}">
      <h2>Incorrect! <span class="answerText">${correctAnswer[questionNum - 1]}</span> was the answer you were looking for!</h2>
      <button class="nextQuestion"  id="js-nextQuestion">Next</button>
    </section>
`;
}

function changeScore() {
  totalScore++;
  $('.totalScore').text((totalScore * answerValue).toFixed(1));
}

function createResultsPage(totalScore) {
  if (totalScore === 10) {
    $('#container').html(`
    <section class="finalPage" id="js-finalPage">
    <img src="https://media.giphy.com/media/l1KVb2dUcmuGG4tby/giphy.gif" alt="Austin Powers saying 'Nerd Alert' and laughing">
      <h2>Final Score: 42! Congrats! You're the biggest geek on the block!</h2>
      <button class="start" id="restartQuiz">Play Again?</button>
    </section>
  `);
  } else if (totalScore <=9 && totalScore >= 5) {
    $('#container').html(`
    <section class="finalPage" id="js-finalPage">
    <img src="https://media.giphy.com/media/A9KfKenpqNDfa/giphy.gif" alt="Jock screaming 'Nerds!'">
      <h2>Final Score: ${(totalScore * answerValue).toFixed(1)}! Not bad! Some might call you a casual nerd.</h2>
      <button class="start" id="restartQuiz">Play Again?</button>
    </section>
    `);
  } else {
    $('#container').html(`
    <section class="finalPage" id="js-finalPage">
    <img src="https://media.giphy.com/media/xT0GqfvuVpNqEf3z2w/giphy.gif" alt="Matthew Brodrick making a displeased face">
      <h2>Final Score: ${(totalScore * answerValue).toFixed(1)}... Maybe you're not as much as a geek as you thought you were...</h2>
      <button class="start" id="restartQuiz">Play Again?</button>
    </section>
    `);
  }
}


function handleButtons() {
  handleStartButton();
  handleSubmitButton();
  handleNextButton();
  handleRestartButton();
}

handleButtons();