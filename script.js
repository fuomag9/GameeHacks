// ==UserScript==
// @name         GameeHacks
// @namespace    https://github.com/fuomag9/GameeHacks
// @version      0.1
// @description  try to take over the world!
// @author       Fuomag9
// @match        https://www.gameeapp.com/game/*
// @grant        none
// ==/UserScript==
(function(){
document.addEventListener('keydown', function(e) {
  // pressed e
  if (e.keyCode == 84) {
   gameeUI.gameStart(); //game start
  gameeUI.gamePause(); //the game is paused so it won't automatically close itself and you won't be able to lose
  gameeUI.updateScore(prompt("Insert your desired score")); //send the score to the server
  gameeUI.gameOver(); //close the game as we don't need it anymore
  }
}, false);
})();
