import { defineStore } from "pinia";

export const useShowsStore = defineStore({
  id: "shows-store",
  state: () => {
    return {
      featuredMovies: {},
      featuredSeries: {},
      movies: {},
      series: {},
    };
  },
});
