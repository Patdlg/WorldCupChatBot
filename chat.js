var questions = [
  'Who are you rooting for in the World Cup?',
  'Who is your favorite player?',
  'How old are you?',
  'Who do you think will win the World Cup?',
  'It was nice talking to you about the World Cup, good luck on your predictions :)'
];

var num = 0;
var output = document.querySelector("#results");
output.innerHTML = questions[0];
var inputBox = document.querySelector("#ans");

function showResponse() {
  var input = inputBox.value;
  if (inputBox.value == "") {

  } else {
    if (num == 0) {
      output.innerHTML = `${input} , I heard is a cool country!`

      inputBox.value = "";
      ++num;
      setTimeout(changeQuestion, 3000);
    } else if (num == 1) {
      output.innerHTML = `${input} is good, I look forward to seeing him perfom well!`;
      inputBox.value = "";
      ++num;
      setTimeout(changeQuestion, 3000);

    } else if (num == 2) {
      output.innerHTML = `That means you were born in ${2018 - input}!`;
      inputBox.value = "";
      ++num;
      setTimeout(changeQuestion, 3000);

    } else if (num == 3) {
      output.innerHTML = `${input} is a good team. Can't wait to see what happens.`;
      inputBox.value = "";
      ++num;
      setTimeout(changeQuestion, 3000);
    }
  }
}

function changeQuestion() {
  output.innerHTML = questions[num];
  if (num == 4) {
    inputBox.style.display == "none";
  }
}

$(document).on('keypress', function (e) {
  if (e.which == 13) {
    showResponse();
  }
});
