'use client';

import '../../../styles/global.css';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import NavBarExpandButton from './NavBarExpandButton';
import NavbarLogo from './NavBarLogo/NavbarLogo';
import NavMenu from './NavMenuList/NavMenuList';

interface NavBarProps {
  isExpanded: boolean;
  setIsExpanded: (boolean: boolean) => void;
}

const NavBar = ({ isExpanded, setIsExpanded }: NavBarProps) => {
  const { theme } = useTheme();

  return (
    <motion.div 
      initial={{
        width: isExpanded ? '80px' : '256px',
        padding: isExpanded ? '12px' : '24px',
      }} 
      animate={{
        width: isExpanded ? '80px' : '256px',
        padding: isExpanded ? '12px' : '24px',
      }} 
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed left-0 top-0 flex h-full ${theme === 'light' ? 'bg-lightBackground' : 'bg-[#010315]'} z-20 flex-col items-start gap-8 border-r-[1px] backdrop-blur-sm`}
    >
      <NavBarExpandButton
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />

      <NavbarLogo isExpanded={isExpanded} />

      <NavMenu isExpanded={isExpanded} />
    </motion.div>
  );
};

export default NavBar;
