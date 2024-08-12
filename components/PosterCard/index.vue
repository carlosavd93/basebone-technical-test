<template>
  <div class="card">
    <NuxtLink :to="`/movies/${posterInfo.imdbID}`">
      <img :src="posterInfo.Poster" :alt="posterInfo.Title" />
      <h3>{{ posterInfo.Title }}</h3>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import type { PosterInfo } from "../../types/PosterInfo";

const props = defineProps<{ posterInfo: PosterInfo }>();
</script>

<style scoped>
.card {
  width: 200px;
}
</style>
