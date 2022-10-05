/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        primary: ['Helvetica'],
      },
      fontSize: {
        xxs: ['12px', '13px'],
        xs12b13: ['12px', '13px'],
        xs: ['12px', '16px'],
        sm: ['14px', '16px'],
        base: ['16px', '18px'],
        lg: ['17px', '24px'],
        lgB: ['18px', '21px'],
        xl: ['20px', '23px'],
        '2xl': ['24px', '28px'],
        '2xlB': ['28px', '32px'],
        '3xl': ['32px', '40px'],
        '4xl': ['36px', '36px'],
        '5xl': ['48px', '55px'],
        '6xl': ['64px', '74px'],
      },
      colors: {
        black: {
          muted: '#240D57',
        },
        gray: {
          muted: '#828282',
          dark: '#4F4F4F',
        },
      },
      boxShadow: {
        iconBox: '0px 0px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
