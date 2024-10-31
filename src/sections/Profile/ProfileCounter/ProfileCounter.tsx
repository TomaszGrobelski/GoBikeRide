import { IUser } from '@/types/User/user.types';

import CounterCard from './CounterCard';
import { iconList } from './icon-list';

interface IProfileCounter {
  user: IUser;
}
const ProfileCounter = ({ user }: IProfileCounter) => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-14 rounded-2xl p-10 shadow-md shadow-mainColor'>
      <CounterCard value={user.bikes.length} title='Rowery' icon={iconList.rowery.icon} />
      <CounterCard value={0} title='Trasy' icon={iconList.trasy.icon} />
      <CounterCard value={0} title='Kilometry' icon={iconList.kilometry.icon} />
      <CounterCard value={user.posts.length} title='Posty' icon={iconList.posty.icon} />
    </div>
  );
};

export default ProfileCounter;
