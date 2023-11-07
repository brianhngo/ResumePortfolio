/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '390px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      fontFamily: {
        'courier-new': ['Courier New', 'monospace'],
      },
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        custom: '1500px',
      },
    },
  },
  plugins: [],
};
