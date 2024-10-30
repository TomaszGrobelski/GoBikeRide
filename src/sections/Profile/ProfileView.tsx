'use client';

import { useParams } from 'next/navigation';
import { useUserById } from '@/api/users/useUser';
import ErrorCard from '@/ui/molecules/Error/ErrorCard';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';

import ProfileCounter from './ProfileCounter/ProfileCounter';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import ProfileSocial from './ProfileSocial/ProfileSocial';
import ProfileTabs from './ProfileTabs';
import UserNotLogged from '@/ui/molecules/Error/UserNotLogged';

const ProfileView = () => {
  const params = useParams() as { id: string };
  const { id } = params;

  const { data: user, isLoading, error } = useUserById(id);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorCard />;
  }
  if (!user) {
    return <UserNotLogged />;
  }

  return (
    <section className='ml-20 flex max-w-[1000px] flex-col justify-evenly gap-10'>
      <ProfileTabs />

      <ProfileInformation user={user} />

      <ProfileCounter user={user} />

      <ProfileSocial user={user} />
    </section>
  );
};

export default ProfileView;
