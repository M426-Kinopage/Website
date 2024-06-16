<template>
  <footer>
  
    <div class="footer-content">
      <ul>
        <li>
          <router-link to="/kontakt"
            ><a href="#" class="footer-link">Kontakt</a></router-link
          >
        </li>
        <li>
          <router-link to="/nutzungsbedingungen"
            ><a href="#" class="footer-link"
              >Nutzungsbedingungen</a
            ></router-link
          >
        </li>
        <li>
          <router-link to="/impressum"
            ><a href="#" class="footer-link">Impressum</a></router-link
          >
        </li>
      </ul>
    </div>
    
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>


.content-wrap {
  flex: 1;
}

footer {
  position: absolute; /* Positionierung relativ zum #app-Container */
  bottom: 0; /* Am unteren Rand positionieren */
  left: 0;
  width: 100%; /* Volle Breite einnehmen */
  background-color: #7f0000;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}


.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content ul {
  list-style-type: none;
  padding: 0;
}

.footer-content ul li {
  display: inline;
  margin-right: 20px;
}

.footer-content ul li:last-child {
  margin-right: 0;
}

.footer-content ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;
}

.footer-content ul li a:hover {
  text-decoration: underline;
}
</style>

