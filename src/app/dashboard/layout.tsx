'use client';
import Nav from '@/ui/organisms/Navigation/Nav';
import mainPhoto from './bgMain.jpg';
import Image from 'next/image';
import LightBackGround from '../../../public/assets/LightBackGround.jpg';
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={`flex gap-20  dark:bg-[#11111D] `}>
      <Image
        className='absolute -z-10 h-full w-full'
        src={LightBackGround}
        alt='Photo'
      />
      <Nav />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
