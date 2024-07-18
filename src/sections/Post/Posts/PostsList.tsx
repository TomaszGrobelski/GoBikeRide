import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { IPost } from '@/types/Posts/posts.types';

interface IPostsList {
  posts: IPost[] | undefined;
}
const PostsList = ({ posts }: IPostsList) => {
  return (
    <div className='flex flex-col gap-20'>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className='space-y-3'>
            <p>{post.description}</p>
            <Image
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              width={500}
              height={500}
            />
          </div>
        ))}
    </div>
  );
};

export default PostsList;
