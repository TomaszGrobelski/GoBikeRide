import { Icon } from '@iconify/react/dist/iconify.js';

interface NavBarExpandButtonProps {
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}
const NavBarExpandButton = ({
  isExpanded,
  setIsExpanded,
}: NavBarExpandButtonProps) => {
  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <button onClick={toggleNavBar} className='absolute right-7 top-4'>
      {isExpanded ? (
        <Icon icon='ooui:menu' fontSize={26} />
      ) : (
        <Icon icon='bx:menu-alt-right' fontSize={30} />
      )}
    </button>
  );
};

export default NavBarExpandButton;
