<template>
  <img alt="Vue logo" src="./assets/logo.png">
  {{board}}
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import {initBoard} from './services/game.js'

export default {
  name: 'App',
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
