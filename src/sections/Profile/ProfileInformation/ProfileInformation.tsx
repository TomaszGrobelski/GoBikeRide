import Image from 'next/image';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { CalendarCheck, Instagram, User } from 'lucide-react';

import { IUser } from '@/types/User/user.types';

import ProfileRidingStyle from './ProfileRidingStyle';

interface IProfileInformation {
  user: IUser;
}
const ProfileInformation = ({ user }: IProfileInformation) => {
  return (
    <div className='shadow-mainColor space-y-4 rounded-2xl p-10 shadow-md'>
      <div className='flex items-center gap-2'>
        <Image
          className='rounded-full shadow-xl'
          src={user.avatar_url || '/default-avatars/male-avatar.png'}
          alt='avatar'
          width={100}
          height={100}
        />
        <div className='flex w-full items-center justify-between'>
          <div>
            <p>Zdjęcie profilowe</p>
            <span className='text-[14px] text-gray-700'>
              PNG, JPEG poniżej 15MB
            </span>
          </div>
          <div className='flex items-center gap-3'>
            <button className='hover:border-mainColor hover:text-mainColor rounded-lg border-[1px] px-2 py-1 shadow-lg transition-all duration-300'>
              Wgraj nowe zdjęcie
            </button>
            <button className='rounded-lg border-[1px] px-2 py-1 shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white'>
              Usuń zdjęcie
            </button>
          </div>
        </div>
      </div>
      <p className='flex items-center gap-2'>
        <User /> {user.username}
      </p>
      <p className='flex items-center gap-2'>
        <CalendarCheck />
        {convertToDdMmYyyyFormat(user.createdAt)}
      </p>

      <div className='flex items-center'>
        <p>Preferowany styl jazdy:</p>
        <ProfileRidingStyle />
      </div>
    </div>
  );
};

export default ProfileInformation;
