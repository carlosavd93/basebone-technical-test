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
          :showType="'movies'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from "vue";
import type { PosterInfo } from "../../types/PosterInfo";

const movieToQuery = ref<string>("");
const moviesQueryResult = ref<PosterInfo[]>([]);
const loading = ref<boolean>(false);

const moviesStore = useMoviesStore();
const { getShowsInfoByName } = useApiUtils();

onMounted(async () => {
  if (moviesStore.lastSearchedMovies) {
    loading.value = true;
    moviesQueryResult.value = moviesStore.lastSearchedMovies;
    loading.value = false;
  }
});

const queryMovie = async (movie: string) => {
  movieToQuery.value = movie;
  loading.value = true;
  moviesQueryResult.value = await getShowsInfoByName(movie, "movie");
  loading.value = false;
};

onBeforeUnmount(() => {
  if (moviesQueryResult.value) {
    moviesStore.setLastSearchedMovies(moviesQueryResult.value);
  }
});
</script>

<style scoped>
.grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
