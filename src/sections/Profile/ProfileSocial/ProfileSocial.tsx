import { Facebook, Instagram, Twitter } from 'lucide-react';

const ProfileSocial = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 rounded-2xl p-10 shadow-md shadow-mainPurple'>
      <p>Social media</p>
      <p className='flex items-center gap-2'>
        <Instagram />
        ......................
      </p>
      <p className='flex items-center gap-2'>
        <Instagram />
        ......................
      </p>
      <p className='flex items-center gap-2'>
        <Twitter />
        ......................
      </p>
    </div>
  );
};

export default ProfileSocial;
