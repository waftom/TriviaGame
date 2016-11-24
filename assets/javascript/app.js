var questions = [{
      q: "Inside which HTML element do we put the JavaScript?",
      o: [
          "<js>",
          "<javascript>",
          "<scripting>",
          "<script>"
      ],
      a: 'D',
      u: ''
  }, {
      q: "How do you write 'Hello World' in an alert box?",
      o: [
          "msg(\"Hello World\");",
          "alertBox(\"Hello World\");",
          "alert(\"Hello World\");",
          "msgBox(\"Hello World\");"
      ],
      a: 'C',
      u: ''
  }, {
      q: "How to write an IF statement in JavaScript?",
      o: [
          "if i == 5 then",
          "if (i == 5)",
          "if i = 5",
          "if i = 5 then"
      ],
      a: 'B',
      u: ''
  }, {
      q: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
      o: [
          "if i <> 5",
          "if (i <> 5)",
          "if (i != 5)",
          "if i =! 5 then"
      ],
      a: 'C',
      u: ''
  }, {
      q: "How does a FOR loop start?",
      o: [
          "for (i = 0; i <= 5)",
          "for (i = 0; i <= 5; i++)",
          "for i = 1 to 5",
          "for (i <= 5; i++)"
      ],
      a: 'B',
      u: ''
  }
];

$('#restart').hide();

var a = 1;

var num = -1;
var rights = 0;
var wrongs = 0;

var counter;
var counter_answer;

$(document).ready(function() {
  $('#start').click(function() {
      addQuestion();
      $(this).hide();
      $('#box').css('visibility', 'visible');
  });

  $('.opt').click(function() {
      questions[num].u = $(this).attr('opt');
      if($(this).attr('opt') === questions[num].a) {
          $('#result').html("Right answer!");
          $('#result').show();
          counter_answer = setInterval(addQuestion, 2000);
          clearInterval(counter);
          rights++;
      } else {
          $('#result').html("Wrong answer! The right one is: (" + questions[num].a + ")<br />Continue with the next question.");
          $('#result').show();
          counter_answer = setInterval(addQuestion, 2000);
          clearInterval(counter);
          wrongs++;
      }
  });

  $('#restart').click(function() {
      num = -1;
      rights = 0;
      wrongs = 0;
      clearInterval(counter);
      clearInterval(counter_answer);
      addQuestion();
      $(this).hide();
  });
});

function addQuestion() {
  clearInterval(counter_answer);
  $('#result').hide();

  num++;
  if(num < questions.length) {
      $('#question').text(questions[num].q);
      $('#opt1').text("A) " + questions[num].o[0]);
      $('#opt2').text("B) " + questions[num].o[1]);
      $('#opt3').text("C) " + questions[num].o[2]);
      $('#opt4').text("D) " + questions[num].o[3]);

      counter = setInterval(timeUp, 10000);
  } else {
      $('#result').html("Game Over<br />Right answers: " + rights + "<br />Wrong answers: " + wrongs);
      $('#result').show();
      $('#restart').show();
  }
}

function timeUp() {
  $('#result').html("Time Up! The right answer is: (" + questions[num].a + ")<br />Continue with the next question.");
  $('#result').show();
  counter_answer = setInterval(addQuestion, 2000);
  clearInterval(counter);
  wrongs++;
}
