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
      "movie-black": "#D8EFD3",
      "movie-grey": "#95D2B3",
      "movie-blue": "#55AD9B",
      "movie-white": "#F1F8E8",
    },
    extend: {},
  },
  plugins: [],
};
