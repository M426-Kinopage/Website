<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/"><img src="../assets/Logo-Test.png" alt="Logo" style="height:35px; margin-right: 20px;"></router-link></li>
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
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  header {
    background-color: #763;
    color: #fff;
    padding: 15px 0;
    text-align: center;
  }
  
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li {
    display: inline;
    margin-right: 20px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
  }
  
  nav ul li a:hover {
    color: #42b983; 
    text-decoration: none;
  }
  
  nav ul li:first-child {
  margin-right: 450px; 
}
  .nav-link {
    font-size: 20px; 
    font-weight: bold; 
    margin-right: 30px; 
  }
  
  nav ul li:first-child a {
    padding-right: 20px; 
  }
  
  nav ul li:first-child a:hover {
    color: inherit;
    text-decoration: none;
  }
  </style>
  