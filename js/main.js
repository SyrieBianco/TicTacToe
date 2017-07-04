const View = require('./ttt-view.js');// require appropriate file
  window.View = View;
const Game = require('./game.js'); // require appropriate file
  window.Game = Game;

$( () => {
  // Your code here
    // $('figure.ttt');
    const $board = $('.ttt');
    const play = new Game();
    const view = new View(play, $('figure.ttt'));

});
