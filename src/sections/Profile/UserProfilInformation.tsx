'use client';

import React from 'react';

import { IUser } from '@/types/User/user.types';

import ProfileCounter from './ProfileCounter/ProfileCounter';
import ProfileInformation from './ProfileInformation/ProfileInformation';
import ProfileSocial from './ProfileSocial/ProfileSocial';

interface IUserProfilInformation {
  user: IUser;
  currentUser: IUser;
  isCurrentUserProfile: boolean;
}
const UserProfilInformation = ({ user, currentUser, isCurrentUserProfile }: IUserProfilInformation) => {
  return (
    <>
      <ProfileInformation user={user} currentUser={currentUser} isCurrentUserProfile={isCurrentUserProfile} />

      <ProfileCounter user={user} />

      <ProfileSocial user={user} isCurrentUserProfile={isCurrentUserProfile} />
    </>
  );
};

export default UserProfilInformation;
