import React from 'react';
import Image from 'next/image';
import UserProfileButton from '@/ui/atmos/Buttons/UserProfilButton';

import { IUser } from '@/types/User/user.types';

import CounterItem from './CounterItem';
import userImg from './userImg.png';

interface IUserCard {
  user: IUser;
}

const UserCard = ({ user }: IUserCard) => {
  return (
    <li
      key={user.username}
      className='flex flex-col items-center gap-5 rounded-xl border-[1px] p-20'
    >
      <Image src={userImg} alt='zdjęcie avatara' width={100} height={100} />
      <p>{user.username}</p>
      <p className='rounded-full border-[1px] border-white bg-sky-200 px-4'>
        Gravel
      </p>
      <div className='flex gap-8'>
        <CounterItem count={user.posts_count} label='Posty' />
        <CounterItem count={user.routes_count} label='Trasy' />
        <CounterItem count={user.bikes_count} label='Rowery' />
      </div>

      <UserProfileButton userId={user.id} />
    </li>
  );
};

export default UserCard;
