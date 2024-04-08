'use client';

import Link from 'next/link';
import '../../../styles/global.css';
import { menuList } from './navList';
import { Icon } from '@iconify/react';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { usePathname } from 'next/navigation';
import Logout from '@/ui/atmos/Logout';
import GBRDark from '../../../../public/assets/Logo/GBR-Dark.png';
import GBRLight from '../../../../public/assets/Logo/GBR-Light.png';
import GBRDarkTransparent from '../../../../public/assets/Logo/GRB-DarkTransparent.png';
import GBRLightTransparent from '../../../../public/assets/Logo/GBR-LightTransparent.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Nav = () => {
  const router = usePathname();
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? GBRDark : GBRLight;
  const transparentSrc =
    theme === 'light' ? GBRDarkTransparent : GBRLightTransparent;

  const backColor= theme === 'light' ? 'bg-white' : 'bg-black';
  
  return (
    <nav className=' flex h-screen w-72 flex-col items-start justify-between border-r-[1px] p-6'>
      <ul className='flex flex-col items-center justify-center gap-2 space-y-5'>
        <p className='flex items-center gap-2 text-[28px]'>
          <Image src={logoSrc} width={50} alt='Logo' />
          <Image src={transparentSrc} width={170} alt='Logo Transparent' />
        </p>
        {menuList.map((item) => (
          <li
            className={`flex w-full  justify-start rounded-lg hover:bg-slate-200
              ${router.includes(item.link) ? backColor : ''} `}
            key={item.title}
          >
            <Link
              className='flex w-full items-center justify-start gap-4 py-3 pl-4 pr-28'
              href={item.link}
            >
              <Icon icon={item.icon} width={20} height={20} />
              <div className='text-[18px] '>{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
      <div className='space-y-6 pl-4 text-[18px]'>
        <Logout />
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Nav;
