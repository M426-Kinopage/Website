<template>
    <div class="impressum-container">
      <div class="impressum-box">
        <h1>Impressum</h1>
        <ul>
          <li>Firmenname: Cineflick</li>
          <li>Adresse: Brunnersbergstrasse 27,<br> 4717 Mümliswil</li>
          <li>Telefon: +41 77 939 72 39</li>
          <li>E-Mail: Cineflick@info.com</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Impressum',
  }
  </script>
  
  <style scoped>
  /* Stil für das Impressum */
  .impressum-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .impressum-box {
    background-color: #f4f4f4;
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 80%; /* Breite der Box */
    max-width: 600px; /* Maximale Breite, um die Lesbarkeit zu verbessern */
  }
  
  h1 {
    font-size: 36px; /* Schriftgröße des Titels */
    margin-bottom: 30px; /* Größerer Abstand zwischen Titel und Text */
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    font-size: 20px; /* Schriftgröße der Listenelemente */
    margin-bottom: 20px;
  }
  </style>
  