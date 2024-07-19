'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { endpoints } from '@/api/endpoints/endpoints';
import { useFetchPosts } from '@/api/posts/usePost';
import { useUser } from '@/api/user/useUser';
import axios from 'axios';
import { toast, Toaster } from 'sonner';

import { supabase } from '@/lib/supabase';

import NoPostsMessage from './Posts/NoPostsMessage';
import PostsForm from './Posts/PostsForm';
import PostsList from './Posts/PostsList';

const PostsView = () => {
  const { data: posts, refetch } = useFetchPosts();

  return (
    <>
      <div className='flex w-full flex-col items-center gap-4 mt-20 p-2'>
        <PostsForm refetch={refetch} />

        <PostsList posts={posts} />

        {posts?.length === 0 && <NoPostsMessage />}
      </div>

      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem'
          }
        }}
        richColors
        position='top-right'
      />
    </>
  );
};

export default PostsView;
