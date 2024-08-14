<template>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-screen-xl">
      <div class="my-8 w-96 self-center">
        <SearchInput :showType="'movie'" @queryShow="queryMovie"></SearchInput>
      </div>
      <div v-if="loading" class="self-center text-2xl">Loading...</div>
      <div v-else class="flex justify-center">
        <div
          v-if="moviesQueryResult.length > 0"
          class="flex mx-2 items-center flex-col"
        >
          <span v-if="movieToQuery" class="text-2xl uppercase mb-5"
            >Results for {{ movieToQuery }}</span
          >
          <div class="flex flex-wrap">
            <div
              v-for="movie in moviesQueryResult"
              :key="movie.imdbID"
              class="w-1/4 px-4 my-4"
            >
              <PosterCard :posterInfo="movie" :showType="'movies'" />
            </div>
          </div>
        </div>
        <div v-else>
          <span class="text-2xl">No results for the provided Title</span>
        </div>
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
    movieToQuery.value = moviesStore.lastSearchedMovieTitle;
    moviesQueryResult.value = moviesStore.lastSearchedMovies;
    loading.value = false;
  }
});

const queryMovie = async (movie: string) => {
  movieToQuery.value = movie;
  moviesStore.setLastSearchedMovieTitle(movieToQuery.value);
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
