'use client';

import Link from 'next/link';

import '../../../styles/global.css';

import { usePathname } from 'next/navigation';
import Logout from '@/ui/atmos/Logout';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

import NavbarLogo from './NavbarLogo';
import { menuList } from './navList';

const Nav = () => {
  const router = usePathname();
  const { theme } = useTheme();

  const selectedItem =
    theme === 'light'
      ? 'bg-white underline decoration-[#E468A5] '
      : 'bg-[#F8207F]';

  const isSmallScreen = useIsSmallScreen();

  return (
    <div //NavbarContainer
      className={` flex  ${isSmallScreen ? 'w-20 p-3' : 'w-72 p-6'} ${theme === 'light' ? 'bg-white' : 'bg-[#010315]'}  z-20 flex-col items-start gap-8 border-r-[1px] backdrop-blur-sm`}
    >
      <NavbarLogo />
      <nav>
        <ul className='flex  flex-col items-center  justify-center gap-2 space-y-4'>
          {menuList.map((item) => (
            <li
              className={`flex w-full justify-start text-nowrap rounded-lg border-[1px] border-b-8 border-r-8 border-[#5F286B] shadow-md backdrop-blur-xl duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:border-b-4 hover:border-r-4
              ${router.includes(item.link) ? selectedItem : 'hover:bg-slate-400'} `}
              key={item.title}
            >
              <Link
                className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${isSmallScreen ? 'pr-4' : 'pr-20'} `}
                href={item.link}
              >
                <Icon icon={item.icon} width={20} height={20} />
                {!isSmallScreen && (
                  <p className='text-[16px] flex-grow '>{item.title}</p>
                )}
              </Link>
            </li>
          ))}
          <Logout />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
