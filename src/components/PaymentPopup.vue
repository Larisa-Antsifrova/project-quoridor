<template>
  <div class="overlay">
    <div class="popup">
      <h2 class="heading">Trial Version is Over!</h2>

      <p>🎉🎉🎉</p>

      <p class="description">Please, donate to SKELAR Чумацький Шлях continue!</p>

    </div>
  </div>

</template>

<script>
export default {
  name: "PaymentPopup"
}
</script>

<style scoped>
.overlay {
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup {
  width: 500px;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  text-align: center;
}

.heading {
  font-size: 48px;
}

.description {
  font-size: 30px;
}
</style>