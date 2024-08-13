import featuredSeries from "./featuredSeries.json";
export default defineEventHandler((event) => {
  return {
    api: featuredSeries,
  };
});
