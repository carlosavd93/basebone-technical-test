import featuredMovies from "./featuredMovies.json";
export default defineEventHandler((event) => {
  return {
    api: featuredMovies,
  };
});
