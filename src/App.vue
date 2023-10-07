<template>
  <div class="wrapper">
    <GameBoard class="board" />
  </div>
</template>

<script>
import GameBoard from './components/Board.vue'

export default {
  name: 'App',
  components: {GameBoard},
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
