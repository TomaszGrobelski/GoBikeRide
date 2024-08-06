import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import Likes from '@/ui/molecules/Likes/Likes';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';

import { IPost } from '@/types/Posts/posts.types';
import { IUser } from '@/types/User/user.types';

import CommentForm from '../Comments/CommentForm';
import CommentsList from '../Comments/CommentsList';
import DeletePostButton from './DeletePostButton';
import PostSkeleton from './PostSkeleton';

interface IPostsList {
  refetch: () => Promise<any>;
  posts: IPost[] | undefined;
  user: IUser | undefined;
}
const PostsList = ({ posts, user, refetch }: IPostsList) => {
  if (!user || !posts) {
    return <PostSkeleton />;
  }

  return (
    <div className='flex w-full flex-col items-center gap-16'>
      {posts &&
        posts.map((post) => (
          <div
            key={post.id}
            className='relative w-full max-w-[800px] space-y-6 rounded-3xl border-[1px] p-10 shadow-sm shadow-white'
          >
            {post.userId === user.id && <DeletePostButton postId={post.id} />}

            

            <div className='flex gap-4'>
              <Link
                href={`/dashboard/profile/${post.userId}`}
                className='flex items-center'
              >
                <UserAvatar />
              </Link>

              <div>
                <p>{post.user.username}</p>
                <span className='text-[14px] text-gray-500'>
                  {convertToDdMmYyyyFormat(post.createdAt)}
                </span>
              </div>
            </div>
            <p className='text-balance indent-4'>{post.description}</p>
            <Image
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              width={500}
              height={500}
              className='max-h-[600px] w-full rounded-md'
            />

            <Likes
              likes={post.likes || []}
              postId={post.id}
              userId={user.id}
              refetch={refetch}
            />

            <CommentForm user={user} postId={post.id} refetch={refetch} />

            <CommentsList comments={post.comments} />
          </div>
        ))}
    </div>
  );
};

export default PostsList;
