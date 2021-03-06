module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        3: '3px'
      },
      spacing: {
        '18': '4.5rem'
      },
      colors: {
        tgray: {
          100: '#E0E0E0',
          200: '#BDBDBD',
          300: '#828282',
          400: '#7B8093',
          500: '#4C4B58',
          600: '#2C2A35',
          700: '#1F2025',
          800: '#131417',
          900: '#0D0D0F'
        },
        tblue: {
          200: '#2F80ED'
        },
        tred: {
          100: '#CD6767',
          200: '#EB5757'
        },
        tgreen: {
          200: '#27AE60'
        },
        boxShadow: {
          'inner-thick': 'inset 2px 2px 4px 1px rgba(0, 0, 0, 0.25)'
        }
      },
      fontFamily: {
        serif: ['Work Sans']
      },
      backgroundImage: () => ({
        'landing-page': 'url(\'landing-bg.svg\')'
      })
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'disabled'],
      opacity: ['disabled'],
      cursor: ['disabled'],
      textColor: ['active']
    }
  },
  plugins: []
}
