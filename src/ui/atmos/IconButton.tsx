import { Icon } from '@iconify/react';

interface IIconButton {
  icon: string;
  ariaLabel: string;
  size?: number;
  onClick?: VoidFunction;
}

const IconButton = ({ icon, size = 20, onClick, ariaLabel }: IIconButton) => {
  return (
    <button
      onClick={onClick}
      className='IconButton flex h-10 w-10 items-center justify-center rounded-full hover:bg-white dark:hover:bg-slate-300  '
      aria-label={ariaLabel}
    >
      <Icon icon={icon} fontSize={size} />
    </button>
  );
};

export default IconButton;
