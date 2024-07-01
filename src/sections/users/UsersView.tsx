'use client';

import { useEffect, useState } from 'react';
import { useUsersQuery } from '@/api/users/useUser';
import ErrorCard from '@/ui/molecules/Error/ErrorCard';

import { IUser } from '@/types/User/user.types';

import UsersCards from './UsersCards';

const UsersView = () => {
  const { data, refetch, isError } = useUsersQuery();

  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data);
    }
  }, [data]);

  if (isError) {
    return <ErrorCard refetch={refetch} />;
  }

  return <UsersCards users={users} />;
};

export default UsersView;
