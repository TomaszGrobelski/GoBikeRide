import { Icon } from '@iconify/react/dist/iconify.js';

import { IUser } from '@/types/User/user.types';

import CounterCard from './CounterCard';
import { iconList } from './icon-list';

interface IProfileCounter {
  user: IUser;
}
const ProfileCounter = ({ user }: IProfileCounter) => {
  return (
    <div className='flex items-center justify-center gap-14 rounded-2xl p-10 shadow-md shadow-mainPurple'>
      <CounterCard
        value={user.bikes_count}
        title='Rowery'
        icon={iconList.rowery.icon}
      />
      <CounterCard value={0} title='Trasy' icon={iconList.trasy.icon} />
      <CounterCard value={0} title='Kilometry' icon={iconList.kilometry.icon} />
      <CounterCard
        value={user.posts_count}
        title='Posty'
        icon={iconList.posty.icon}
      />
    </div>
  );
};

export default ProfileCounter;
