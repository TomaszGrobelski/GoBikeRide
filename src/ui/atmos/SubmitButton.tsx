import React, { ReactNode } from 'react';

interface ISubmitButton {
  children: ReactNode;
}

const SubmitButton = ({ children }: ISubmitButton) => {
  return (
    <button
      className='rounded-xl border-[1px] p-2 font-bold text-purple-700'
      type='submit'
    >
      {children}
    </button>
  );
};

export default SubmitButton;
