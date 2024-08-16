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
      <button
        disabled={isPending}
        onClick={handleLike}
        className={`flex items-center gap-3 rounded-xl border-[1px] px-3 py-1 transition-all duration-300 hover:border-red-600 ${
          likes.some((like) => like.userId === userId) ? 'border-red-500' : ''
        }`}
        // className=' flex items-center gap-3 rounded-xl border-[1px] px-3 py-1 transition-all duration-300 hover:border-red-600'
      >
        <span className='custom_hear_like'>
          <Icon
            icon='prime:heart-fill'
            fontSize={22}
            className={
              likes.some((like) => like.userId === userId)
                ? 'text-red-500'
                : 'text-gray-500'
            }
          />
        </span>

        <span>
          {likes.some((like) => like.userId === userId) ? 'Lubię to' : 'Polub'}
        </span>
      </button>
      <div className='flex flex-wrap -space-x-3'>
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
                  className='ring-mainColor inline-block h-8 w-8 cursor-pointer rounded-full bg-white ring-1'
                  width={50}
                  height={50}
                />
              </Tooltip>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Likes;
