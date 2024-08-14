<template>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-screen-xl">
      <div class="my-8 w-96 self-center">
        <SearchInput
          :showType="'series'"
          @queryShow="querySeries"
        ></SearchInput>
      </div>
      <div v-if="loading" class="self-center text-2xl">Loading...</div>
      <div v-else class="flex justify-center">
        <div
          v-if="seriesQueryResult.length > 0"
          class="flex mx-2 items-center flex-col"
        >
          <span v-if="seriesToQuery" class="text-2xl uppercase mb-5"
            >Results for {{ seriesToQuery }}</span
          >
          <div class="flex flex-wrap">
            <div
              v-for="series in seriesQueryResult"
              :key="series.imdbID"
              class="w-1/4 px-4 my-4"
            >
              <PosterCard :posterInfo="series" :showType="'series'" />
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
import { onMounted, onBeforeUnmount, ref } from "vue";
import type { PosterInfo } from "../../types/PosterInfo";

const seriesToQuery = ref<string>("");
const seriesQueryResult = ref<PosterInfo[]>([]);
const loading = ref<boolean>(false);

const seriesStore = useSeriesStore();
const { getShowsInfoByName } = useApiUtils();

onMounted(async () => {
  if (seriesStore.lastSearchedSeries) {
    loading.value = true;
    seriesToQuery.value = seriesStore.lastSearchedSeriesTitle;
    seriesQueryResult.value = seriesStore.lastSearchedSeries;
    loading.value = false;
  }
});

const querySeries = async (series: string) => {
  seriesToQuery.value = series;
  seriesStore.setLastSearchedSeriesTitle(seriesToQuery.value);
  loading.value = true;
  seriesQueryResult.value = await getShowsInfoByName(series, "series");
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
