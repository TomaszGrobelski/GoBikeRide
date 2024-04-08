'use client';

import Link from 'next/link';
import '../../../styles/global.css';
import { menuList } from './navList';
import { Icon } from '@iconify/react';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { usePathname } from 'next/navigation';
import Logout from '@/ui/atmos/Logout';

const Nav = () => {
  const router = usePathname();
  console.log(router.split('/'));
  return (
    <nav className=' w-48 py-6 border-r-[1px] h-screen flex flex-col justify-between items-center'>
      <ul className='flex flex-col justify-center gap-2 items-center space-y-5'>
        {menuList.map((item) => (
          <li
            className={` px-10 py-2 
              ${router.includes(item.link) ? ' bg-gray-200 rounded-lg  ' : ''} `}
            key={item.title}
          >
            <Link
              className='flex gap-4 items-center'
              href={item.link}
            >
              <Icon icon={item.icon} width={20} height={20} />
              <div className=' font-poppins text-[18px]'>{item.title}</div>
            </Link>
          </li>
        ))}
      </ul>
      <div className=' space-y-4'>
        <Logout />
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Nav;
