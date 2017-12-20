/*** Quiz about Harry Potter, Maze Runner, The Hunger Games, Games of Throne & The Chronciles of Narnia ***/
var novelFacts = [
  	['1. Did Harry puts his name in the Goblet of Fire', 'false'],
    ['2. Did Harry rides on the Hogwarts Express in Harry Potter and the Chamber of Secrets going to school', 'false'],
    ['3. Is the Mave a Code', 'true'],
    ['4. Did Thomas and Minho find the Greiver Hole at the Cliff', 'true'],
    ['5. Did Haymitch win the 50th Hunger Games.', 'true'],
    ['6. Is Rue Katniss sister', 'false'],
    ['7. Did Peter enter the wardrobe first', 'false'],
    ["8. Is Lucy the eldest child", 'false'],
    ['9. Are Daenerys dragons named after dead charatcers', 'true'],
    ['10. Is Maester Amon is blind in real life', 'true']
];
var retryQuizName;
var quizData;
var score;
var highScore = 0;
var round;
var fact;
var truthful;


/*** LAUNCHES THE GAME WITH NEW QUIZ DATA ***/
function launch(quizName) {
  retryQuizName = quizName;
  quizData = eval(quizName);
  score = 0;
  round = 0;
  total = quizData.length*10;

  fact = quizData[round][0];
  truthful = quizData[round][1]

  console.log(round);
  console.log(score);
  console.log(total);
  console.log(fact);
  console.log(truthful);

  $('#card div.ui-content a').removeClass('greenBtn');
  $('#card div.ui-content a').removeClass('redBtn');
  $('#card div.ui-content p').html(fact);
  $("#card").popup("open");
}


/*** SUBMITS A USER RESPONSE ***/
function submit(current) {
  //RIGHT
  if (current.id == truthful) {
    $(current).addClass('greenBtn');
    $("#card").popup("close");
    console.log("User clicked correctly");
    round++;
    score+=10;
    if(score>highScore) {
      highScore=score;
    }
    nextQuestion();
    updateHighScore();
  }
  //WRONG
  else {
    $(current).addClass('redBtn');
    $("#card").popup("close");
    console.log("User clicked inccorect");
    gameOver();
  }
}


/*** OPENS THE NEXT QUESION ***/
function nextQuestion() {
  if (score!=total) {
    fact = quizData[round][0];
    truthful = quizData[round][1]

    console.log(round);
    console.log(score);
    console.log(fact);
    console.log(truthful);

    setTimeout(function () {
      $('#card div.ui-content a').removeClass('greenBtn');
      $('#card div.ui-content p').html(fact);
      $("#card").popup("open")
    }, 600);
  }
  else {
    win();
  }
}


/*** Updates the HighScore ***/
function updateHighScore() {
  $('#trueFalseGames h4 span span').html(highScore);
}

/*** GAME OVER - LOSE ***/
function gameOver() {
  console.log('Game Over');

  setTimeout(function () {
    $('#gameover h1').html("Game Over!");
    $('#gameover div.ui-content p').html("The Game Is Over. <br/> You Scored " + score + " Out Of " + total + " Points!");
    $("#gameover").popup("open");
  }, 600);
}

/*** GAME OVER - WIN ***/ 
function win() {
  console.log('You Win');

  setTimeout(function () {
    $('#gameover h1').html("You Win!");
    $('#gameover div.ui-content p').html("Congratulations You Win! <br/> You Scored " + score + " Out Of " + total + " Points!");
    $("#gameover").popup("open");
  }, 600);
}

/*** RERUN SAME QUIZ DATA ***/ 
function retryQuiz() {
  $("#gameover").popup("close");
  setTimeout(function () {
    launch(retryQuizName);
  }, 600);
}
