import { useQuery, UseQueryResult } from 'react-query';

import { IUser } from '@/types/User/user.types';

import { fetchUsers } from './userQueries';

export const useUsersQuery = (): UseQueryResult<IUser[], Error> => {
  return useQuery<IUser[], Error>('users', fetchUsers);
};
