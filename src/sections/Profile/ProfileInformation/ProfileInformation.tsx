import Image from 'next/image';
import { useUpdateRespect } from '@/api/user/useUser';
import EditProfilButton from '@/ui/atmos/Buttons/Profil/EditProfilButton';
import MainMethodBox from '@/ui/atmos/mainMethod/MainMethod';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { Icon } from '@iconify/react/dist/iconify.js';
import { CalendarCheck, Instagram, ThumbsUp, User } from 'lucide-react';

import { IUser } from '@/types/User/user.types';

import ProfileRidingStyle from './ProfileRidingStyle';

interface IProfileInformation {
  user: IUser;
  currentUser: IUser;
}
const ProfileInformation = ({ user, currentUser }: IProfileInformation) => {
  const { mutate: updateRespect, isPending } = useUpdateRespect();

  const handleRespect = async (action: 'increment' | 'decrement') => {
    const giverId = currentUser.id;
    const receiverId = user.id;

    try {
      await updateRespect({ giverId, receiverId, action });
    } catch (error) {
      console.error('Error updating respect:', error);
    }
  };

  const hasGivenRespect = (user.receivedRespects || []).some(
    (respect) => respect.giverId === currentUser.id, // This checks if the current user is the giver
  );

  return (
    <div className='space-y-4 rounded-2xl p-10 shadow-md shadow-mainColor'>
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
            <span className='text-[14px] text-gray-700'>PNG, JPEG poniżej 15MB</span>
          </div>
          <div className='flex items-center gap-3'>
            <EditProfilButton>Wgraj nowe zdjęcie</EditProfilButton>
            <button className='rounded-lg border-[1px] px-2 py-1 shadow-lg transition-all duration-300 hover:bg-red-600 hover:text-white'>
              Usuń zdjęcie
            </button>
          </div>
        </div>
      </div>

      <p className='flex items-center gap-2'>
        <User color='#102532' /> {user.username}
      </p>

      <p className='flex items-center gap-2'>
        <CalendarCheck color='#102532' />
        {convertToDdMmYyyyFormat(user.createdAt)}
      </p>

      <div className='flex items-center gap-2'>
        <Icon icon='bxs:cool' fontSize={24} color='#FFB800' />
        <p>Respect:</p>
        <p>{user.respect}</p>
        {!hasGivenRespect ? (
          <button
            onClick={() => handleRespect('increment')}
            disabled={isPending}
            className='hover mb-1 ml-2 flex items-center justify-center'
          >
            <ThumbsUp strokeWidth={2.5} size={22} className='hover:scale-110' />
          </button>
        ) : (
          <button
            onClick={() => handleRespect('decrement')}
            disabled={isPending}
            className='hover ml-2 mt-1 flex items-center justify-center'
          >
            <ThumbsUp strokeWidth={2.5} size={22} className='rotate-180 hover:scale-110' />
          </button>
        )}
      </div>

      <div className='flex items-center gap-2'>
        <p>Preferowany styl jazdy:</p>
        <MainMethodBox method={user.mainMethod} />
        <ProfileRidingStyle />
        <p></p>
      </div>
    </div>
  );
};

export default ProfileInformation;
