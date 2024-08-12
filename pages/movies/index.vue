<template>
  <div>
    <SearchInput :showType="'movie'" @queryShow="queryMovie"></SearchInput>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>Results for {{ movieToQuery }}</h1>
      <div class="grid">
        <PosterCard
          v-for="movie in moviesQueryResult"
          :key="movie.imdbID"
          :posterInfo="movie"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PosterInfo } from "../../types/PosterInfo";
import getShowsInfo from "../../api/getShowsInfo";

const movieToQuery = ref<string>("");
const moviesQueryResult = ref<PosterInfo[]>([]);
const loading = ref<boolean>(false);

const queryMovie = async (movie: string) => {
  movieToQuery.value = movie;
  loading.value = true;
  moviesQueryResult.value = await getShowsInfo(movie);
  loading.value = false;
};
</script>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
