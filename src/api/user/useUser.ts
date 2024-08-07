import { useQuery } from '@tanstack/react-query';

import { IUser } from '@/types/User/user.types';

import { fetchUser } from './userQueries';

export const useUser = () => {
  return useQuery<IUser | undefined>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
};
