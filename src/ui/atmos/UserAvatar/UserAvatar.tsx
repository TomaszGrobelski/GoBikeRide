import Image from 'next/image';

const UserAvatar = () => {
  return (
    <Image
      src={'/default-avatars/male-avatar.png'}
      alt='avatar'
      width={40}
      height={40}
      className='h-10 w-10 rounded-full ring-1 ring-gray-300 transition-all duration-300 hover:ring-mainPurple'
    />
  );
};

export default UserAvatar;
