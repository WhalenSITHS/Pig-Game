/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying; //dice;

/* var scores = [0,0];
var roundScore = 0;
activePlayer = 0;  game init function created later*/

init();



/* dice = Math.floor(Math.random() * 6) +1;
console.log(dice); */

//Example of Type Coercion
// document.querySelector('#current-' + activePlayer).textContent = dice;

//alternate method
/* document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; */

// var x = document.querySelector('#score-0').textContent;

/* document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';  added to ini later*/

/* document.querySelector('.dice').style.display = 'none';
function btn(){
    // Do something
} */
document.querySelector(".btn-roll").addEventListener("click", function() {
  if (gamePlaying) {
    //Anonymous Function, 1. random number
    dice = Math.floor(Math.random() * 6) + 1;
    //2. Display Result
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";
    //Update the round score IF the rolled number was not a 1
    if (dice !== 1) {
      //add score
      roundScore += dice;
      document.querySelector(
        "#current-" + activePlayer
      ).textContent = roundScore;
    } else {
      //Next player use function second time
      /*  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.querySelector('.dice').style.display = 'none'; */

      nextPlayer();
    }
  }
});

 document.querySelector('.btn-hold').addEventListener('click',function(){
     if (gamePlaying) {
       //add CURRENT score to Global score, += for adding to variable

       scores[activePlayer] += roundScore;

       // Also can be written as scores[activePlayer] = scores[activePlayer] + roundScore;

       //Update Ui

       document.querySelector("#score-" + activePlayer).textContent =
         scores[activePlayer];

       //Check if player won the game
       if (scores[activePlayer] >= 20) {
         document.querySelector("#name-" + activePlayer).textContent =
           "Winner!";
         document.querySelector(".dice").style.display = "none";
         document
           .querySelector(".player-" + activePlayer + "-panel")
           .classList.add("winner");
         document
           .querySelector(".player-" + activePlayer + "-panel")
           .classList.remove("active");
         gamePlaying = false;
       }
       //next player
       nextPlayer();
     }
    

}); 

function nextPlayer(){
     //Next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');
     document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    gamePlaying = true;
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner');
}
