// const Game = require('./game.js');

class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // $('.square').on("click", event => {
    //   const currentTarget = event.currentTarget;
    //   const pos = currentTarget.attr('data-pos');
    //   game.playMove(pos);
    // } );
    this.$el.on("click", "li", (event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));

  }

  // Manipulate the cell <li> to show the current player's mark.
  // Add/remove CSS classes to change the cell background to white
  // and display the 'X's and 'O's in different colors. I did all
  // this in a View.prototype.makeMove method. I also popped an alert
  // if the move was invalid.

  makeMove($square) {
    // const currentTarget = event.currentTarget;
      const pos = $square.data("pos");
      try {
        this.game.playMove(pos);
      } catch (e) {
        alert("invalid move! ;()");
        return;
      }
      let marking = this.game.currentPlayer;
      $square.text(marking);
      $square.addClass('marked');

      if(this.game.winner() && this.game.isOver())
      {
        alert(`${marking}, you won!`);
      }
      else if (this.game.isOver()) {
        alert("game is over");
      }
  }

  setupBoard() {

    for (let row = 0; row < 3; row++) {
      let $row = $('<ul class = "row clearfix" ></ul>').data("pos", [row]); //generate an unordered list object

      for (let col = 0; col < 3; col++) {

      let $li = $('<li class ="square"></li>').data("pos", [row, col]); //generate an ordered list object
        $row.append($li);
      }
      this.$el.append($row);
    }
  }
}




module.exports = View;
