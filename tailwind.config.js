import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'cardie-dark': '#001d3d',
        blue: {
          50: '#edf6f9',
          100: '#caf0f8',
          200: '#ade8f4',
          300: '#90e0ef',
          400: '#48cae4', // Secundario
          500: '#00b4d8',
          600: '#0077b6', // Principal
          700: '#023e8a',
          800: '#03045e',
          900: '#02022b',
          950: '#010116',
          brand1: '#003049',
          brand2: '#669bbc',
        },
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "corporate"], // Temas médicos claros y luminosos
  }
}
