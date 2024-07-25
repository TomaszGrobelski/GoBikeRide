import Image from 'next/image';
import { useLike } from '@/api/posts/usePost';
import { Icon } from '@iconify/react/dist/iconify.js';

import { IUser } from '@/types/User/user.types';

interface ILikes {
  refetch: () => Promise<any>;
  likes: IUser[];
  postId: number;
  userId: number;
}

const Likes = ({ likes, postId, userId, refetch }: ILikes) => {
  const { mutate: likePost, isLoading } = useLike();

  const handleLike = async () => {
    try {
      await likePost({ userId, postId });
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
          icon='icon-park-outline:like'
          fontSize={20}
          // style={{ color: 'red', background: 'red' }}
          className='text-red-500'
        />
        <span>Polub</span>
      </button>
      <div className='flex flex-wrap gap-2'>
        {likes &&
          likes.map((user) => (
            <div key={user.id} className='flex items-center'>
              <Image
                src={user.avatar_url || '/default-avatars/male-avatar.png'}
                alt={`${user.username} avatar`}
                className='h-6 w-6 rounded-full'
                width={40}
                height={40}
              />
              <span className='ml-2 text-sm'>{user.username}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Likes;
