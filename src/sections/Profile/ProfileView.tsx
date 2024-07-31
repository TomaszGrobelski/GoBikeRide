'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useUserById } from '@/api/users/useUser';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';

import { IUser } from '@/types/User/user.types';

const ProfileView = () => {
  const params = useParams() as { id: string };
  const { id } = params;

  const { data: user, isLoading, error } = useUserById(id);
  console.log(user);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className='flex max-w-[1000px] justify-evenly'>
      <div className=' space-y-4 shadow-md rounded-2xl p-10 shadow-mainPurple'>
        <Image
          src={user.avatar_url || '/default-avatars/male-avatar.png'}
          alt='avatar'
          width={100}
          height={100}
        />
        <p>Nazwa użytkownika: {user.username}</p>
        <p>Data dołączenia: {convertToDdMmYyyyFormat(user.createdAt)}</p>
      </div>
      <div className=' shadow-md rounded-2xl p-10 shadow-mainPurple'>
        <p>Opublikowane posty: {user.posts_count}</p>
        <p>Ilość rowerów: {user.bikes_count}</p>
        <p>Preferowany rodzaj jazdy: </p>
      </div>
    </div>
  );
};

export default ProfileView;
