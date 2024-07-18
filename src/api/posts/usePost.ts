import { useQuery } from 'react-query';

import { fetchPosts } from './postQueries';

export const useFetchPosts = () => {
  return useQuery(['posts'], () => fetchPosts());
};
