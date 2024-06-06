<template>
  <div id="home">
    <main>
      <article>
        <section class="hero">
          <div class="container">
            <div class="hero-content">
              <h1 class="h1 hero-title">
                Unlimited <strong>Movies</strong>, TV Shows, & More.
              </h1>

              <div class="meta-wrapper">
                <div class="badge-wrapper">
                  <div class="badge badge-fill">PG 18</div>
                  <div class="badge badge-outline">HD</div>
                </div>

                <div class="genre-wrapper">
                  <a href="#">Romance,</a>
                  <a href="#">Drama</a>
                </div>

                <div class="date-time">
                  <div>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <time datetime="2022">2022</time>
                  </div>

                  <div>
                    <ion-icon name="time-outline"></ion-icon>
                    <time datetime="PT128M">128 min</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="upcoming">
          <div class="container">
            <div class="flex-wrapper">
              <div class="title-wrapper">
                <p class="section-subtitle">Online Streaming</p>
                <h2 class="h2 section-title">Upcoming Movies</h2>
              </div>

              <ul class="filter-list">
                <li>
                  <button class="filter-btn">Movies</button>
                </li>
                <li>
                  <button class="filter-btn">TV Shows</button>
                </li>
                <li>
                  <button class="filter-btn">Anime</button>
                </li>
              </ul>
            </div>

            <ul class="movies-list has-scrollbar">
              <li>
                <div class="movie-card">
                  <router-link to="/movieDetails">
                    <a href="./movieDetails">
                      <figure class="card-banner">
                        <img
                          src="../assets/images/upcoming-1.png"
                          alt="The Northman movie poster"
                        />
                      </figure>
                    </a>
                  </router-link>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">The Northman</h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">HD</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT137M">137 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>8.5</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/upcoming-2.png"
                        alt="Doctor Strange in the Multiverse of Madness movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">
                        Doctor Strange in the Multiverse of Madness
                      </h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">4K</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT126M">126 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>NR</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/upcoming-3.png"
                        alt="Memory movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">Memory</h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">2K</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="">N/A</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>NR</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/upcoming-4.png"
                        alt="The Unbearable Weight of Massive Talent movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">
                        The Unbearable Weight of Massive Talent
                      </h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">HD</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT107M">107 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>NR</data>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class="top-rated">
          <div class="container">
            <p class="section-subtitle">Online Streaming</p>
            <h2 class="h2 section-title">Top Rated Movies</h2>

            <ul class="filter-list">
              <li>
                <button class="filter-btn">Movies</button>
              </li>
              <li>
                <button class="filter-btn">TV Shows</button>
              </li>
              <li>
                <button class="filter-btn">Documentary</button>
              </li>
              <li>
                <button class="filter-btn">Sports</button>
              </li>
            </ul>

            <ul class="movies-list">
              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/movie-1.png"
                        alt="Sonic the Hedgehog 2 movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">Sonic the Hedgehog 2</h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">2K</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT122M">122 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>7.8</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/movie-2.png"
                        alt="Morbius movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">Morbius</h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">HD</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT104M">104 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>5.9</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/movie-3.png"
                        alt="The Adam Project movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">The Adam Project</h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">4K</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT106M">106 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>7.0</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/movie-4.png"
                        alt="Free Guy movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">Free Guy</h3>
                    </a>
                    <time datetime="2021">2021</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">4K</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT115M">115 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>7.7</data>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="movie-card">
                  <a href="./movieDetails">
                    <figure class="card-banner">
                      <img
                        src="../assets/images/movie-5.png"
                        alt="The Batman movie poster"
                      />
                    </figure>
                  </a>

                  <div class="title-wrapper">
                    <a href="./movieDetails">
                      <h3 class="card-title">The Batman</h3>
                    </a>
                    <time datetime="2022">2022</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">4K</div>
                    <div class="duration">
                      <ion-icon name="time-outline"></ion-icon>
                      <time datetime="PT176M">176 min</time>
                    </div>
                    <div class="rating">
                      <ion-icon name="star"></ion-icon>
                      <data>7.9</data>
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
import HelloWorld from "@/components/HelloWorld.vue";
import "@/assets/HomeView.css";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
@import "@/assets/HomeView.css";
</style>
