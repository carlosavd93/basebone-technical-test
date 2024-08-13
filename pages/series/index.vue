<template>
  <div>
    <SearchInput :showType="'serie'" @queryShow="querySerie"></SearchInput>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <h1>Results for {{ serieToQuery }}</h1>
      <div class="grid">
        <PosterCard
          v-for="serie in seriesQueryResult"
          :key="serie.imdbID"
          :posterInfo="serie"
          :showType="'series'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { PosterInfo } from "../../types/PosterInfo";

const serieToQuery = ref<string>("");
const seriesQueryResult = ref<PosterInfo[]>([]);
const loading = ref<boolean>(false);

const { getShowsInfoByName } = useApiUtils();

const querySerie = async (serie: string) => {
  serieToQuery.value = serie;
  loading.value = true;
  seriesQueryResult.value = await getShowsInfoByName(serie, "series");
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
