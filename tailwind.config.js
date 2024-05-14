/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: "'Mulish', sans-serif",
        josefin_sans: "'Josefin Sans', sans-serif",
      },
         
      backgroundImage: {
        'bannerImg': "url('/src/assets/bannerMain.jpeg')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
}

