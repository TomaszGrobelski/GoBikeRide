import Image from 'next/image';
import Link from 'next/link';
import { useLike } from '@/api/posts/usePost';
import { Icon } from '@iconify/react/dist/iconify.js';
import Tooltip from '@mui/material/Tooltip';

import { ILike } from '@/types/Posts/posts.types';
import { IUser } from '@/types/User/user.types';

import AnimatedUsersLikeList from './AnimatedUsersLikeList';
import LikeButton from './LikeButton';

interface ILikes {
  refetch: () => Promise<any>;
  likes: ILike[];
  postId: number;
  userId: string;
}

const Likes = ({ likes, postId, userId, refetch }: ILikes) => {
  const { mutate: likePost, isPending } = useLike();

  const handleLike = async () => {
    try {
      await likePost({ userId, postId });
      // await refetch();
    } catch (error) {
      console.error('Error liking/unliking the post:', error);
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <LikeButton
        likes={likes}
        userId={userId}
        disabled={isPending}
        onClick={handleLike}
      />

      <div className='flex w-full flex-row items-center justify-start'>
        <AnimatedUsersLikeList likes={likes} />
      </div>
    </div>
  );
};

export default Likes;
