/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { mainColor: '#38B6FF', mClr: '#38B6FF', sClr: '#FF3131' },
    },
  },
  // plugins: [require("daisyui")],
};
