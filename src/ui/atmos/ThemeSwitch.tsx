import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(theme === 'dark');

  const toggleTheme = () => {
    setTheme(isChecked ? 'light' : 'dark');
    setIsChecked(!isChecked);
  };

  return (
    <div className='relative w-20'>
      <button
        onClick={toggleTheme}
        className={`flex items-center justify-center gap-1 rounded-full border-[2px] ${isChecked ? 'border-black' : 'border-white'} bg-[#F8207F] p-2 px-5 focus:outline-none dark:border-white`}
        aria-label='Przełącz motyw'
      >
        <div
          className={`absolute h-8 w-8 rounded-full bg-white transition-transform duration-300 ${
            isChecked ? 'translate-x-6' : '-translate-x-6'
          }`}
        ></div>
        <Icon
          icon='iconamoon:mode-dark-fill'
          fontSize={18}
          color='#11111D'
          className={`${!isChecked && 'opacity-0'}`}
        />
        <Icon
          icon='heroicons:sun-16-solid'
          fontSize={18}
          color='yellow'
          className={`${isChecked && 'opacity-0'}`}
        />
      </button>
    </div>
  );
};

export default ThemeSwitch;
