<template>
  <div id="home">
    <main>
      <article>
        <section class="hero">
          <div class="container">
            <div class="hero-content">
              <h1 class="h1 hero-title">
                Geniesse die neusten <strong>Filme</strong> bei Cineflick.
              </h1>
            </div>
          </div>
        </section>

        <section class="upcoming">
          <div class="container">
            <div class="flex-wrapper">
              <div class="title-wrapper">
                <h2 class="h2 section-title">Demnächst im Kino</h2>
              </div>
            </div>

            <ul class="movies-list has-scrollbar">
              <li v-for="movie in upcomingMovies" :key="movie.title">
                <div class="movie-card">
                  <router-link to="/movieDetails">
                    <a href="./movieDetails">
                      <figure class="card-banner">
                        <img :src="getImagePath(movie.image)" :alt="`${movie.title} movie poster`" />
                      </figure>
                    </a>
                  </router-link>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">{{ movie.title }}</h3>
                    </a>
                    <time :datetime="movie.year">{{ movie.year }}</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">{{ movie.quality }}</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time :datetime="`PT${movie.duration}M`">{{ movie.duration }} min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>{{ movie.language }}</data>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="top-rated">
          <div class="container">
            <h2 class="h2 section-title">Aktuell bei Kinoflix</h2>

            <ul class="filter-list">
              <li>
                <button class="filter-btn" @click="applyFilter('language', 'English')">English</button>
              </li>
              <li>
                <button class="filter-btn" @click="applyFilter('language', 'Deutsch')">Deutsch</button>
              </li>
              <li>
                <button class="filter-btn" @click="applyFilter('quality', '4K')">4K</button>
              </li>
              <li>
                <button class="filter-btn" @click="applyFilter('quality', '2K')">2K</button>
              </li>
              <li>
                <button class="filter-btn" @click="applyFilter('quality', 'HD')">HD</button>
              </li>
              <li>
                <button class="filter-btn" @click="clearFilter">Alle</button>
              </li>
            </ul>

            <ul class="movies-list">
              <li v-for="movie in filteredMovies" :key="movie.title">
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img :src="getImagePath(movie.image)" :alt="`${movie.title} movie poster`" />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">{{ movie.title }}</h3>
                    </a>
                    <time :datetime="movie.year">{{ movie.year }}</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">{{ movie.quality }}</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time :datetime="`PT${movie.duration}M`">{{ movie.duration }} min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>{{ movie.language }}</data>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      filters: {
        language: null,
        quality: null,
      },
      upcomingMovies: [
        {
          title: "The Northman",
          year: "2022",
          image: "upcoming-1.png",
          quality: "HD",
          duration: 137,
          language: "English",
        },
        {
          title: "Doctor Strange in the Multiverse of Madness",
          year: "2022",
          image: "upcoming-2.png",
          quality: "4K",
          duration: 126,
          language: "English",
        },
        {
          title: "Memory",
          year: "2022",
          image: "upcoming-3.png",
          quality: "2K",
          duration: 114,
          language: "English",
        },
        {
          title: "The Unbearable Weight of Massive Talent",
          year: "2022",
          image: "upcoming-4.png",
          quality: "HD",
          duration: 107,
          language: "English",
        },
      ],
      currentMovies: [
        {
          title: "Sonic the Hedgehog 2",
          year: "2022",
          image: "movie-1.png",
          quality: "2K",
          duration: 122,
          language: "Deutsch",
        },
        {
          title: "Morbius",
          year: "2022",
          image: "movie-2.png",
          quality: "HD",
          duration: 104,
          language: "Deutsch",
        },
        {
          title: "The Adam Project",
          year: "2022",
          image: "movie-3.png",
          quality: "4K",
          duration: 106,
          language: "English",
        },
        {
          title: "Free Guy",
          year: "2021",
          image: "movie-4.png",
          quality: "4K",
          duration: 115,
          language: "Deutsch",
        },
        {
          title: "The Batman",
          year: "2022",
          image: "movie-5.png",
          quality: "4K",
          duration: 176,
          language: "English",
        },
      ],
    };
  },
  computed: {
    filteredMovies() {
      return this.currentMovies.filter((movie) => {
        return (
          (!this.filters.language || movie.language === this.filters.language) &&
          (!this.filters.quality || movie.quality === this.filters.quality)
        );
      });
    },
  },
  methods: {
    applyFilter(type, value) {
      this.filters[type] = value; 
    },
    clearFilter() {
      this.filters.language = null;
      this.filters.quality = null;
    },
    getImagePath(image) {
      return require(`@/assets/images/${image}`);
    },
  },
};
</script>

<style scoped>
@import "@/assets/HomeView.css";
</style>
