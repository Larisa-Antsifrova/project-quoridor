<template>
  <div class="wrapper">
    <GameBoard class="board" :board="board" />
  </div>
</template>

<script>
import { initBoard } from './services/game.js'
import GameBoard from './components/Board.vue'

export default {
  name: 'App',
  components: {GameBoard},
  data: function() {
  return {
    board: initBoard(),
    methods: {
      startGame() {
        this.board = initBoard()
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
