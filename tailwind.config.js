/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        'white-smoke': '#F8F8F8',
        'payne-gray': '#606B79',
        'navy-blue': '#1053FF',
        'jackson-purple': '#444691',
        midnight: '#233043',
        'hawkes-blue': '#D5D9DE',
        'lavender-blue': '#C1D3FE',
        'dark-sapphire': '#0C46D0',
        'very-light-grey': '#CECECE',
        'night-rider': '#313131',
        spindle: '#BDC6D0',
        'spanish-gray': '#9A9A9A',
        solitude: '#EFF1F5',
      },
      animation: {
        shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        shake: {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)',
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)',
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)',
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
