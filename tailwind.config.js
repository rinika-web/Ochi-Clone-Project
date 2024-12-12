const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,woff}',
  ],
  theme: {
    extend: {
      fontFamily: {
        founders: ['FoundersGrotesk'],
        nemu: ['NeueMontreal'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function ({ addBase }) {
      addBase({
        '@font-face': {
          fontFamily: 'FoundersGrotesk',
          src: 'url("/src/fonts/FoundersGrotesk.woff") format("woff")',
          fontWeight: 'normal',
          fontStyle: 'normal',
        },
      });
    }),
  ],
};
