import { useMutation, useQuery, useQueryClient } from 'react-query';

import { fetchPosts, likePost } from './postQueries';

export const useFetchPosts = () => {
  return useQuery(['posts'], () => fetchPosts());
};

export const useLike = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async ({ userId, postId }: { userId: number; postId: number }) => {
      await likePost({ userId, postId });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
      },
      onError: (error) => {
        console.error('Error liking/unliking the post:', error);
      },
    },
  );
};
