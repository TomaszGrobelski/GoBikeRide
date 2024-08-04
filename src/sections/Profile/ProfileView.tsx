'use client';

import { useParams } from 'next/navigation';
import { useUserById } from '@/api/users/useUser';

import ProfileCounter from './ProfileCounter/ProfileCounter';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import ProfileSocial from './ProfileSocial/ProfileSocial';
import ProfileTabs from './ProfileTabs';

const ProfileView = () => {
  const params = useParams() as { id: string };
  const { id } = params;

  const { data: user, isLoading, error } = useUserById(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (!user) {
    return <div>Nie znaleziono użytkownika, powrót do logowania...</div>;
  }

  return (
    <div className='flex max-w-[1000px] flex-col ml-20 justify-evenly gap-10 '>
      <ProfileTabs />

      <ProfileInformation user={user} />

      <ProfileCounter user={user} />

      <ProfileSocial />
    </div>
  );
};

export default ProfileView;
