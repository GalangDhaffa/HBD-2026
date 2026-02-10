/** @type {import('tailwindcss').Config} */
module.exports = {
  // Perhatikan tanda ** (bintang dua) ini. Jangan dihapus!
  content: ["./**/*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        'love-pink': '#ff6b6b',
        'soft-pink': '#ffe3e3',
        'paper': '#fff0f5',
      }
    },
  },
  plugins: [],
}