/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
    screens: {
      'mobile':{'max':'500px'} ,
    }
  },
  plugins: [],
}

