import React from 'react';
import { twMerge } from 'tailwind-merge';

interface IProfilBox {
  children: React.ReactNode;
  className?: string;
}

const ProfilBox = ({ children, className }: IProfilBox) => {
  return <div className={twMerge('space-y-4 rounded-2xl p-10 shadow-md shadow-mainColor', className)}>{children}</div>;
};

export default ProfilBox;
