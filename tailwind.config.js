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
        'myyellow':{
          DEFAULT:'#e1dcb7',
          50:'#F5EFCF',
          700:'#E2E1DC'
        },
        'mainbrand':'#f9f5f5'
      },
      animationDelay:{
        'adelay-100':'100ms',
        'adelay-200':'200ms',
        'adelay-300':'300ms',
        'adelay-400':'400ms',
        'adelay-500':'500ms',
        'adelay-600':'600ms',
        'adelay-700':'700ms',
        'adelay-800':'800ms',
        'adelay-900':'900ms',
        'adelay-1000':'1000ms',
      }
    },


  },
  plugins: [
    function({addUtilities,theme,e}) {
      const delayVals = theme('animationDelay');
      const utilities = Object.entries(delayVals).map(([key,value])=>{
        return {
          [`.${e(`adelay-${key}`)}`]:{
            animationDelay: value,
          }
        }
      })
      addUtilities(utilities)
      addUtilities({
        '.tofade': {
          mask: 'linear-gradient(180deg, #ffffff 70%, #ffffff55 97%, transparent)',
        },
        '.tofade-on': {
          mask: 'linear-gradient(180deg, #ffffff 95%, #ffffff55 100%, transparent)',
        },
      })
    
    }
  ],
}

