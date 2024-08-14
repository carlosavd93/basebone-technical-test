import { defineStore } from "pinia";
import type { PosterInfo } from "../types/PosterInfo";

export const useMoviesStore = defineStore({
  id: "movies-store",
  state: () => {
    return {
      lastSearchedMovieTitle: "",
      lastSearchedMovies: [] as PosterInfo[],
    };
  },
  actions: {
    setLastSearchedMovies(movies: PosterInfo[]) {
      this.lastSearchedMovies = movies;
    },
    setLastSearchedMovieTitle(title: string) {
      this.lastSearchedMovieTitle = title;
    },
  },
});
