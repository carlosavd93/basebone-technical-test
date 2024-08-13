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
          :showType="'movies'"
        />
      </div>
      <h2>Featured Series</h2>
      <div class="grid">
        <PosterCard
          v-for="series in featuredSeries"
          :key="series.imdbID"
          :posterInfo="series"
          :showType="'series'"
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
  const response = await $fetch("/api/featuredMovies");
  featuredMovies.value = response.api;

  const response2 = await $fetch("/api/featuredSeries");
  featuredSeries.value = response2.api;

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
