import axios from 'axios';

import { IPost } from '@/types/Posts/posts.types';

import { endpoints } from '../endpoints/endpoints';

export const fetchPosts = async (): Promise<IPost[] | undefined> => {
  try {
    const response = await axios.get(endpoints.posts.all);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async ({ postId }: { postId: number }) => {
  try {
    const response = await axios.delete(`${endpoints.posts.all}/${postId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const likePost = async ({
  userId,
  postId,
}: {
  userId: number;
  postId: number;
}) => {
  try {
    const response = await axios.post(endpoints.posts.like, {
      userId,
      postId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
