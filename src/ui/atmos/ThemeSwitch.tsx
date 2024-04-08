import { useTheme } from 'next-themes';
import { Icon } from '@iconify/react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className='flex gap-6 w-24 items-center justify-center border-[1px] border-black p-2 px-4 rounded-2xl'>
      <button onClick={() => setTheme('light')}>
        <Icon icon='entypo:light-up' />
      </button>
      <button onClick={() => setTheme('dark')}>
        <Icon icon='iconamoon:mode-dark-fill' />
      </button>
    </div>
  );
};

export default ThemeSwitch;
