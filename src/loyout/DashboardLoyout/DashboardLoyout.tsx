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
    bike: 'Garaż',
    'go-bike': 'Go Bike',
    road: '',
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
      className={`relative flex min-h-full font-poppins ${theme === 'light' ? 'bg-lightBackground' : 'bg-[#030014]'} `}
    >
      <NavBar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      <UpperBar />
      <Modal />
      <motion.div
        className={`relative z-0 flex min-h-full w-full flex-col  backdrop-blur-md`}
        initial={{ marginLeft: isExpanded ? '5rem' : '16rem' }}
        animate={{ marginLeft: isExpanded ? '5rem' : '16rem' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Typography
          variant='h1'
          sx={{ fontSize: '2rem' }}
          className='pl-6 pt-20 font-roboto font-bold text-black dark:text-slate-50'
        >
          {sectionName}
        </Typography>
        {children}
      </motion.div>
    </div>
  );
};

export default DashboardLoyout;
