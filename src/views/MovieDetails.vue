<template>
  <main id="movie-details">
    <article>
      <section class="movie-detail">
        <div class="container">
          <figure class="movie-detail-banner">
            <img
              src="../assets/images/movie-4.png"
              alt="Free guy movie poster"
            />

            <button class="play-btn">
              <ion-icon name="play-circle-outline"></ion-icon>
            </button>
          </figure>

          <div class="movie-detail-content">
            <p class="detail-subtitle">New Episodes</p>

            <h1 class="h1 detail-title">Free <strong>Guy</strong></h1>

            <div class="meta-wrapper">
              <div class="badge-wrapper">
                <div class="badge badge-fill">PG 13</div>
                <div class="badge badge-outline">HD</div>
              </div>

              <div class="genre-wrapper">
                <a href="#">Comedy,</a>
                <a href="#">Action,</a>
                <a href="#">Adventure,</a>
                <a href="#">Science Fiction</a>
              </div>

              <div class="date-time">
                <div>
                  <ion-icon name="calendar-outline"></ion-icon>
                  <time datetime="2021">2021</time>
                </div>
                <div>
                  <ion-icon name="time-outline"></ion-icon>
                  <time datetime="PT115M">115 min</time>
                </div>
              </div>
            </div>

            <p class="storyline">
              A bank teller called Guy realizes he is a background character in
              an open world video game called Free City that will soon go
              offline.
            </p>

            <div class="details-actions">
              <div class="title-wrapper">
                <p class="title">Prime Video</p>
                <p class="text">Streaming Channels</p>
              </div>

              <button class="btn btn-primary">
                <ion-icon name="play"></ion-icon>
                <span>Watch Now</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </article>
  </main>
</template>

<script>
export default {
  name: "MovieDetails",
};
</script>

<style scoped>
@import "@/assets/MovieDetails.css";
</style>
