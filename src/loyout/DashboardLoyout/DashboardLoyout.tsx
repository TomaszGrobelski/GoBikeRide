'use client';
import Image from 'next/image';
import Nav from '@/ui/organisms/Navigation/Nav';
import UpperBar from '@/ui/organisms/UpperBar/UpperBar';
import React from 'react';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import dashboardBG from '@/assets/photos/dashboardBG.jpg';
import { useTheme } from 'next-themes';
import light from '@/assets/photos/ftuy4.jpg';
import { useEffect, useState } from 'react';

interface IDashboardLayout {
  children: React.ReactNode;
}
const DashboardLoyout = ({ children }: IDashboardLayout) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = usePathname();

  const sectionNames = {
    bike: 'Rower',
    'go-bike': 'Go Bike',
    road: 'Trasa',
    hero: 'Strona Główna',
    blog: 'Blog',
    contact: 'Kontakt'
  };

  const sectionName =
    sectionNames[(router.split('/').pop() as keyof typeof sectionNames) || ''];

  const dashboardBackGround = theme === 'light' ? light : dashboardBG;

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
    <div className={`flex h-full  `}>
      <Image
        className='absolute -z-10 h-full w-full object-cover'
        src={dashboardBackGround}
        alt='Photo'
      />
      <Nav />
      <div className='flex w-full flex-col p-6 '>
        <UpperBar />

        <Typography
          variant='h1'
          sx={{ fontSize: '2rem' }}
          className=' text-nowrap  text-black dark:text-slate-50'
        >
          {sectionName}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default DashboardLoyout;
