/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      customColor: '#FF4137', // Replace with your custom color hex code
      bgCustomColor: '#FF4137;', // Replace with your background custom color hex code
    },
    screens: {
      'custom-width': '885px',
      'custom-width2': '820px'
    },
  
  },
  },
  plugins: [],
}

