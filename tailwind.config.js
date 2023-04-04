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
      primary: "#76A1A7",
      primaryhighlight: "#60acc4",
      secondary: "#D9C5BC",
      bg:{
        primary: '#107980',
        secondary: '#B6ADAF',
        white: '#EDE1CF'
      }
    },
  },
  plugins: [],
}