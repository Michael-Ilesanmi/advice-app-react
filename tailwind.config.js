module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-cyan': '#031E26',
      'neon-green': '#52FFA8',
      'gray-blue': '#4E5D73',
      'dark-gray-blue': '#323A49',
      'dark-blue': '#1F2632',
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope'],
      },
      dropShadow: {
        '3xl': '0px 0px 15px #00FF7D',
      }
    },
  },
  plugins: [],
}