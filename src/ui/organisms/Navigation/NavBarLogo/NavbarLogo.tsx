'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

import GBRDark from '/public/assets/Logo/GBR-Dark.png';
import GBRLight from '/public/assets/Logo/GBR-Light.png';
import GBRLightTransparent from '/public/assets/Logo/GBR-LightTransparent.png';
import GBRDarkTransparent from '/public/assets/Logo/GRB-DarkTransparent.png';

interface NavbarLogoProps {
  isExpanded: boolean;
}

const NavbarLogo = ({ isExpanded }: NavbarLogoProps) => {
  const { theme } = useTheme();
  const logoSrc = theme === 'light' ? GBRDark : GBRLight;
  const transparentSrc =
    theme === 'light' ? GBRDarkTransparent : GBRLightTransparent;

  return (
    <div
      className={`mt-12 flex items-center gap-2 text-[28px] ${isExpanded && 'self-start'}`}
    >
      <div>
        <Image src={logoSrc} width={50} height={50} alt='Logo' />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {!isExpanded && (
          <Image src={transparentSrc} width={170} alt='Logo Transparent' />
        )}
      </motion.div>
    </div>
  );
};

export default NavbarLogo;
