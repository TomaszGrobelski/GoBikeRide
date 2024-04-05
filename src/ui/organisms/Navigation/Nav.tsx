'use client'
import Link from 'next/link';
import '../../../styles/global.css';
import { menuList } from './navList';
import { Icon } from '@iconify/react';

const Nav = () => {
  return (
    <nav className='w-[15%] border-r-[1px] h-screen flex justify-center'>
      <ul className=' space-y-4'>
        <li>
          <Link href='/dashboard/hero'>
            {/* <Icon icon='material-symbols:home-outline' /> */}
            <Icon icon="mdi-light:home" />
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/hero'>
            <p>Z trasy</p>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/hero'>
            <p>Twój rower</p>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/contact'>
            <p>Contact</p>
          </Link>
        </li>
        <li>
          <Link href='/'>
            <p>Logout</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
