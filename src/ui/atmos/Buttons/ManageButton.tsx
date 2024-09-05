import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { LightTooltip } from '../Tooltip/LightTooltip';

interface IManageButton {
  handleOpen: VoidFunction;
  tooltipTitle?: string;
}
const ManageButton = ({ handleOpen, tooltipTitle }: IManageButton) => {
  return (
    <LightTooltip title={tooltipTitle} placement='top'>
      <div>
        <button
          onClick={handleOpen}
          className='grid h-16 w-16 place-items-center rounded-full bg-mainColor'
        >
          <Icon
            icon='oui:app-index-management'
            fontSize={32}
            className='text-white'
          />
        </button>
      </div>
    </LightTooltip>
  );
};

export default ManageButton;
