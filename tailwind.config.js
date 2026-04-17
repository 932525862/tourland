/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main1':'#ffffff',
        'main':'#9fd1f0',
		'custom-green': '#01294c',
      },
      boxShadow:{
        "card":"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
      }
    },
  },
  plugins: [],
};
