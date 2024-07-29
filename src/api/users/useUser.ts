import { useQuery, UseQueryResult } from 'react-query';

import { IUser } from '@/types/User/user.types';

import { fetchUserById, fetchUsers } from './userQueries';

export const useUsersQuery = (): UseQueryResult<IUser[], Error> => {
  return useQuery<IUser[], Error>('users', fetchUsers);
};

export const useUserById = (id: string): UseQueryResult<IUser, Error> => {
  return useQuery<IUser, Error>(['user', id], () => fetchUserById(id));
};
