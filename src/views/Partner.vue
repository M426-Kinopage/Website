<template>
  <div class="app-container">
    <div class="content">
      <h1>Unsere Partner</h1>
      <div class="partner-links">
        <div class="partner">
          <span>Weischerwerbung</span>
          <a href="https://www.weischer.media" target="_blank"
            >www.weischer.media</a
          >
        </div>
        <div class="partner">
          <span>Brunner Getränke</span>
          <a href="https://www.brunnergetraenke.ch" target="_blank"
            >www.brunnergetraenke.ch</a
          >
        </div>
        <div class="partner">
          <span>EventOne</span>
          <a href="https://www.event-one.ch" target="_blank"
            >www.event-one.ch</a
          >
        </div>
        <div class="partner">
          <span>Thommen Gastronomie</span>
          <a href="https://www.tg-catering.ch" target="_blank"
            >www.tg-catering.ch</a
          >
        </div>
        <div class="partner">
          <span>Haar-Shop.ch</span>
          <a href="https://www.haar-shop.ch" target="_blank"
            >www.haar-shop.ch</a
          >
        </div>
        <div class="partner">
          <span>Cleanness Facility Management</span>
          <a href="https://www.cleanness.ch" target="_blank"
            >www.cleanness.ch</a
          >
        </div>
        <div class="partner">
          <span>wokami</span>
          <a href="https://www.wokami.ch" target="_blank">www.wokami.ch</a>
        </div>
        <div class="partner">
          <span>Future Solutions</span>
          <a href="https://www.futuresolutions.com" target="_blank"
            >www.futuresolutions.com</a
          >
        </div>
        <div class="partner">
          <span>Innovate Tech</span>
          <a href="https://www.innovatetech.com" target="_blank"
            >www.innovatetech.com</a
          >
        </div>
        <div class="partner">
          <span>Green Energy</span>
          <a href="https://www.greenenergy.com" target="_blank"
            >www.greenenergy.com</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterComponent from "../components/Footer.vue";

export default {
  name: "PartnerPage",
  components: {
    FooterComponent,
  },
};
</script>

<style scoped>
body {
  background-color: #f0f0f0;
  color: #333;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
}

.partner-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.partner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.partner span {
  color: #333;
  font-size: 16px;
}

.partner a {
  color: #007bff;
  text-decoration: none;
}

.partner a:hover {
  text-decoration: underline;
}
</style>
