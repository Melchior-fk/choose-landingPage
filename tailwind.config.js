/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
    },
    backgroundImage: {
      hero: 'url(/assets/img1.jpg)'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#242423',
          hover: '#BED3C3'
        },
        secondary: '#11151D',
        accent: {
          DEFAULT: '#5784BA',
          hover: '#B6D8F2'
        },
        firstTitle: '#FAFAFA',
        firstPara: '#CFCAC6',
        terciary: {
          DEFAULT: '#000',
          hover: '#4A919E'
        }
      }
    },
  },
  plugins: [],
}