'use client';

import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';

import { supabase } from '@/lib/supabase';
import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      router.push('/auth/sign-in');
    }

    Cookies.remove('my-access-token');
    Cookies.remove('my-refresh-token');
    router.push('/auth/sign-in');
  };

  const isSmallScreen = useIsSmallScreen();

  return (
    <li
      className={`flex w-full justify-start text-nowrap rounded-lg border-[1px] border-b-8 border-r-8 border-[#5F286B] text-[16px] shadow-md backdrop-blur-xl duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:border-b-4 hover:border-r-4`}
    >
      <button onClick={handleLogout}>
        <div
          className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${isSmallScreen ? 'pr-4' : 'pr-20'} `}
        >
          <Icon icon='material-symbols:logout' height={20} width={20}></Icon>
          {!isSmallScreen && <p>Logout</p>}
        </div>
      </button>
    </li>
  );
};

export default Logout;
