import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        justMe: ['JustMeAgainDownHere', 'cursive'],
        kurale: ['Kurale', 'serif'],
        rammetto: ['Rammetto One', 'sans-serif']
      },
      fontWeight: {
        rammetto: '400',
        500: '500',
        600: '600'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        custom: '10px 10px 10px black'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
