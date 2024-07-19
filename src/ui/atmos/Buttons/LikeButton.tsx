import { Icon } from '@iconify/react/dist/iconify.js';

const LikeButton = () => {
  return (
    <button className='flex gap-3 items-center border-[1px] rounded-xl px-3 py-1'>
      <Icon icon='icon-park-outline:like' fontSize={20} />
      <span>Polub</span>
    </button>
  );
};

export default LikeButton;
