/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {

        lg: '992px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      colors  : {
        'blue-chalk' : '#E6EDF1',
        'ball-blue' : '#00A8E8',
        'bluish-grey' : '#7F8B8F',
        'green-vogue' : '#003459',
      },
      lineHeight: {
        '110': '110%',
        '150': '150%',
      },
      fontSize: {
      'custom-4xl' : '38px',
      'custom-6xl' : '64px',
      },
      margin: {
        'custom-10': '42px',
      },
      backgroundImage: {
        'hero-image' : "url('../public/assets/images/webp/hero-bg-layer.webp')",
      }
    },
  },
  plugins: [],
}