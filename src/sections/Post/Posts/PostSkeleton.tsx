import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

const PostSkeleton = () => {
  return (
      <div className=' space-y-8'>
        <div className='flex gap-10'>
          <Skeleton
            variant='circular'
            width={40}
            height={40}
            className='ml-4'
          />
          <Skeleton variant='text' width={700} sx={{ fontSize: '1rem' }} />
        </div>
        <Skeleton variant='rounded' width={800} height={260} />
      </div>
  );
};

export default PostSkeleton;
