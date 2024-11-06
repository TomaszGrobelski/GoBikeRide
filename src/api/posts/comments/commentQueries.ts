import { endpoints } from '@/api/endpoints/endpoints';
import axios from 'axios';

import { NotyficationType } from '@/types/User/user.types';

export const addComment = async ({
    userId,
    postId,
    content,
    postOwnerId,
}: {
    userId: string;
    postId: number;
    content: string;
    postOwnerId: string;
}) => {
    try {
        const response = await axios.post(endpoints.posts.comment, {
            userId,
            postId,
            content,
            postOwnerId,
        });

        if (userId !== postOwnerId) {
            await axios.post(`${endpoints.notifications}`, {
                userId: postOwnerId,
                senderId: userId,
                type: NotyficationType.COMMENT,
                postId,
                message: 'skomentował ci post!',
                isRead: false,
            });
        }

        return response;
    } catch (error) {
        throw error;
    }
};

export const deleteComment = async (commentId: number) => {
    const response = await axios.delete(`${endpoints.posts.comment}/${commentId}`);
    return response.data;
};
