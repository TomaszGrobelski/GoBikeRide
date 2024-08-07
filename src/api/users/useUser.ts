import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { IUser } from '@/types/User/user.types';

import { fetchUserById, fetchUsers } from './userQueries';

export const useUsersQuery = (): UseQueryResult<IUser[], Error> => {
  return useQuery<IUser[], Error>({ queryKey: ['users'], queryFn: fetchUsers });
};

export const useUserById = (id: string): UseQueryResult<IUser, Error> => {
  return useQuery<IUser, Error>({
    queryKey: ['user', id],
    queryFn: () => fetchUserById(id),
  });
};
