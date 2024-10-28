import { endpoints } from '@/api/endpoints/endpoints';
import axios from 'axios';

export const addComment = async ({
  userId,
  postId,
  content,
}: {
  userId: string;
  postId: number;
  content: string;
}) => {
  try {
    const response = await axios.post(endpoints.posts.comment, {
      userId,
      postId,
      content,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
