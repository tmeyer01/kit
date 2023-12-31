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
        heroLanding: 'url(/assets/hero/hero-background.png)',
        heroAdventures: 'url(/assets/hero/hero-adventures.jpg)',
        treeToSea: 'url(/assets/images/adventures/tree2sea/hero.png)',
      },
      fontFamily: {
        alexBrush: [`var(--font-alexBrush)`, 'sans-serif'],
        montserrat: [`var(--font-montserrat)`, 'sans-serfif'],
        anton: [`var(--font-anton)`, 'sans-serfif'],
      },
      colors: {
        text: '#130e01',
        background: '#c7c7c7',
        primary: '#91908d',
        secondary: '#151414',
        accent: {
          DEFAULT: '#91908d',
          hover: '#6519c6',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
