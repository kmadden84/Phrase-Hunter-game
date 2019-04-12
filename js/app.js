/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const phrase = new Phrase();

const startButton = document.getElementById('btn__reset');
const keyRow = document.getElementById('qwerty');

$('#btn__reset').on('click', function() {
 	game.startGame();
 });




$('#qwerty button.key').on('click', function(event) {
game.handleInteraction(event);
 })

