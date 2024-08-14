/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      "movie-black": "#0D3FA9",
      "movie-grey": "#FFA900",
      "movie-blue": "#3d65ba",
      "movie-white": "#F1F8E8",
    },
    extend: {},
  },
  plugins: [],
};
