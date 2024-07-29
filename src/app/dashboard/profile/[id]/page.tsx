'use client';

import { useParams } from 'next/navigation';
import { useUserById } from '@/api/users/useUser';

import { IUser } from '@/types/User/user.types';

const UserProfile = () => {
  const params = useParams();
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
    <div>
      <h1>{user.username}</h1>
      <p>User {id}</p>
    </div>
  );
};

export default UserProfile;
