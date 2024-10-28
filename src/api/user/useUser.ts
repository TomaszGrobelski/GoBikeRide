import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ISocialMedia, IUser } from '@/types/User/user.types';

import { fetchSocialMedia, fetchUser, updateSocial } from './userQueries';

// Hook to fetch user data
export const useUser = () => {
  return useQuery<IUser | undefined>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
};

// Hook to fetch social media data by userId
export const useSocialMedia = (userId: string) => {
  return useQuery<ISocialMedia | undefined>({
    queryKey: ['socialMedia', userId],
    queryFn: () => fetchSocialMedia(userId),
  });
};

export const useUpdateSocialMedia = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (socialData: {
      userId: string;
      instagram: string | undefined;
      facebook: string | undefined;
      twitter: string | undefined;
    }) => {
      console.log('Social Data:', socialData); // Log socialData here
      return updateSocial(socialData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: (error) => {
      console.error('Error updating social media:', error);
    },
  });
};
