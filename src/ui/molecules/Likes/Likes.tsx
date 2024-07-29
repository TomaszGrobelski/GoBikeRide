import Image from 'next/image';
import Link from 'next/link';
import { useLike } from '@/api/posts/usePost';
import { Icon } from '@iconify/react/dist/iconify.js';
import Tooltip from '@mui/material/Tooltip';

import { IUser } from '@/types/User/user.types';

interface ILike {
  id: number;
  postId: number;
  userId: number;
  createdAt: string;
  user: IUser;
}
interface ILikes {
  refetch: () => Promise<any>;
  likes: ILike[];
  postId: number;
  userId: number;
}

const Likes = ({ likes, postId, userId, refetch }: ILikes) => {
  const { mutate: likePost, isLoading } = useLike();

  const handleLike = async () => {
    try {
      await likePost({ userId, postId });
      await refetch();
    } catch (error) {
      console.error('Error liking/unliking the post:', error);
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <button
        disabled={isLoading}
        onClick={handleLike}
        className='flex items-center gap-3 rounded-xl border-[1px] px-3 py-1'
      >
        <Icon
          icon='prime:heart-fill'
          fontSize={22}
          className={
            likes.some((like) => like.userId === userId)
              ? 'text-red-500'
              : 'text-gray-500'
          }
        />
        <span>Polub</span>
      </button>
      <div className='flex flex-wrap'>
        {likes &&
          likes.map((like) => (
            <Link
              href={`/dashboard/profile/${like.user.id}`}
              key={like.user.id}
              className='flex items-center'
            >
              <Tooltip title={like.user.username} placement='top'>
                <Image
                  src={
                    like.user.avatar_url || '/default-avatars/male-avatar.png'
                  }
                  alt={`${like.user.username} avatar`}
                  className='h-6 w-6 cursor-pointer rounded-full'
                  width={40}
                  height={40}
                />
              </Tooltip>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Likes;
