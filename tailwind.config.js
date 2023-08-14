/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'my-image': "url('https://img.freepik.com/free-photo/studio-shot-pretty-black-woman-with-white-shopping-bag-standing-yellow-background-trendy-spring-fashionable-look_273443-10.jpg?w=740&t=st=1692034940~exp=1692035540~hmac=0cc351da3993442b4943187e51a72658de6a9ee7016db65e51a19ca13962aaa3')",
      },
      height: {
        '80vh': '80vh',
      },
    },
  },
  plugins: [],
}

