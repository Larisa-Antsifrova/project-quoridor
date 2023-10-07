<template>
  <div class="wrapper">
    <h2 class="title">Quoridor</h2>

    <GameBoard class="board" />

    <h2 class="title">Walls</h2>

    <GameWalls class="walls" />
  </div>
</template>

<script>
import GameBoard from './components/Board.vue'
import GameWalls from './components/Walls.vue'

export default {
  name: 'App',
  components: { GameBoard, GameWalls},
}
</script>

<style scoped>
.board {
  height: 60vh;
  margin: 0 auto 20px;
}

.walls {
  width: 1000px;
  height: 25vh;
  margin: 0 auto;
}

.wrapper {
  height: 100vh;
}

.title {
  text-align: center;
}
</style>
