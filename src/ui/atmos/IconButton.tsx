import { Icon } from '@iconify/react';

interface IIconButton {
  icon: string;
  ariaLabel: string;
  size?: number;
  onClick?: VoidFunction;
  className?: string;
}

const IconButton = ({
  icon,
  size = 20,
  onClick,
  ariaLabel,
  className
}: IIconButton) => {
  return (
    <button
      onClick={onClick}
      className={`IconButton flex h-10 w-10 items-center justify-center rounded-full hover:bg-white dark:hover:bg-slate-300 ${className} `}
      aria-label={ariaLabel}
    >
      <Icon icon={icon} fontSize={size} />
    </button>
  );
};

export default IconButton;
