'use client';

import Link from 'next/link';
import '../../../styles/global.css';
import { menuList } from './navList';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import Logout from '@/ui/atmos/Logout';
import GBRDark from '../../../../public/assets/Logo/GBR-Dark.png';
import GBRLight from '../../../../public/assets/Logo/GBR-Light.png';
import GBRDarkTransparent from '../../../../public/assets/Logo/GRB-DarkTransparent.png';
import GBRLightTransparent from '../../../../public/assets/Logo/GBR-LightTransparent.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

const Nav = () => {
  const router = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const logoSrc = theme === 'light' ? GBRDark : GBRLight;
  const transparentSrc =
    theme === 'light' ? GBRDarkTransparent : GBRLightTransparent;

  const selectedItem = theme === 'light' ? 'bg-white' : 'bg-black';

  const isSmallScreen = useIsSmallScreen();

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
  }, [theme, setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <nav
      className={` flex h-screen ${isSmallScreen ? 'w-20 p-3' : 'w-72 p-6'}  z-20 flex-col items-start justify-between border-r-[1px]`}
    >
      <ul className='flex flex-col items-center justify-center gap-2 space-y-4'>
        <p
          className={`flex items-center gap-2 text-[28px] ${isSmallScreen && 'self-start'}`}
        >
          <Image src={logoSrc} width={50} alt='Logo' />
          {!isSmallScreen && (
            <Image src={transparentSrc} width={170} alt='Logo Transparent' />
          )}
        </p>
        {menuList.map((item) => (
          <li
            className={`flex w-full  justify-start text-nowrap rounded-lg border-[1px] border-gray-300 hover:bg-slate-400 
              ${router.includes(item.link) ? selectedItem : ' '} `}
            key={item.title}
          >
            <Link
              className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${isSmallScreen ? 'pr-4' : 'pr-20'}`}
              href={item.link}
            >
              <Icon icon={item.icon} width={20} height={20} />
              {!isSmallScreen && (
                <div className='text-[18px] '>{item.title}</div>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className='text-[18px] '>
        <Logout />
      </div>
    </nav>
  );
};

export default Nav;
