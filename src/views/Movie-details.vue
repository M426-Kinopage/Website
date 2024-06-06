<template>
  <main id="movie-details">
    <article>
      <section class="movie-detail">
        <div class="container">
          <figure class="movie-detail-banner">
            <img
              src="./assets/images/movie-4.png"
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
  name: "MovieDetail",
};
</script>

<style scoped>
:root {
  --primary-color: rgb(119, 102, 51);
  --secondary-color: rgb(255, 255, 255);
  --background-color: rgb(255, 255, 255);
  --text-color: rgb(0, 0, 0);
  --button-background: rgb(119, 102, 51);
  --button-text: rgb(255, 255, 255);
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.movie-detail {
  background-color: var(--secondary-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.movie-detail-banner {
  position: relative;
}

.movie-detail-banner img {
  width: 100%;
  border-radius: 10px;
}

.play-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: var(--primary-color);
  background: none;
  border: none;
  cursor: pointer;
}

.detail-subtitle {
  font-size: 18px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.detail-title {
  font-size: 32px;
  margin-bottom: 20px;
}

.detail-title strong {
  color: var(--primary-color);
}

.meta-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.badge-wrapper {
  display: flex;
  gap: 10px;
}

.badge {
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
}

.badge-fill {
  background-color: var(--primary-color);
  color: var(--secondary-color);
}

.badge-outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.genre-wrapper a {
  color: var(--primary-color);
  text-decoration: none;
  margin-right: 5px;
}

.date-time {
  display: flex;
  gap: 10px;
}

.date-time ion-icon {
  color: var(--primary-color);
}

.storyline {
  margin-bottom: 20px;
}

.details-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.details-actions .title-wrapper {
  display: flex;
  flex-direction: column;
}

.details-actions .title {
  font-size: 18px;
  font-weight: bold;
}

.details-actions .text {
  font-size: 14px;
}

.btn-primary {
  background-color: var(--button-background);
  color: var(--button-text);
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.btn-primary ion-icon {
  font-size: 18px;
}
</style>
