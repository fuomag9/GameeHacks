// ==UserScript==
// @name         GameeHacks
// @namespace    https://github.com/fuomag9/GameeHacks
// @version      0.1
// @description  try to take over the world!
// @author       Fuomag9
// @match        https://www.gameeapp.com/game/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    gameeUI.gameStart();
    gameeUI.gamePause();
    gameeUI.updateScore(prompt("Insert your desired score"));
    gameeUI.gameOver();
})();