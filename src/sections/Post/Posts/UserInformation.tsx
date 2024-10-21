import React from 'react';
import Link from 'next/link';
import { paths } from '@/routes/paths';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';

import { IUser } from '@/types/User/user.types';

interface UserInformationProps {
  user: IUser;
  createdAt: Date;
}

const UserInformation = ({ user, createdAt }: UserInformationProps) => {
  return (
    <div className='flex gap-4'>
      <Link
        href={`${paths.dashboard.profil}/${user.id}`}
        className='flex items-center'
      >
        <UserAvatar />
      </Link>

      <div>
        <p>{user.username}</p>
        <span className='text-[14px] text-gray-500'>
          {convertToDdMmYyyyFormat(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default UserInformation;
