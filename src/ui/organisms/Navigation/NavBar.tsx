'use client';

import '../../../styles/global.css';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

import NavBarExpandButton from './NavBarExpandButton';
import NavbarLogo from './NavBarLogo/NavbarLogo';
import NavMenu from './NavMenuList/NavMenuList';

interface NavBarProps {
  isExpanded: boolean;
  setIsExpanded: (boolean: boolean) => void;
}

const NavBar = ({ isExpanded, setIsExpanded }: NavBarProps) => {
  const router = usePathname();
  const { theme } = useTheme();
  const isSmallScreen = useIsSmallScreen();
  // const [isExpanded, setIsExpanded] = useState(!isSmallScreen);

  const selectedItem =
    theme === 'light'
      ? 'bg-white underline decoration-[#E468A5] '
      : 'bg-[#F8207F]';

  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div //NavbarContainer
      initial={{
        width: isExpanded ? '80px' : '288px',
        padding: isExpanded ? '12px' : '24px',
      }} // Ustawienia początkowe dla animacji
      animate={{
        width: isExpanded ? '80px' : '288px',
        padding: isExpanded ? '12px' : '24px',
        
      }} // Wartości docelowe dla animacji
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={`fixed left-0 top-0 flex h-full  ${theme === 'light' ? 'bg-white' : 'bg-[#010315]'} z-20 flex-col items-start gap-8 border-r-[1px] backdrop-blur-sm`}
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
