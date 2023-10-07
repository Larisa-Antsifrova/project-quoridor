<template>
  <div>
    <div v-if="!isGameStarted" class="button-holder">
      <button class="button" @click="startGame">Start Game</button>
    </div>

    <div v-else class="wrapper">
      <h2 class="title">Quoridor</h2>

      <GameBoard class="board" @triggerPopup="openPopup" />

      <h2 class="title">Walls</h2>

      <GameWalls class="walls" />

      <a class="link" href="https://www.google.com/">Contact Support</a>

      <PaymentPopup v-if="isPopupOpen" />
    </div>
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
      isPopupOpen: false,
      isGameStarted: false
    }
  },
  components: { GameBoard, GameWalls, PaymentPopup},
  methods: {
    openPopup(){
      this.isPopupOpen = true
    },
    startGame(){
this.isGameStarted = true
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

.button-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.button {
  outline: none;
  border: none;
  color: white;
  font-size: 35px;
  text-align: center;
  background-color: #2a9c9d;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
}

.link {

}
</style>
