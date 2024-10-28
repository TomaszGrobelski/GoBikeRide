import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import {
  addPost,
  deletePost,
  fetchPosts,
  likePost,
  updatePost,
} from './postQueries';

// export const useFetchPosts = () => {
//   return useQuery(['posts'], () => fetchPosts());
// };

export const useInfiniteFetchPosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postId: number) => {
      await deletePost({ postId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: unknown) => {
      console.error('Error deleting post:', error);
    },
  });
};

export const useLike = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, { userId: string; postId: number }>({
    mutationFn: async ({ userId, postId }) => {
      await likePost({ userId, postId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: Error) => {
      console.error('Error liking/unliking the post:', error);
    },
  });
};

export const useAddPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postData: {
      userId: string;
      description: string;
      imageUrl: string;
    }) => {
      const newPost = await addPost(postData);
      return newPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: unknown) => {
      console.error('Error adding post:', error);
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (postData: {
      postId: number;
      description: string;
      imageUrl?: string;
    }) => {
      const editedPost = await updatePost(postData);
      return editedPost;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: unknown) => {
      console.error('Error adding post:', error);
    },
  });
};
