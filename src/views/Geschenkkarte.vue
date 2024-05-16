<template>
  <div>
    <h1>Geschenkkarte</h1>
    <router-link to="/">Home</router-link>
    <div v-if="loading">Lade Daten...</div>
    <div v-else-if="error">Fehler beim Laden der Daten: {{ error }}</div>
    <ul v-else>
      <li v-for="film in filme" :key="film.fid">
        <h2>{{ film.titel }}</h2>
        <p>Beschreibung: {{ film.beschreibung }}</p>
        <p>Darsteller: {{ film.darsteller }}</p>
        <p>Regisseur: {{ film.regisseur }}</p>
        <p>Dauer: {{ film.dauer }} Minuten</p>
        <p>Startdatum: {{ formatDate(film.startdatum) }}</p>
        <p>Genre: {{ film.genre }}</p>
        <p>Altersgrenze: {{ film.altersgrenze }}</p>
        <a :href="film.trailer">Trailer ansehen</a>
        <br>
        <img :src="film.cover" alt="Cover" style="max-width: 200px;">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Geschenkkarte',
  data() {
    return {
      filme: [],
      loading: true,
      error: null
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch('http://localhost:3000/api/filme')
        .then(response => {
          if (!response.ok) {
            throw new Error('Netzwerkfehler');
          }
          return response.json();
        })
        .then(data => {
          this.filme = data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Fehler beim Abrufen der Daten:', error);
          this.error = error.message || 'Unbekannter Fehler';
          this.loading = false;
        });
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('de-DE', options);
    }
  }
}
</script>
