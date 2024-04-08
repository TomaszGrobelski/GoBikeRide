import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      fontWeight: {
        500: '500',
        600: '600'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#F0F0F0'
        },
        dark: {
          primary: '#ffffff',
          secondary: '#1A1A1A'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};
export default config;
