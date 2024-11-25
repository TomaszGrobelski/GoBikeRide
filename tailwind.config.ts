import { nextui } from '@nextui-org/theme';
import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/[object Object].js',
  ],
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
        mainColor: '#B1C181',
        secoundSea: '#102532',
      },
      backgroundColor: {
        // lightBackground: '#F8F9F9', theme
        lightBackground: '#F7F7F7',
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
  plugins: [
    nextui(),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          backgroundImage: 'linear-gradient(to right, #5F286B, #A057B5)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 'bold',
        },
        '.text-clip': {
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
        },
        '.text-transparent': {
          color: 'transparent',
        },
        '.border-bottom-gradient': {
          position: 'relative',
          display: 'inline-block',
        },
        '.border-bottom-gradient::after': {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '4px', // Wysokość granicy
          background:
            'linear-gradient(to right, transparent, #5F286B, transparent)',
          transform: 'scaleY(0.5)', // Skala Y dla efektu kurczenia się
          transformOrigin: 'center bottom',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
  darkMode: 'class',
};
export default config;
