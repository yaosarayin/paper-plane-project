module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    // Import them in style.css
    fontFamily: {
     'display': '"Dela Gothic One"',
     'chinese-display' : "'ZCOOL XiaoWei', serif",
     'english-serif': "'EB Garamond', serif",
     'english-sans': "'Josefin Sans', sans-serif",
    //  'chinese-normal' : "'Noto Sans SC', sans-serif;"
    }
  }
}
