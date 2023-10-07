<template>
  <div class="walls">
    <img src="../assets/01.png" alt="01">
    <img src="../assets/02.png" alt="02">
    <img src="../assets/03.png" alt="03">
    <img src="../assets/04.png" alt="04">
    <img src="../assets/05.png" alt="05">
    <img src="../assets/06.png" alt="06">
    <img src="../assets/07.png" alt="07">
    <img src="../assets/08.png" alt="08">
    <img src="../assets/09.png" alt="09">
    <img src="../assets/10.png" alt="10">
  </div>

</template>

<script>
export default {
  name: "GameWalls",
}
</script>

<style scoped>
.walls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

img {
  width: calc(100% / 5);
  height: 70px;
  object-fit: contain;
  object-position: center;
  padding: 8px;
  border-radius: 8px;
  background-color: rosybrown;
}
</style>