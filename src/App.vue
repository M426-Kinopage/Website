<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f7f1e3;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh; 
  display: flex; 
  flex-direction: column; 
  position: relative; 
}



Header {
  flex: 0 0 auto; 
}

router-view {
  flex: 1; 
  overflow-y: auto; 
}

Footer {
  flex: 0 0 auto; 
  position: fixed; 
  bottom: 0; 
  width: 100%;
  background-color: #2c3e50; 

  color: white; 
  padding: 10px; 
}



nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
