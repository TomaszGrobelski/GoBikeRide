import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface ILoadingNextPostsProps {
  isFetchingNextPage: boolean;
}

const LoadingNextPosts = React.forwardRef<HTMLDivElement, ILoadingNextPostsProps>(
  ({ isFetchingNextPage }, ref) => {
    return (
      <div ref={ref} className="my-10">
        {isFetchingNextPage && (
          <Icon icon='eos-icons:three-dots-loading' fontSize={46} />
        )}
      </div>
    );
  }
);

LoadingNextPosts.displayName = 'LoadingNextPosts'; // Dodać nazwę komponentu dla ESLint

export default LoadingNextPosts;
