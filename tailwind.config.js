  /** @type {import('tailwindcss').Config} */
  export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#2D0669',
          secondary: '#140141',
          yellow: '#ffff00',
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(to right, #13072E, #3D1794)',
        },
        fontFamily: {
          orbitron: ['Orbitron', 'sans-serif'],
          clashDisplay: ['Clash Display', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
