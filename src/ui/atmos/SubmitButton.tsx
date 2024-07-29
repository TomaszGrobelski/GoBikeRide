import React, { ReactNode } from 'react';

interface ISubmitButton {
  children: ReactNode;
  disabled?: boolean;
}

const SubmitButton = ({ children, disabled }: ISubmitButton) => {
  return (
    <button
      className='flex items-center justify-center rounded-xl border-[1px] bg-gradient-to-br from-[#38B98C] to-[#3AA8AE] p-2 font-bold text-white'
      type='submit'
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
