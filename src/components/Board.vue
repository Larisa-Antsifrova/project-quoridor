<template>
  <div class="board">
    <div v-for="(row, indexRow) in board" :key="row" class="row">
      <div v-for="(cell, indexCell) in row" :key="cell" class="cell">
        <div v-if="indexRow !== 0" class="up" :class="cell.up"></div>

        <div v-if="indexCell !== 8" class="right" :class="cell.right"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'GameBoard',
  props: {
    board: { required: true }
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
</style>