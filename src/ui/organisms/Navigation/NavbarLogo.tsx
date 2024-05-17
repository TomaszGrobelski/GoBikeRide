'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

import GBRDark from '../../../../public/assets/Logo/GBR-Dark.png';
import GBRLight from '../../../../public/assets/Logo/GBR-Light.png';
import GBRLightTransparent from '../../../../public/assets/Logo/GBR-LightTransparent.png';
import GBRDarkTransparent from '../../../../public/assets/Logo/GRB-DarkTransparent.png';

const NavbarLogo = () => {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? GBRDark : GBRLight;
  const transparentSrc =
    theme === 'light' ? GBRDarkTransparent : GBRLightTransparent;
  const isSmallScreen = useIsSmallScreen();

  return (
    <div
      className={`flex items-center gap-2 text-[28px] ${isSmallScreen && 'self-start'}`}
    >
      <Image src={logoSrc} width={50} alt='Logo' />
      {!isSmallScreen && (
        <Image src={transparentSrc} width={170} alt='Logo Transparent' />
      )}
    </div>
  );
};

export default NavbarLogo;
