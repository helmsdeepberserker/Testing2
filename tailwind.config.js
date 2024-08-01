/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["privacyTest.html"],
  theme: {
    screens:{
      'iPhoneSE': '375px',
      'iPhoneXR':'414px',
      'iPhone12Pro':'390px',
      'iPhone14ProMax':'430px',
      'pixel7':'412px',
      'samsungGalaxyS8+':'360px',
      'samsungGalaxyS20Ultra':'412px',
      'iPadMini':'768px',
      'iPadAir':'820px',
      'iPadPro':'1024px',
      'surfacePro7':'912px',
      'surfaceDuo':'540px',
      'galaxyZFold5':'344px',
      'asus':'853px',
      'iPhone12Pro':'390px',
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
