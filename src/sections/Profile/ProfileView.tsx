'use client';

import { useParams } from 'next/navigation';
import { useUser } from '@/api/user/useUser';
import { useUserById } from '@/api/users/useUser';
import ErrorCard from '@/ui/molecules/Error/ErrorCard';
import UserNotLogged from '@/ui/molecules/Error/UserNotLogged';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';

import ProfileCounter from './ProfileCounter/ProfileCounter';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import ProfileSocial from './ProfileSocial/ProfileSocial';
import ProfileTabs from './ProfileTabs';

const ProfileView = () => {
  const params = useParams() as { id: string };
  const { id } = params;

  const { data: user, isLoading, error } = useUserById(id);
  const { data: currentUser } = useUser();

  const isCurrentUserProfile = user?.id === currentUser?.id;

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <ErrorCard />;
  }
  if (!user || !currentUser) {
    return <UserNotLogged />;
  }

  return (
    <section className='ml-20 flex max-w-[1000px] flex-col justify-evenly gap-10'>
      <ProfileTabs />

      <ProfileInformation user={user} currentUser={currentUser} />

      <ProfileCounter user={user} />

      <ProfileSocial user={user} isCurrentUserProfile={isCurrentUserProfile} />
    </section>
  );
};

export default ProfileView;
