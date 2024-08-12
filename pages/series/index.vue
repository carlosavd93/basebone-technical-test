<template>
  <div>
    <SearchInput :showType="'serie'" @queryShow="queryMovie"></SearchInput>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>Results for {{ movieToQuery }}</h1>
      <div class="grid">
        <PosterCard
          v-for="serie in seriesQueryResult"
          :key="serie.imdbID"
          :posterInfo="serie"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PosterInfo } from "../../types/PosterInfo";
import getShowsInfo from "../../api/getShowsInfo";

const serieToQuery = ref<string>("");
const seriesQueryResult = ref<PosterInfo[]>([]);
const loading = ref<boolean>(false);

const queryMovie = async (serie: string) => {
  serieToQuery.value = serie;
  loading.value = true;
  seriesQueryResult.value = await getShowsInfo(serie);
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
