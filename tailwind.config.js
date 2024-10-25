/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing:{
        'sectionbase': '40px',
        'sectionview':'3rem',
        'cardpaddingbase': '2rem',
      },
      content:{
        'conactinfo':'"yyyy"'
      },
      colors:{
        'tilt':{
          DEFAULT:'#F4E6E6',
          100:'#f8e0e0',
          300:'#fcd9d9'
        },
        'mygrey':'#eeede7',
        'myyellow':'#e1dcb7'
      }
    },


  },
  plugins: [],
}

