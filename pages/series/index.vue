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
import { onMounted, onBeforeUnmount, ref } from "vue";
import type { PosterInfo } from "../../types/PosterInfo";

const serieToQuery = ref<string>("");
const seriesQueryResult = ref<PosterInfo[]>([]);
const loading = ref<boolean>(false);

const seriesStore = useSeriesStore();
const { getShowsInfoByName } = useApiUtils();

onMounted(async () => {
  if (seriesStore.lastSearchedSeries) {
    loading.value = true;
    seriesQueryResult.value = seriesStore.lastSearchedSeries;
    loading.value = false;
  }
});

const querySerie = async (serie: string) => {
  serieToQuery.value = serie;
  loading.value = true;
  seriesQueryResult.value = await getShowsInfoByName(serie, "series");
  loading.value = false;
};

onBeforeUnmount(() => {
  if (seriesQueryResult.value) {
    seriesStore.setLastSearchedSeries(seriesQueryResult.value);
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
