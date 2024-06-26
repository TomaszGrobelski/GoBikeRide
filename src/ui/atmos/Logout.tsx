'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

const Logout = () => {
  const isSmallScreen = useIsSmallScreen();
  const { theme } = useTheme();
  const router = usePathname();

  const selectedItem =
    theme === 'light'
      ? 'bg-white underline decoration-[#E468A5] '
      : 'bg-[#F8207F]';

  return (
    <li
      className={`flex w-full justify-start text-nowrap rounded-lg border-[1px] border-b-8 border-r-8 border-[#5F286B] text-[16px] shadow-md backdrop-blur-xl duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:border-b-4 hover:border-r-4 ${router.includes('/logout') ? selectedItem : 'hover:bg-slate-400'} `}
    >
      <Link href='/'>
        <div
          className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${isSmallScreen ? 'pr-4' : 'pr-20'} `}
        >
          <Icon icon='material-symbols:logout' height={20} width={20}></Icon>
          {!isSmallScreen && <p>Logout</p>}
        </div>
      </Link>
    </li>
  );
};

export default Logout;
