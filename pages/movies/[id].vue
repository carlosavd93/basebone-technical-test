<template>
  <div class="bg-gray-100 py-8">
    <div v-if="loading">Loading...</div>
    <div v-else class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row -mx-4">
        <div class="md:flex-1 px-4">
          <div class="rounded-lg bg-gray-300 mb-4">
            <img
              class="w-full h-full object-cover"
              :src="showInfo.Poster"
              :alt="showInfo.Title"
            />
          </div>
        </div>
        <div class="md:flex-1 px-4">
          <h2 class="text-2xl font-bold text-gray-800 mb-2">
            {{ showInfo.Title }}
          </h2>
          <p class="text-gray-600 text-sm mb-4">
            {{ showInfo.Plot }}
          </p>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Director: </span>
              <span class="text-gray-600">{{ showInfo.Director }}</span>
            </div>
            <div class="mr-4">
              <span class="font-bold text-gray-700">Year: </span>
              <span class="text-gray-600">{{ showInfo.Year }}</span>
            </div>
            <div>
              <span class="font-bold text-gray-700 d">Runtime: </span>
              <span class="text-gray-600">{{ showInfo.Runtime }}</span>
            </div>
          </div>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Metascore: </span>
              <span class="text-gray-600">{{ showInfo.Metascore }}</span>
            </div>
            <div class="mr-4">
              <span class="font-bold text-gray-700">IMDB Rating: </span>
              <span class="text-gray-600">{{ showInfo.imdbRating }}</span>
            </div>
          </div>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Genre: </span>
              <span class="text-gray-600">{{ showInfo.Genre }}</span>
            </div>
          </div>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Actors: </span>
              <span class="text-gray-600">{{ showInfo.Actors }}</span>
            </div>
          </div>
          <div class="flex mb-4">
            <div class="mr-4">
              <span class="font-bold text-gray-700">Awards: </span>
              <span class="text-gray-600">{{ showInfo.Awards }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import type { Show } from "../../types/types";

const showInfo = ref<Show>({
  Title: "",
  Year: "",
  imdbID: "",
  Type: "",
  Poster: "",
  Rated: "",
  Released: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Writer: "",
  Actors: "",
  Plot: "",
  Language: "",
  Country: "",
  Awards: "",
  Ratings: [
    {
      Source: "",
      Value: "",
    },
  ],
  Metascore: "",
  imdbRating: "",
  imdbVotes: "",
  DVD: "",
  BoxOffice: "",
  Production: "",
  Website: "",
});
const loading = ref<boolean>(true);

const route = useRoute();
const { getShowInfoById } = useApiUtils();

onMounted(async () => {
  const response = await getShowInfoById(route.params.id);
  console.log(response);
  showInfo.value = response;
  loading.value = false;
});
</script>
