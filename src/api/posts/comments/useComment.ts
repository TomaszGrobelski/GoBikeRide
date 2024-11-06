import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addComment, deleteComment } from './commentQueries';

interface AddCommentParams {
    userId: string;
    postId: number;
    content: string;
    postOwnerId: string;
}

export const useAddComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ userId, postId, content, postOwnerId }: AddCommentParams) => {
            await addComment({ userId, postId, content, postOwnerId });
        },
        onSuccess: (data, variables) => {
            const { userId } = variables;
            queryClient.invalidateQueries({ queryKey: ['posts'] });
            queryClient.invalidateQueries({ queryKey: ['notification', userId] });
        },
        onError: (error: Error) => {
            console.error('Error adding comment', error);
        },
    });
};

export const useDeleteComment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (commentId: number) => {
            await deleteComment(commentId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['posts'] });
        },
    });
};
