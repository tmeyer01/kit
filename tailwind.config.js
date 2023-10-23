/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',

  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1310px',
    },
    extend: {
      backgroundImage: {
        singerOverlay: 'url(/assets/hero/singer-overlay.png)',
        heroBackground: 'url(/assets/hero/hero-background.png)',
        newsletter: 'url(/assets/newsletter/bg.png)',
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sans-serfif'],
        anton: [`var(--font-anton)`, 'sans-serfif'],
      },
      colors: {
        // primary: '#06062a',
        // secondary: '#151538',
        // tertiary: '#242445',
        text: '#000000',
        background: '#f7f7f7',
        primary: '#6e6e6e',
        secondary: '#cfcfcf',
        accent: {
          // DEFAULT: '#7f1cfc',
          DEFAULT: '#696969',
          hover: '#6519c6',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
