import { transform } from 'next/dist/build/swc';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        justMe: ['JustMeAgainDownHere', 'cursive'],
        kurale: ['Kurale', 'serif'],
        rammetto: ['Rammetto One', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        rammetto: '400',
        500: '500',
        600: '600',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custom-gradient':
          'linear-gradient(to top,#110A36,#251462, #341B82, #4C27B5, #6B3AEF, #8961F2, #A587F5)',
      },
      colors: {
        mainPurple: '#5F286B',
        // mainPurple: '#102532',
        secoundSea: '#102532',
      },
      boxShadow: {
        custom: '10px 10px 10px black',
      },
      keyframes: {
        slideRightAndBack: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-600px)' },
        },
      },
      animation: {
        slideRightAndBack: 'slideRightAndBack 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
