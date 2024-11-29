/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navyBlue: '#0f172a',
        charcoalBlue: '#1e293b',
        raisinBlack: '#2a2438',
        darkBlueGreen: '#0d1b2a',
        mintGreen: '#00b894',
        slateGray:'#1f1f1f',
        onyx:'#2a2a2a',
        ashGray:'#484848',
        deepSpace:'#0d1117',
        ecllipseBlue:'#1b1f3b',
        blackPearl:'#0a0e13',
        voidBlack:'#020305',
      },
      boxShadow: {
        'gradient': '0 4px 30px rgba(255, 0, 0, 0.5), 0 0 25px rgba(0, 0, 255, 0.5)',
      },
    },
  },
  variants:{},
  plugins: [],
}