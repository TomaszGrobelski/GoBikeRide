import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react';

import { LightTooltip } from '../../Tooltip/LightTooltip';

interface ITableIconButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction;
  icon: string;
  tooltip?: string;
  ariaLabel?: string;
  size?: number;
  color?: string;
  disabled?: boolean;
}

const TableIconButton = ({
  onClick,
  icon,
  tooltip,
  ariaLabel,
  size = 20,
  color = '#63703c',
  disabled,
  ...props
}: ITableIconButton) => {
  return (
    <LightTooltip title={tooltip} placement='top'>
      <div className='hover:rounded-full hover:bg-gray-100'>
        <button
          onClick={onClick}
          className={`IconButton flex h-10 w-10 items-center justify-center rounded-full hover:scale-110 ${props.className}`}
          aria-label={ariaLabel}
          disabled={disabled}
          {...props}
        >
          <Icon icon={icon} fontSize={size} color={color} />
        </button>
      </div>
    </LightTooltip>
  );
};

export default TableIconButton;
