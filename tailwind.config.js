/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/pages/TodosPrac.vue', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [
    require('flowbite/plugin')
   ],
   content: [
    "./node_modules/flowbite/**/*.js"
   ]
 }
