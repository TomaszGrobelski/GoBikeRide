'use client';

import { useEffect } from 'react';
import { useInfiniteFetchPosts } from '@/api/posts/usePost';
import { useUser } from '@/api/user/useUser';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';
import { useInView } from 'react-intersection-observer';

import LoadingNextPosts from './Posts/LoadingNextPosts';
import NoPostsMessage from './Posts/NoPostsMessage';
import PostsForm from './Posts/PostsForm';
import PostsList from './Posts/PostsList';

const PostsView = () => {
  const { data: user, isLoading: isLoadingUser, error: userError } = useUser();
  const {
    data: postsData,
    isLoading: isLoadingPosts,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteFetchPosts();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const posts = postsData?.pages.flatMap((page) => page.data) || [];

  return (
    <section className='mt-20 flex w-full flex-col items-center gap-4 p-2'>
      <PostsForm refetch={refetch} user={user} />

      <PostsList posts={posts} user={user} refetch={refetch} />

      <LoadingNextPosts ref={ref} isFetchingNextPage={isFetchingNextPage} />

      {isLoadingPosts && <LoadingPage />}
      {!isLoadingPosts && posts?.length === 0 && <NoPostsMessage />}
    </section>
  );
};

export default PostsView;
