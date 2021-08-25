module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      
    extend: {
        colors:{
            greenM: 'rgb(0,251,170)', // #00fbac
            redM: 'rgb(250,70,41)', // #00fbac

          },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
