<template>
  <div class="wrapper">
    <GameBoard class="board" :board="board" />
  </div>
</template>

<script>
import GameBoard from './components/Board.vue'
import { Board } from './classes/Board.js'

const player1Start = {
  name: 'player1',
  x: 0,
  y: 3,
}

const player2Start = {
  name: 'player2',
  x: 8,
  y: 3,
}

const SIZE = 9

export default {
  name: 'App',
  components: {GameBoard},
  data: function() {
  return {
    board: new Board(SIZE, player1Start, player2Start),
    currentPlayer: player1Start.name,
    methods: {
      resetGame() {
        this.board = new Board(SIZE, player1Start, player2Start)
      },
      move(moveType, cell, direction) {
        if(!this.board[moveType](this.currentPlayer, cell, direction)) {
          return
        }

        if (this.currentPlayer === 'player1') {
          this.currentPlayer = 'player2'
        } else {
          this.currentPlayer = 'player1'
        }
      }
    },
    computed: {
      availableCells() {
        return this.board.getAvailableCells(this.currentPlayer)
      }
    }
  }
  }
}
</script>

<style>
.board {
  margin: 0 auto;
}

.wrapper {
  height: 60vh;
}
</style>
