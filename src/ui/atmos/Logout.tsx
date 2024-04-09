import Link from 'next/link';
import { Icon } from '@iconify/react';
import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

const Logout = () => {
  const isSmallScreen= useIsSmallScreen()
  return (
    <Link  href='/'>
      <button  className='flex items-center gap-4'>
        <Icon icon='material-symbols:logout' width={20}></Icon>
        {!isSmallScreen&&<p>Logout</p>}
      </button>
    </Link>
  );
};

export default Logout;
