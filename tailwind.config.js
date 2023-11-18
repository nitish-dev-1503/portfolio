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
        'jet': { DEFAULT: '#292929', 100: '#080808', 200: '#101010', 300: '#181818', 400: '#212121', 500: '#292929', 600: '#545454', 700: '#7e7e7e', 800: '#a9a9a9', 900: '#d4d4d4' },
        'onyx': { DEFAULT: '#333333', 100: '#0a0a0a', 200: '#141414', 300: '#1f1f1f', 400: '#292929', 500: '#333333', 600: '#5c5c5c', 700: '#858585', 800: '#adadad', 900: '#d6d6d6' },
        'battleship_gray': { DEFAULT: '#858585', 100: '#1b1b1b', 200: '#353535', 300: '#505050', 400: '#6a6a6a', 500: '#858585', 600: '#9d9d9d', 700: '#b6b6b6', 800: '#cecece', 900: '#e7e7e7' },
        'platinum': { DEFAULT: '#e0e0e0', 100: '#2d2d2d', 200: '#5a5a5a', 300: '#878787', 400: '#b4b4b4', 500: '#e0e0e0', 600: '#e7e7e7', 700: '#ededed', 800: '#f3f3f3', 900: '#f9f9f9' },
        'white_smoke': { DEFAULT: '#f5f5f5', 100: '#313131', 200: '#626262', 300: '#939393', 400: '#c4c4c4', 500: '#f5f5f5', 600: '#f7f7f7', 700: '#f9f9f9', 800: '#fbfbfb', 900: '#fdfdfd' }
      }
    },
  },
  plugins: [],
}
