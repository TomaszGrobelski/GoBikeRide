import React, { HTMLAttributes } from 'react';
import Link from 'next/link';

interface UserProfileButtonProps extends HTMLAttributes<HTMLButtonElement> {
  userId: number;
}

const UserProfileButton = ({ userId, ...props }: UserProfileButtonProps) => {
  return (
    <Link href={`profile/${userId}`}>
      <button
        className='bg-mainColor rounded-2xl border-[1px] p-2 px-6 text-white'
        {...props}
      >
        Zobacz profil
      </button>
    </Link>
  );
};

export default UserProfileButton;
