<template>
  <div>
    <div class="privacy-policy-container">
      <div class="privacy-policy-box">
        <h1 class="page-title">Standort Mümliswil</h1>
        <p>Willkommen im Jungscharhaus - Ihrem Ort für unvergessliche Kinomomente! In unserem gemütlichen Kino laden wir Sie ein, sich zurückzulehnen, zu entspannen und in die faszinierende Welt des Films einzutauchen. Mit zwei Sälen und insgesamt 187 Sitzen gilt unser Kino als das grösste und auch einzige Kino in ganz Mümliswil.</p>
        <hr class="divider">
        <div class="additional-info">
          <div class="info-item">
            <img src="@/assets/Sitz_Icon.png" alt="Plätze" class="icon" />
            <p>187 Sitze</p>
          </div>
          <div class="info-item">
            <img src="@/assets/Parkplatz_Icon.png" alt="Parkplätze" class="icon" />
            <p>Parkplätze vorhanden</p>
          </div>
          <div class="info-item">
            <img src="@/assets/Wifi_Icon.png" alt="Wifi" class="icon" />
            <p>Free WiFi</p>
          </div>
          <div class="info-item">
            <img src="@/assets/Kino_Icon.png" alt="Plätze" class="icon" />
            <p>2 Säle</p>
          </div>
          <!-- Weitere Icons und Informationen hier -->
        </div>
        <hr class="divider">
        <div class="kino-details">
          <div class="kino-info">
            <h3>Hier findest du uns:</h3>
            <p>
              Jungscharhaus<br />
              Brunnersbergstrasse 27 <br />
              4717 Mümliswil
            </p>
          </div>
        </div>
        <div id="map" class="map-container"></div>
      </div>
    </div>
    
  </div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj'; 

export default {
  name: "Kino",
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const lonLatCoords = [7.6157131, 47.3272642]; // WGS84-Koordinaten

      // Konvertiere die Koordinaten in EPSG:3857
      const convertedCoords = fromLonLat(lonLatCoords);

      const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: convertedCoords, // Verwende die konvertierten Koordinaten
          zoom: 18
        })
      });
    }
  }

};
</script>

<style scoped>
/* Your existing styles */
.page-title {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2em;
  color: #333;
}

.privacy-policy-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px; /* reduced margin */
}

.privacy-policy-box {
  width: 55%;
  padding: 20px;
  border-radius: 10px;
}

.map-container {
  height: 400px;
  margin-top: 20px; /* added margin */
}

.kino-image {
  width: 100%;
  height: 500px;
  object-fit: fill;
}

.kino-details {
  text-align: left;
}

.kino-info {
  text-align: left;
  font-size: 12;
}

.kino-details h3 {
  margin-bottom: 10px;
  font-size: 20px;
  color: #333;
}

.kino-details p {
  margin: 0;
  font-size: 14px;
  color: #777;
}

.divider {
  border: 1px solid #ccc;
  margin: 20px 0;
}

.additional-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 40px;
  height: 40px;
  margin-bottom: 4px;
}
</style>
