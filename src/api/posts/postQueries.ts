import axios from 'axios';

import { IPost } from '@/types/Posts/posts.types';

import { endpoints } from '../endpoints/endpoints';

export const fetchPosts = async (): Promise<IPost[] | undefined> => {
  const response = await axios.get(`${endpoints.posts.all}`);
  return response.data;
};
