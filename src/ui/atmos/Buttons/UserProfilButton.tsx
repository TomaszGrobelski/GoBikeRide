import React from 'react';
import Link from 'next/link';

interface UserProfileButtonProps {
  userId: number;
}

const UserProfileButton = ({ userId }: UserProfileButtonProps) => {
  return (
    <Link href={`profile/${userId}`}>
      <button className='bg-mainPurple rounded-2xl border-[1px] p-2 px-6 text-white'>
      Zobacz profil
      </button>
    </Link>
  );
};

export default UserProfileButton;
