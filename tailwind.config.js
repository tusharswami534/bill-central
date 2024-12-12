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
        'lily-white' : '#EAF9FF',
        'black-bean' : '#00171F',
        'gravel' : '#4b4b4b',
        'midnight-moss' : '#010101',
      },
      lineHeight: {
        '110': '110%',
        '150': '150%',
        '160': '160%',
      },
      fontSize: {
      'custom-4xl' : '38px',
      'custom-6xl' : '64px',
      'custom-3xl': '32px',
      },
      margin: {
        'custom-10': '42px',
        'custom-12': '46px',
        'custom-14': '58px',
      },
      backgroundImage: {
        'hero-image' : "url('../public/assets/images/webp/hero-bg-layer.webp')",
      },
      opacity: {
        94 : '.94',
      },
      gap: {
        'custom-12': '42px',
      },
      backgroundSize: {
        'set' : '100% 810px',
      }
    },
  },
  plugins: [],
}