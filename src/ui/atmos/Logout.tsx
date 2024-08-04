'use client';

import { useRouter } from 'next/navigation';
import { paths } from '@/routes/paths';
import { Icon } from '@iconify/react';

import { logoutUser } from '@/lib/logoutUser';
import useIsSmallScreen from '@/hooks/use-IsSmallScreen';

import { LightTooltip } from './Tooltip/LightTooltip';

interface LogoutProps {
  isExpanded: boolean;
}
const Logout = ({ isExpanded }: LogoutProps) => {
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
    <LightTooltip
      disableHoverListener={!isExpanded}
      title='Wyloguj'
      placement='right'
    >
      <li
        className={`absolute bottom-0 flex w-full justify-start text-nowrap rounded-lg border-[1px] border-b-8 border-r-8 border-[#5F286B] text-[16px] shadow-md backdrop-blur-xl duration-300 hover:translate-x-[4px] hover:translate-y-[4px] hover:border-b-4 hover:border-r-4 hover:bg-mainPurple hover:text-white `}
      >
        <button onClick={handleLogout}>
          <div
            className={`flex w-full items-center justify-start gap-4 py-3 pl-4 ${isExpanded ? 'pr-4' : 'pr-20'} `}
          >
            <Icon icon='material-symbols:logout' height={20} width={20}></Icon>
            {!isExpanded && <p>Wyloguj</p>}
          </div>
        </button>
      </li>
    </LightTooltip>
  );
};

export default Logout;
