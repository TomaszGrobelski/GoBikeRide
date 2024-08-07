'use client';

import { useEffect } from 'react';
import { useInfiniteFetchPosts } from '@/api/posts/usePost';
import { useUser } from '@/api/user/useUser';
import { useInView } from 'react-intersection-observer';

import LoadingNextPosts from './Posts/LoadingNextPosts';
import NoPostsMessage from './Posts/NoPostsMessage';
import PostsForm from './Posts/PostsForm';
import PostsList from './Posts/PostsList';

const PostsView = () => {
  const { data: user, isLoading, error: userError } = useUser();
  const { data, error, status, fetchNextPage, isFetchingNextPage, refetch } =
    useInfiniteFetchPosts();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const posts = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className='mt-20 flex w-full flex-col items-center gap-4 p-2'>
      <PostsForm refetch={refetch} user={user} />

      <PostsList posts={posts} user={user} refetch={refetch} />

      <LoadingNextPosts ref={ref} isFetchingNextPage={isFetchingNextPage} />

      {posts?.length === 0 && <NoPostsMessage />}
    </div>
  );
};

export default PostsView;
