import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface IEditProfilButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const EditProfilButton = ({ children, ...props }: IEditProfilButton) => {
  return (
    <button
      className='rounded-lg border-[1px] border-gray-300 px-2 py-1 shadow-lg transition-all duration-300 hover:border-mainColor hover:text-mainColor'
      {...props}
    >
      {children}
    </button>
  );
};

export default EditProfilButton;
