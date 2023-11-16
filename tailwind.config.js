/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight_black': '#393D3F',
        'raisin_black': '#303436',
        'whisper_white': '#FDFDFF',
        'platinum': '#E7E7E7',
        'mossy': '#00A6A6'
      }
    },
  },
  plugins: [],
}
