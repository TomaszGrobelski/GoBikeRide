'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dashboardBG from '@/assets/photos/dashboardBG.jpg';
import light from '@/assets/photos/ftuy4.jpg';
import Modal from '@/store/useModalStore';
import NavBar from '@/ui/organisms/Navigation/NavBar';
import UpperBar from '@/ui/organisms/UpperBar/UpperBar';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';
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
  const [isExpanded, setIsExpanded] = useState(!isSmallScreen);

  const sectionNames = {
    bike: 'Rowerownia',
    'go-bike': 'Go Bike',
    road: 'Trasa',
    hero: '',
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
      className={`relative flex h-full min-h-full font-poppins ${theme === 'light' ? 'bg-white' : 'bg-[#030014]'} `}
    >
      <div className={`absolute inset-0 -z-10`}></div>
      <NavBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <UpperBar />
      <Modal />
      <motion.div
        className={`relative z-0 flex w-full flex-col gap-5 backdrop-blur-md`}
        initial={{ marginLeft: isExpanded ? '5rem' : '16rem' }}
        animate={{ marginLeft: isExpanded ? '5rem' : '16rem' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Typography
          variant='h1'
          sx={{ fontSize: '2rem' }}
          className='text-nowrap pl-6 pt-16 font-roboto text-black dark:text-slate-50'
        >
          {sectionName}
        </Typography>
        {children}
      </motion.div>
    </div>
  );
};

export default DashboardLoyout;
