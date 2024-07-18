import { useQuery } from 'react-query';

import { IUser } from '@/types/User/user.types';

import { fetchUser } from './userQueries';

export const useUser = () => {
  return useQuery<IUser | undefined>('user', fetchUser);
};
