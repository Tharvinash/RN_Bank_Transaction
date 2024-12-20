/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        MontserratBold: ['Montserrat-Bold', 'sans-serif'],
        MontserratExtraBold: ['Montserrat-ExtraBold', 'sans-serif'],
        MontserratExtraLight: ['Montserrat-ExtraLight', 'sans-serif'],
        MontserratLight: ['Montserrat-Light', 'sans-serif'],
        MontserratMedium: ['Montserrat-Medium', 'sans-serif'],
        MontserratSemiBold: ['Montserrat-SemiBold', 'sans-serif'],
      },
      colors: {
        primary: '#121433',
        secondary: '#23265A',
        tertiary: '#8F3CFF',
        primaryLight: '#2567f9'
      },
    },
  },
  plugins: [],
}