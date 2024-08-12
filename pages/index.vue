<template>
  <div>
    <h1>Featured Movies and Series</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h2>Featured Movies</h2>
      <div class="grid">
        <PosterCard
          v-for="movie in featuredMovies"
          :key="movie.imdbID"
          :posterInfo="movie"
        />
      </div>
      <h2>Featured Series</h2>
      <div class="grid">
        <PosterCard
          v-for="series in featuredSeries"
          :key="series.imdbID"
          :posterInfo="series"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import type { PosterInfo } from "./../types/PosterInfo";

const featuredMovies = ref<PosterInfo[]>([]);
const featuredSeries = ref<PosterInfo[]>([]);
const loading = ref<boolean>(true);

onMounted(async () => {
  const movieResponse = [
    {
      Title: "Interstellar",
      imdbID: "1",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Pulp Fiction",
      imdbID: "2",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Toy Story 3",
      imdbID: "3",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_SX300.jpg",
    },
    {
      Title: "Hereditary",
      imdbID: "4",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_SX300.jpg",
    },
  ];
  const seriesResponse = [
    {
      Title: "Lost",
      imdbID: "5",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzhlY2E5NDUtYjJjYy00ODg3LWFkZWQtYTVmMzU4ZWZmOWJkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    },
    {
      Title: "Breaking Bad",
      imdbID: "6",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_SX300.jpg",
    },
    {
      Title: "Mindhunter",
      imdbID: "7",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWNmYzQ1ZWUtYTQ3ZS00Y2UwLTlkMDctZThlOTJkMGJiNzBiXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg",
    },
    {
      Title: "Battlestar Galactica",
      imdbID: "8",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjBjMjk4YWQtZjY1MC00NTI5LWEwZDMtYWMyYjk2MjkzMThhXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg",
    },
  ];

  featuredMovies.value = movieResponse;
  featuredSeries.value = seriesResponse;

  console.log("inside");
  loading.value = false;
});
</script>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
