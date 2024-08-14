import featuredMovies from "./featuredMovies.json";
export default defineEventHandler((event) => {
  return {
    data: featuredMovies,
  };
});
