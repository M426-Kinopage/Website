<template>
  <div>
    <h1 class="page-title">Kino Page</h1>
    <div class="card-container">
      <div class="card" @click="showWokamiPopup = true">
        <img src="@/assets/wokami.png" alt="Wokami" class="card-image" />
        <div class="card-content">
          <h3>Wokami</h3>
          <p>Stelle dir deinen LieblingsWok selbst zusammen</p>
        </div>
      </div>
      <div class="card" @click="showSubwayPopup = true">
        <img src="@/assets/subway.png" alt="Subway" class="card-image" />
        <div class="card-content">
          <h3>Subway</h3>
          <p>Leckere Subs, vor deinen Augen frisch zubereitet</p>
        </div>
      </div>
      <div class="card" @click="showMcDonaldsPopup = true">
        <img src="@/assets/mcdonalds.jpg" alt="McDonald's" class="card-image" />
        <div class="card-content">
          <h3>McDonald's</h3>
          <p>Genieße köstliche Burger und Pommes</p>
        </div>
      </div>
    </div>
    <Wokami v-if="showWokamiPopup" @close="showWokamiPopup = false" />
    <Subway v-if="showSubwayPopup" @close="showSubwayPopup = false" />
    <McDonalds v-if="showMcDonaldsPopup" @close="showMcDonaldsPopup = false" />
  </div>
</template>

<script>
import Wokami from "./Wokami.vue";
import Subway from "./Subway.vue";
import McDonalds from "./McDonalds.vue";

export default {
  name: "Kino",
  components: {
    Wokami,
    Subway,
    McDonalds,
  },
  data() {
    return {
      showWokamiPopup: false,
      showSubwayPopup: false,
      showMcDonaldsPopup: false,
    };
  },
};
</script>

<style scoped>
.page-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 23%;
  max-width: 220px;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 20px;
  text-align: center;
}

.card-content h3 {
  margin: 15px 0 10px;
  font-size: 20px;
  color: #333;
}

.card-content p {
  margin: 0;
  font-size: 14px;
  color: #777;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 80%;
    max-width: none;
  }
}
</style>
