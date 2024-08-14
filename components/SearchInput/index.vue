<template>
  <div class="flex items-center max-w-sm mx-auto">
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
      <input
        type="text"
        id="simple-search"
        class="bg-movie-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
        :placeholder="`Search for a ` + showType"
        v-model="show"
        required
      />
    </div>
    <button
      class="p-2.5 ms-2 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      @click="queryShow(show)"
    >
      <svg
        class="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
        />
      </svg>
      <span class="sr-only">Search</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ showType: string }>();

const show = ref<string>("");
const emit = defineEmits(["queryShow"]);

const queryShow = (show: string) => {
  emit("queryShow", show);
};
</script>
