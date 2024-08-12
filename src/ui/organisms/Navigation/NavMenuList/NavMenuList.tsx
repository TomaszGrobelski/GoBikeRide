'use client';

import { usePathname } from 'next/navigation';
import Logout from '@/ui/atmos/Logout';

import { menuList } from './navList';
import NavListItem from './NavListItem';

interface NavMenuProps {
  isExpanded: boolean;
}

const NavMenu = ({ isExpanded }: NavMenuProps) => {
  return (
    <nav className='flex h-full flex-col'>
      <ul className='relative flex h-full flex-col items-center justify-start gap-4'>
        {menuList.map((item) => (
          <NavListItem key={item.title} isExpanded={isExpanded} item={item} />
        ))}

        <Logout isExpanded={isExpanded} />
      </ul>
    </nav>
  );
};

export default NavMenu;
