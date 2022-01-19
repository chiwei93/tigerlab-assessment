module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: '7.72px',
      sm: '9.26px',
      base: '11.11px',
      lg: '13.33px',
      xl: '16px',
      '2xl': '23.04px',
      '3xl': '27.65px',
      '4xl': '33.18px',
      '5xl': '39.81px',
      'large': '82.56px',
    },
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif'],
    },
    colors: {
      gray: '#eeeeee',
      'light-gray': '#e7e7e7',
      'dark-gray': '#7c7c7c',
      green: '#54bf00',
      red: '#f61212',
      black: '#161429',
      'dark-black': '#000000',
      white: '#ffffff',
      purple: '#322e57',
      overlay: 'rgba(0, 0, 0, 0.7)',
    },
    extend: {
      screens: {
        'mobile-lg': '450px',
        'large-screen': '2000px',
      },
    },
  },
  plugins: [],
};
