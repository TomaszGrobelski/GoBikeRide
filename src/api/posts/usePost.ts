import { useMutation, useQuery, useQueryClient } from 'react-query';

import { deletePost, fetchPosts, likePost } from './postQueries';

export const useFetchPosts = () => {
  return useQuery(['posts'], () => fetchPosts());
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (postId: number) => {
      await deletePost({ postId });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['posts']);
      },
      onError: (error) => {
        console.error('Error deleting the post:', error);
      },
    },
  );
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
