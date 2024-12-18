import plugin from 'tailwindcss/plugin';


export default {
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
