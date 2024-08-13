import { defineStore } from "pinia";

export const useSeriesStore = defineStore({
  id: "series-store",
  state: () => {
    return {
      featuredSeries: {},
      series: {},
    };
  },
});
