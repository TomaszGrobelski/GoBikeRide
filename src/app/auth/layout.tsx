import { FC, ReactNode } from 'react';
import Image from 'next/image';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex h-screen w-full items-center justify-evenly p-10'>
      <Image
        src='/assets/LoginPage/LoginImg.jpg'
        alt='Zdjęcie strony wejściowej'
        objectFit='cover'
        className='absolute left-0 top-0 -z-10 h-screen w-full '
        layout='fill'
      />
      <div className='flex h-[600px] w-full flex-col items-center justify-center rounded-lg bg-white text-black opacity-95 shadow-lg shadow-black'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
