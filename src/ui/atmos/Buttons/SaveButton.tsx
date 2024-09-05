import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ISaveButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: VoidFunction;
  isLoading?: boolean;
}
const SaveButton = ({ onClick, isLoading, ...props }: ISaveButton) => {
  return (
    <button
      onClick={onClick}
      className='group relative overflow-hidden rounded-3xl border-[1px] border-green-300 bg-stone-200 px-5 py-[6px] font-semibold text-gray-800 transition-all duration-1000'
      {...props}
    >
      <p className='relative z-10 flex items-center justify-center gap-2'>
        <span className=''>
          {isLoading ? (
            <Icon icon='line-md:loading-loop' fontSize={18} />
          ) : (
            <Icon icon='heroicons-outline:save' fontSize={22} />
          )}
        </span>
        <span>Zapisz</span>
      </p>
      <span className='absolute inset-0 origin-left scale-x-0 transform bg-green-400 transition-transform duration-500 group-hover:scale-x-100'></span>
    </button>
  );
};

export default SaveButton;
