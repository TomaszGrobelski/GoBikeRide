import { Icon } from '@iconify/react';

interface IIconButton {
  icon: string;
  ariaLabel: string;
  size?: number;
  onClick?: VoidFunction;
  className?: string;
  color?: string;
  disabled?: boolean;
}

const IconButton = ({
  icon,
  size = 20,
  onClick,
  ariaLabel,
  className,
  color,
  disabled,
}: IIconButton) => {
  return (
    <button
      onClick={onClick}
      className={`IconButton flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 ${className} `}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      <Icon icon={icon} fontSize={size} color={color} />
    </button>
  );
};

export default IconButton;
