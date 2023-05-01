/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue1: "#343A95",
      blue2: "#000CC9",
      blue3: "#00054D",
      blue4: "#04062D",
      white: "white",
      black: "#19191D",
      green: "#00d8fb",
      background1: "rgba(52, 58, 149, 0.1)",
      background2: "rgba(27, 51, 98, 0.1)",
      background3: "rgba(1, 216, 251, 0.1)",
      gray: "gray",
    },
    fontFamily: {
      sans: ['DM Sans', "sans-serif"],
    },
    fontSize: {
      sx: ['0.7rem', '1rem'],
      sm: ['1rem', '1.1875rem'],
      ss: ['1.25rem', '1.625rem'],
      base: ['1.5rem', '1.9375rem'],
      xl: ['2rem', '2.625rem'],
      'xxl': ['2.45rem', '3.1875rem'],
      '2xl': ['3.5rem', '4.5625rem'],
      '3xl': ['4.5rem', '5.875rem']
    },

    fontWeight: {
      thin: '400',
      hairline: '700',
      extralight: '200',
      light: '300',
    },
    screens: {
      'sm': {'max': '639px'},
      'md': '768px',
      'lg': '992px',
      'xl': '1200px'
    },
    backgroundSize:{

    },
    extend: {
      boxShadow:{
        'lg': '0px 4px 20px rgba(0, 0, 0, 0.25)',
        'xl': '0px 2px 2px rgba(0, 0, 0, 0.25)',
        '2xl': '0px 4px 4px rgba(0, 0, 0, 0.26)',
        '3xl': '1.95px 1.95px 2.6px rgba(0, 216, 251)'
      },
      spacing:{
        '100': '17rem',
        '115': '18rem',
        '110': '19rem',
        '120': '21rem',
        '121': '24.6rem',
        '125': '26rem',
        '126': '28.7',
        '127': '30rem',
        '128': '32rem',
        '129': '33.5rem',
        '131': '36rem',
        '130': '47.5rem',
        '140': '40rem',
        '150': '85rem',
        '90': '90vw'
      },
    },
  },
  plugins: [],
};
