import axios from 'axios';

import { IPostResponse } from '@/types/Api/apiResponse';
import { IPost } from '@/types/Posts/posts.types';

import { endpoints } from '../endpoints/endpoints';

const LIMIT = 5;
export async function fetchPosts({
  pageParam = 1,
  limit = LIMIT,
}: {
  pageParam?: number;
  limit?: number;
}): Promise<{
  data: IPost[];
  currentPage: number;
  nextPage: number | null;
}> {
  try {
    const response = await axios.get(endpoints.posts.all, {
      params: { page: pageParam, limit },
    });

    const posts: IPost[] = response.data;

    return {
      data: posts.slice(pageParam, pageParam + LIMIT),
      currentPage: pageParam,
      nextPage: pageParam + LIMIT < posts.length ? pageParam + LIMIT : null,
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export const addPost = async (postData: {
  userId: string;
  description: string;
  imageUrl: string;
}) => {
  const response = await axios.post(endpoints.posts.all, postData);
  return response.data;
};

export const deletePost = async ({ postId }: { postId: number }) => {
  try {
    const response = await axios.delete(`${endpoints.posts.all}/${postId}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (postData: {
  postId: number;
  description: string;
}) => {
  const response = await axios.put(endpoints.posts.all, postData);
  return response.data;
};

export const likePost = async ({
  userId,
  postId,
}: {
  userId: string;
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
