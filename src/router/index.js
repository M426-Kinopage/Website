import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import Kino from "../views/Kino.vue";
import Kantine from "../views/Kantine.vue";
import Movies from "../views/Movies.vue";
import MovieDetails from "../views/MovieDetails.vue";
import Geschenkkarte from "../views/Geschenkkarte.vue";
import Partner from "../views/Partner.vue";
import Kontakt from "../views/Kontakt.vue";
import Impressum from "../views/Impressum.vue";
import Nutzungsbedingungen from "../views/Nutzungsbedingungen.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/kino",
    name: "kino",
    component: Kino,
  },
  {
    path: "/kantine",
    name: "kantine",
    component: Kantine,
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies,
  },
  {
    path: "/geschenkkarte",
    name: "geschenkkarte",
    component: Geschenkkarte,
  },
  {
    path: "/partner",
    name: "partner",
    component: Partner,
  },
  {
    path: "/kontakt",
    name: "kontakt",
    component: Kontakt,
  },
  {
    path: "/impressum",
    name: "impressum",
    component: Impressum,
  },

  {
    path: "/nutzungsbedingungen",
    name: "nutzungsbedingungen",
    component: Nutzungsbedingungen,
  },
  {
    path: "/movies",
    name: "movies",
    component: Movies,
  },
  {
    path: "/movieDetails",
    name: "movieDetails",
    component: MovieDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
