import Link from 'next/link';
import { Icon } from '@iconify/react';

const Logout = () => {
  return (
    <Link className='flex items-center gap-4' href='/'>
      <Icon icon='material-symbols:logout' width={20}></Icon>
      <button>Logout</button>
    </Link>
  );
};

export default Logout;
