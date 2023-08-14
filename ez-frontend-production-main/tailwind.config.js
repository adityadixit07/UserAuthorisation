/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 0px 8px 1px rgb(100, 99, 96)',
        'profileGreen': 'inset 0 0 10px #3DF554',
      },
    }
  },
  // screens: {
  //   'tablet': '640px',

  //   'laptop': '1024px',

  //   'desktop': '1280px',
  // },
  plugins: [],
}



