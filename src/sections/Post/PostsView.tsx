'use client';

import { useFetchPosts } from '@/api/posts/usePost';
import { useUser } from '@/api/user/useUser';
import { Toaster } from 'sonner';

import NoPostsMessage from './Posts/NoPostsMessage';
import PostsForm from './Posts/PostsForm';
import PostSkeleton from './Posts/PostSkeleton';
import PostsList from './Posts/PostsList';

const PostsView = () => {
  const { data: posts, refetch } = useFetchPosts();
  const { data: user, isLoading, error } = useUser();

  return (
    <>
      <div className='mt-20 flex w-full flex-col items-center gap-4 p-2'>
        <PostsForm refetch={refetch} user={user} />

        <PostsList posts={posts} user={user} refetch={refetch} />

        {posts?.length === 0 && <NoPostsMessage />}
      </div>
    </>
  );
};

export default PostsView;
