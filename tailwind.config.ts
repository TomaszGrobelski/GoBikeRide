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
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient':
          'linear-gradient(to top,#110A36,#251462, #341B82, #4C27B5, #6B3AEF, #8961F2, #A587F5)'
      },
      colors:{
        mainPurple: '#5F286B',
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
