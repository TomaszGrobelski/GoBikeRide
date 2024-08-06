'use client';

import { Icon } from '@iconify/react/dist/iconify.js';

interface ICustomModal {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function CustomModal({
  isOpen = true,
  onOpenChange,
  children,
}: ICustomModal) {
  return (
    <>
      <div
        className={` ${isOpen ? 'fixed' : 'hidden'} inset-0 z-[120] flex h-full w-full items-center justify-center backdrop-blur-sm`}
        onClick={() => onOpenChange(false)}
      >
        <div className='absolute inset-0 bg-black opacity-50' />

        <div
          className='relative z-[130] m-4 h-auto max-h-[300px] w-full max-w-[500px] rounded-2xl border-[1px] bg-white p-4 text-black'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onOpenChange(false)}
            className='absolute right-4 top-4 p-1 hover:rounded-full hover:bg-gray-100'
          >
            <Icon icon='majesticons:close' fontSize={32} />
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
