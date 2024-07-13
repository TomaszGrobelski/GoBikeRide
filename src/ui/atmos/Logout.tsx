'use client';

import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';
import { Icon } from '@iconify/react';

import { logoutUser } from '@/lib/logoutUser';
import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { success, message } = await logoutUser();

    if (!success) {
      router.push(paths.auth.signIn);
    }

    router.push(paths.auth.signIn);
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
