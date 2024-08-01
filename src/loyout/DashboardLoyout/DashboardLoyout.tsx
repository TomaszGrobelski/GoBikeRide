'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import dashboardBG from '@/assets/photos/dashboardBG.jpg';
import light from '@/assets/photos/ftuy4.jpg';
import Nav from '@/ui/organisms/Navigation/Nav';
import UpperBar from '@/ui/organisms/UpperBar/UpperBar';
import { Typography } from '@mui/material';
import { useTheme } from 'next-themes';

import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

interface IDashboardLayout {
  children: React.ReactNode;
}
const DashboardLoyout = ({ children }: IDashboardLayout) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = usePathname();
  const isSmallScreen = useIsSmallScreen();

  const sectionNames = {
    bike: 'Rowery',
    'go-bike': 'Go Bike',
    road: 'Trasa',
    hero: 'Strona Główna',
    posts: 'Posty',
    users: 'Lista użytkowników',
    contact: '',
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
    <div
      className={`relative flex h-full min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-[#030014]'} `}
    >
      <div className={`absolute inset-0 -z-10`}></div>
      <Nav />
      <div
        className={`${isSmallScreen ? 'ml-20' : 'ml-72'} relative flex w-full flex-col gap-5 p-6 backdrop-blur-md`}
      >
        <UpperBar />
        <Typography
          variant='h1'
          sx={{ fontSize: '2rem' }}
          className='text-nowrap pt-10 font-rammetto text-black dark:text-slate-50'
        >
          {sectionName}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default DashboardLoyout;
