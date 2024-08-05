import { useMutation, useQueryClient } from 'react-query';

import { addComment } from './commentQueries';

interface AddCommentParams {
  userId: number;
  postId: number;
  content: string;
}

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, AddCommentParams>(
    async ({ userId, postId, content }: AddCommentParams) => {
      await addComment({ userId, postId, content });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['comments']); 
      },
      onError: (error: Error) => {
        console.error('Error adding comment', error);
      },
    },
  );
};
