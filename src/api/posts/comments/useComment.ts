import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addComment } from './commentQueries';

interface AddCommentParams {
  userId: string;
  postId: number;
  content: string;
}

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ userId, postId, content }: AddCommentParams) => {
      await addComment({ userId, postId, content });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['comments'] });
    },
    onError: (error: Error) => {
      console.error('Error adding comment', error);
    },
  });
};
