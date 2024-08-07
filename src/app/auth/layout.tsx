'use client';

import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { RegistrationProvider } from '@/contexts/RegistrationContext';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen w-full items-center justify-evenly md:p-40 md:py-54'>
      <Image
        src='/assets/LoginPage/ridingBikers.jpg'
        alt='Zdjęcie strony wejściowej'
        className='absolute left-0 top-0 -z-10 h-screen w-full object-cover'
        width={1300}
        height={1300}
      />
      <div className='flex h-full w-full items-center justify-between rounded-lg bg-white text-black opacity-95 shadow-lg shadow-black'>
        <RegistrationProvider>{children}</RegistrationProvider>
      </div>
    </div>
  );
};

export default AuthLayout;
