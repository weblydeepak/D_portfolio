/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        IBM: ['IBM Plex Mono', 'monospace'],
        Ramaraja: ['Ramaraja', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Pacifico: [ 'Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

