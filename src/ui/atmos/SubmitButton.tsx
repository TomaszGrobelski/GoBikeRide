import React, { ReactNode } from 'react';

interface ISubmitButton {
  children: ReactNode;
}

const SubmitButton = ({ children }: ISubmitButton) => {
  return (
    <button
      className='rounded-xl border-[1px] p-2 font-bold bg-gradient-to-br from-[#38B98C] to-[#3AA8AE] text-white'
      type='submit'
    >
      {children}
    </button>
  );
};

export default SubmitButton;
