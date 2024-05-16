<template>
  <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
    <div class="popup-content">
      <div class="popup-header">
        <h2>McDonald's</h2>
      </div>
      <div class="popup-body">
        <img
          src="@/assets/mcdonalds.jpg"
          alt="McDonald's Food"
          class="popup-image"
        />
        <div class="popup-text">
          <h3>Dein Take Away & Dine-In Restaurant in Oftringen & Olten!</h3>
          <p>
            Hier im you event center Oftringen. Weitere Standorte und
            Informationen findest du unter mcdonalds.com
          </p>
          <p>Sonntag – Donnerstag<br />11:00 – 21:00</p>
          <p>Freitag & Samstag<br />11:00 – 23:00</p>
          <a href="https://www.mcdonalds.com" target="_blank" class="popup-link"
            >WWW.MCDONALDS.COM</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "McDonalds",
  data() {
    return {
      isVisible: true,
    };
  },
  methods: {
    closePopup() {
      this.isVisible = false;
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 80%;
  max-width: 600px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: popup-appear 0.3s ease-out;
}

@keyframes popup-appear {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.popup-header {
  text-align: center;
  margin-bottom: 20px;
}

.popup-header h2 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}

.popup-body {
  display: flex;
  align-items: center;
}

.popup-image {
  width: 40%;
  height: auto;
  margin-right: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.popup-image:hover {
  transform: scale(1.05);
}

.popup-text {
  flex: 1;
}

.popup-text h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.popup-text p {
  margin: 5px 0;
}

.popup-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #000;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.popup-link:hover {
  background-color: #333;
  transform: translateY(-2px);
}
</style>
