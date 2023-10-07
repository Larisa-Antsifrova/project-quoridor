<template>
  <div class="wrapper">
    <h2 class="title">Quoridor</h2>

    <GameBoard class="board" @click="openPopup" />

    <h2 class="title">Walls</h2>

    <GameWalls class="walls" />

    <PaymentPopup v-if="isPopupOpen" />
  </div>
</template>

<script>
import GameBoard from './components/Board.vue'
import GameWalls from './components/Walls.vue'
import PaymentPopup from './components/PaymentPopup.vue'

export default {
  name: 'App',
  data(){
    return {
      isPopupOpen: false
    }
  },
  components: { GameBoard, GameWalls, PaymentPopup},
  methods: {
    openPopup(){
      this.isPopupOpen = true
    }

  }
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
