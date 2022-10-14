/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize:{
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    
    colors: {
      transparent:'transparent',
      chocolate: '#D2691E',
      black:'#000',
      saddlebrown: '#AD522D',
      sandybrown: '#F4A460',
      White:'#FFF',
      gray:{
       900:'#121214',
       800:'#202024',
       400:'#7C7C8A',
       200:'#C4C4CC',
       100:'#E1E1E6',
      },
      beije:{
      900:'#D2B48C',
      700:'#DEB887',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
