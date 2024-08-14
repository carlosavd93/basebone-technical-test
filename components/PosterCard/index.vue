<template>
  <div
    class="w-64 rounded overflow-hidden shadow-lg bg-movie-black flex justify-center"
  >
    <NuxtLink
      :to="`/${showType}/${posterInfo.imdbID}`"
      @click="saveShowToStorage(posterInfo.Title)"
      class="flex flex-col self-center h-80"
    >
      <img
        class="object-scale-down h-2/3 w-4/5 py-2 self-center"
        :src="posterInfo.Poster"
        :alt="posterInfo.Title"
      />
      <div class="px-6 py-4 flex">
        <div class="font-bold text-xl text-center">
          {{ posterInfo.Title }}
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { PosterInfo } from "../../types/PosterInfo";

const props = defineProps<{ posterInfo: PosterInfo; showType: string }>();

const saveShowToStorage = (title: string) => {
  const showLocalData = localStorage.getItem("recently-viewed-titles");
  if (showLocalData) {
    const parsedShowLocalData = JSON.parse(showLocalData);
    const newData = [...parsedShowLocalData, title];
    localStorage.setItem("recently-viewed-titles", JSON.stringify(newData));
  } else {
    const newData = [title];
    localStorage.setItem("recently-viewed-titles", JSON.stringify(newData));
  }
};
</script>

<style scoped>
.card {
  width: 200px;
}
</style>
