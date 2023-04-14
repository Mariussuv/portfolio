module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: 'burtons'
      },
      backgroundImage: {
        'space' : "url('/public/background.jpg')"
      }
    },
    colors: {
      primary: "#7B586B",
      primaryhighlight: "#60acc4",
      secondary: "#FFFAFA",
      bg:{
        primary: '#453C41',
        secondary: '#1D0F0F',
        white: '#D4DBE2'
      }
    },
  },
  plugins: [],
}