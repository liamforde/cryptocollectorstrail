/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
          container: {
      center: true,
    },
      screens: {
      xs: '420px',
    },
         maxWidth: {
        'contain': '1200px',  
      },
       fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

        fontWeight: {
        'extra-light': 300,
      },
       colors: {
       primary: {
      50:  "#fefce8",
      100: "#fdf6b2",
      200: "#fae37a",
      300: "#f7d648",
      400: "#f3d038",
      500: "#ddb82f",
      600: "#c69f27",
      700: "#a87f1f",
      800: "#866419",
      900: "#604814"
    }
      }
    },
  },
  plugins: [],
}