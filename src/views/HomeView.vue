<template>
  <div class="home">
    <div id = "fetchAlldiv">
      <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <!-- Weitere Spalten hier hinzufügen, je nach den Daten -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in allData">
        <td>test</td>
        <td>ndisnkj</td>
        <td>usaduasb</td>
        <!-- Weitere Spalten hier hinzufügen, je nach den Daten -->
      </tr>
    </tbody>
  </table>
  </div>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios';




export default {
  name: 'HomeView',
  
  data(){
    return{
       allData: []
      }
  },
  components: {
    HelloWorld
  },
  mounted() {
    const axiosscript = document.createElement('axiosscript');
    axiosscript.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
    axiosscript.async = true;
    document.head.appendChild(axiosscript);

    const npmvuescript = document.createElement('npmvuescript');
    npmvuescript.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
    npmvuescript.async = true;
    document.head.appendChild(npmvuescript);

    const script = document.createElement('script');
    script.src = require('@/db/js_fetchdataHome');
    script.async = true;
    document.head.appendChild(script);
  }
}
</script>

