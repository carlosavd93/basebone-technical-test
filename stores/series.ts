import { defineStore } from "pinia";
import type { PosterInfo } from "../types/PosterInfo";

export const useSeriesStore = defineStore({
  id: "series-store",
  state: () => {
    return {
      lastSearchedSeriesTitle: "",
      lastSearchedSeries: [] as PosterInfo[],
    };
  },
  actions: {
    setLastSearchedSeries(series: PosterInfo[]) {
      this.lastSearchedSeries = series;
    },
    setLastSearchedSeriesTitle(title: string) {
      this.lastSearchedSeriesTitle = title;
    },
  },
});
