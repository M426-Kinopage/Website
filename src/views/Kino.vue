<template>
  <div>
    <h1>Kino Page</h1>
    <!-- Weitere Inhalte der Partnerseite -->
    <button @click="showPopup = true">Zeige Popup</button>
    <Wokami v-if="showPopup" @close="showPopup = false" />
  </div>
</template>

<script>
import Wokami from "./Wokami.vue";

export default {
  name: "Kino",
  components: {
    Wokami,
  },
  data() {
    return {
      showPopup: false,
    };
  },
};
</script>

<style>
button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
