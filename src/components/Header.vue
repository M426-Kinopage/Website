<template>
  <header>
    <nav>
     
      <ul class="nav-links" style="margin-bottom: -10px;"> 
        <ul> <img src="../assets/logo-transparent.png" alt="Logo" style="height:80px;   margin-bottom: 20px; margin-top: -35px;"></ul>
        <li><router-link to="/" class="nav-link">Home</router-link></li>
        <li><router-link to="/kino" class="nav-link">Kino</router-link></li>
        <li><router-link to="/kantine" class="nav-link">Kantine</router-link></li>
        <li><router-link to="/movies" class="nav-link">Movies</router-link></li>
        <li><router-link to="/geschenkkarte" class="nav-link">Geschenkkarte</router-link></li>
        <li><router-link to="/partner" class="nav-link">Partner</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #763;
  color: #fff;
  padding: 15px 0;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
}

.nav-links {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  display: inline;
  margin-right: 20px;
}

.nav-links li:last-child {
  margin-right: 0;
}

.nav-links li a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;
  margin-left: 20px;
}

.nav-links li a:hover {
  color: #42b983; 
  text-decoration: none;
}

</style>
