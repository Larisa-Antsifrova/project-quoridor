<template>
  <div class="board">
    <div v-for="(row, indexRow) of board.board" :key="indexRow" class="row">
      <div v-for="(cell, indexCell) of row" :key="indexCell"
           class="cell"
           :class="{available: availableCells.includes(cell)}" 
           @click="move('movePlayer', cell)"
      >
        <div v-if="indexRow !== 0" class="up" :class="cell.up" @click.stop="move('placeWall', cell, 'up')"></div>

        <div v-if="indexCell !== 8" class="right" :class="cell.right" @click.stop="move('placeWall', cell, 'right')"></div>

        <img v-if="cell.player === 'player1'" src="../assets/player-01.png" alt="01">

        <img v-if="cell.player=== 'player2'" src="../assets/player-02.png" alt="02">

      </div>
    </div>
  </div>

</template>

<script>
import { Board } from '../classes/Board.js'

const player1Start = {
  name: 'player1',
  x: 4,
  y: 0,
}

const player2Start = {
  name: 'player2',
  x: 4,
  y: 8,
}

const SIZE = 9

export default {
  name: 'GameBoard',
  data: function() {
  return {
    board: new Board(SIZE, player1Start, player2Start),
    currentPlayer: player1Start.name,
    moves: 0,
  }
  },
  methods: {
    resetGame() {
      this.board = new Board(SIZE, player1Start, player2Start)
    },
    move(moveType, cell, direction) {
      this.moves++

      if(!this.board[moveType](this.currentPlayer, cell, direction)) {
        return
      }

      if (this.currentPlayer === 'player1') {
        this.currentPlayer = 'player2'
      } else {
        this.currentPlayer = 'player1'
      }
    },
  },
  computed: {
    availableCells() {
      return this.board.getAvailableCells(this.currentPlayer)
    },
  },
  watch: {
    moves(val) {
      if(val === 3) {
        this.$emit('triggerPopup')
      }
    }
  }
}
</script>

<style scoped>
.board{
  display: flex;
  flex-direction: column;
  height: 100%;
  aspect-ratio: 1/1;
  background-color: tomato;
}

.row {
  display: flex;
}

.cell {
  position: relative;
  width: calc(100% / 9);
  aspect-ratio: 1 / 1;
  background: #2a9c9d;
}

.up {
  position: absolute;
  top:0;
  left: 0;
  right:0;
  height: 8px;
  background-color: black;
}

.right {
  position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  width: 8px;
  background-color: black;
}

.closed {
  background-color: bisque;
}

.available {
  background-color: aquamarine;
}
</style>