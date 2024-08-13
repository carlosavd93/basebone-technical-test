import { defineStore } from "pinia";

export const useMoviesStore = defineStore({
  id: "movies-store",
  state: () => {
    return {
      featuredMovies: {},
      movies: {},
    };
  },
});
