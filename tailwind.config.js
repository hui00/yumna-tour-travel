/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './scripts/**/*.mjs'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1200px' },
    },
    extend: {
      // System stacks only — no external font requests, so the site works
      // offline, loads instantly and adds no third-party origin.
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'sans-serif',
        ],
        display: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
      colors: {
        // Warm, earthy palette: sand, terracotta, deep green.
        sand: {
          50: '#fbf7f1',
          100: '#f5ece0',
          200: '#e9d8c2',
          300: '#dcc09b',
          400: '#cba474',
          500: '#bd8d58',
          600: '#a9764c',
          700: '#8c5d41',
          800: '#734d3b',
          900: '#5f4133',
        },
        clay: {
          50: '#fdf4f1',
          100: '#fbe6df',
          200: '#f7cec0',
          300: '#f0ad96',
          400: '#e5825f',
          500: '#d9603a',
          600: '#c74a2b',
          700: '#a63a25',
          800: '#883224',
          900: '#712d22',
        },
        forest: {
          50: '#f1f7f3',
          100: '#dcebe1',
          200: '#bcd7c6',
          300: '#91bba3',
          400: '#639a7c',
          500: '#437e60',
          600: '#31654c',
          700: '#28513e',
          800: '#224133',
          900: '#1d372c',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
