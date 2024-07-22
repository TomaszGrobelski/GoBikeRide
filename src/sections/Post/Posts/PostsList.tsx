import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LikeButton from '@/ui/atmos/Buttons/LikeButton';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';

import { IPost } from '@/types/Posts/posts.types';
import { IUser } from '@/types/User/user.types';

interface IPostsList {
  refetch: () => Promise<any>;
  posts: IPost[] | undefined;
  user: IUser | undefined;
}
const PostsList = ({ posts, user, refetch }: IPostsList) => {
  if (!user) {
    return <p>Loading user...</p>;
  }

  return (
    <div className='flex w-full flex-col items-center gap-16'>
      {posts &&
        posts.map((post) => (
          <div
            key={post.id}
            className='w-full max-w-[800px] space-y-5 rounded-3xl border-[1px] p-10 shadow-xl'
          >
            <div className='flex gap-4'>
              <UserAvatar />

              <span className='text-[14px] text-gray-500'>
                {convertToDdMmYyyyFormat(post.createdAt)}
              </span>
            </div>
            <p>{post.description}</p>
            <Image
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              width={500}
              height={500}
              className='max-h-[600px] w-full object-contain'
            />

            <LikeButton
              likes={post.likes || []}
              postId={post.id}
              userId={user.id}
              refetch={refetch}
            />
          </div>
        ))}
    </div>
  );
};

export default PostsList;
