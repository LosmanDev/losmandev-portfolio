/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        30: '30px',
        48: '48px',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: 'rgb(45,46,50)',

          secondary: 'rgb(45,46,50)',

          accent: 'rgb(255,255,255)',

          neutral: 'rgb(0,0,0)',

          'base-100': ' rgb(249,249,249)',

          info: 'rgba(0, 0, 0, 0)',

          success: '#146c56',

          warning: '#fccc59',

          error: '#f51449',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};
