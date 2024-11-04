'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useUser } from '@/api/user/useUser';
import { useUserById } from '@/api/users/useUser';
import ErrorCard from '@/ui/molecules/Error/ErrorCard';
import UserNotLogged from '@/ui/molecules/Error/UserNotLogged';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';

import ProfileTabs from './ProfileTabs';
import SettingsView from './SettingsView';
import UserProfilInformation from './UserProfilInformation';

const ProfileView = () => {
  const params = useParams() as { id: string };
  const { id } = params;

  const { data: user, isLoading, error } = useUserById(id);
  const { data: currentUser } = useUser();

  const [activeTab, setActiveTab] = useState('profile');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

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
      <ProfileTabs value={activeTab} handleChange={handleChange} />

      {activeTab === 'profile' && (
        <UserProfilInformation user={user} currentUser={currentUser} isCurrentUserProfile={isCurrentUserProfile} />
      )}

      {activeTab === 'settings' && <SettingsView user={user} />}
    </section>
  );
};

export default ProfileView;
