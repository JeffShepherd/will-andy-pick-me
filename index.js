//
var formInput = document.querySelector('.form-input');
var getAnswerButton = document.querySelector('.get-answer-button');
var clearButton = document.querySelector('.clear-button')
var eightballImage = document.querySelector('.eight-ball-image')
var results = document.querySelector('.result-container')
var question = document.querySelector('.question')
var answer = document.querySelector('.answer')

getAnswerButton.addEventListener('click', displayAnswer);
clearButton.addEventListener('click', resetLeftContainer)



function displayAnswer(event) {
  event.preventDefault();
  if (formInput.value != "") {
    question.innerText = `"${formInput.value}"`;
    answer.innerText = getRandomAnswer();
    eightballImage.classList.add('hidden');
    results.classList.remove('hidden');
    clearButton.classList.add('clear-button-active');
    formInput.value = "";
  } else {
    alert('Please ask a question');
  }
}

function resetLeftContainer() {
  clearButton.classList.remove('clear-button-active');
  eightballImage.classList.remove('hidden');
  results.classList.add('hidden');
}



function getRandomAnswer() {
  return answers[Math.floor(Math.random() * answers.length)];
}


var answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
]
