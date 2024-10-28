import React, { HTMLAttributes } from 'react';
import Link from 'next/link';
import { paths } from '@/routes/paths';

interface UserProfileButtonProps extends HTMLAttributes<HTMLButtonElement> {
  userId: string;
}

const UserProfileButton = ({ userId, ...props }: UserProfileButtonProps) => {
  return (
    <Link href={`${paths.dashboard.profil}/${userId}`}>
      <button
        className='rounded-2xl border-[1px] bg-mainColor p-2 px-6 text-white'
        {...props}
      >
        Zobacz profil
      </button>
    </Link>
  );
};

export default UserProfileButton;
