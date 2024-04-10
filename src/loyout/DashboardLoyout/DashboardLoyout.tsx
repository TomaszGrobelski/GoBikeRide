'use client';
import Image from 'next/image';
import Nav from '@/ui/organisms/Navigation/Nav';
import UpperBar from '@/ui/organisms/UpperBar/UpperBar';
import React from 'react';
import LightBackGround from '../../../public/assets/LightBackGround.jpg';
import { Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

interface IDashboardLayout {
  children: React.ReactNode;
}
const DashboardLoyout = ({ children }: IDashboardLayout) => {
  const router = usePathname();

  const sectionNames = {
    bike: 'Rower',
    road: 'Trasa',
    hero: 'Strona Główna',
    blog: 'Blog',
    contact: 'Kontakt'
  };

  const sectionName =
    sectionNames[(router.split('/').pop() as keyof typeof sectionNames) || ''];

  return (
    <div className={`flex dark:bg-[#11111D] `}>
      <Image
        className='absolute -z-10 h-full w-full'
        src={LightBackGround}
        alt='Photo'
      />
      <Nav />
      <div className='flex w-full max-w-[1300px] flex-col p-6'>
        <UpperBar />
        <Typography
          variant='h1'
          sx={{ fontSize: '2rem' }}
          className=' text-nowrap text-slate-50'
        >
          {sectionName}
        </Typography>
        {children}
      </div>
    </div>
  );
};

export default DashboardLoyout;
