/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html', './public/*.js'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "san-serif"]
      },
      colors: {
        bg: {
          "clr-0": "rgb(248,250,252)",
          "clr-1": "rgb(100, 92, 255)",
          "clr-2": "rgb(241, 80, 37)",
          "clr-3": "rgb(60, 55, 153)"
        },
        txt: {
          "clr-0": "rgb(15, 23, 42)",
          "clr-1": "rgb(51, 65, 85)",
          "clr-2": "rgb(100, 116, 139)"
        }
      },
      screens: {
        sm: "640px",
        md: "800px",
        lg: "1200px"
      }
    },
  },
  plugins: [],
}