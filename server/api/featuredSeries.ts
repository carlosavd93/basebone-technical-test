import featuredSeries from "./featuredSeries.json";
export default defineEventHandler((event) => {
  return {
    data: featuredSeries,
  };
});
