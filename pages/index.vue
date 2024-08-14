<template>
  <div class="flex justify-center">
    <div class="max-w-screen-xl">
      <div v-if="loading">Loading...</div>
      <div v-else>
        <p class="text-4xl mt-10 mb-5 ml-5 font-bold">Trending Movies</p>
        <div class="flex mx-2 justify-center">
          <div
            class="w-1/4 px-4"
            v-for="movie in featuredMovies"
            :key="movie.imdbID"
          >
            <PosterCard :posterInfo="movie" :showType="'movies'" />
          </div>
        </div>
        <p class="text-4xl mt-10 mb-5 ml-5 font-bold">Trending Series</p>
        <div class="flex mx-2">
          <div
            class="w-1/4 px-2"
            v-for="series in featuredSeries"
            :key="series.imdbID"
          >
            <PosterCard :posterInfo="series" :showType="'series'" />
          </div>
        </div>
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
