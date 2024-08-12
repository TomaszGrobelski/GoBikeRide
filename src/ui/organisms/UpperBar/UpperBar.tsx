import Link from 'next/link';
import { useUser } from '@/api/user/useUser';
import IconButton from '@/ui/atmos/IconButton';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import { Icon } from '@iconify/react/dist/iconify.js';
import Tooltip from '@mui/material/Tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import '@/styles/UpperBar/upperBar.css';

const UpperBar = () => {
  const { data: user, isLoading, error } = useUser();

  return (
    <div
      style={{ width: 'calc(100% - 5rem)' }}
      className='.upperBar-bottom-border fixed right-0 top-0 z-10 flex items-center justify-end gap-4 rounded-b-[80%] border-b-[1px] border-gray-300  p-2 pb-10 pr-2 backdrop-blur-md'
    >
      <LightTooltip title='Powiadomienia' placement='bottom'>
        <div className='rounded-full hover:bg-gray-200'>
          <IconButton
            icon='ic:round-notification-important'
            ariaLabel='Otwórz powiadomienia'
          />
        </div>
      </LightTooltip>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div>
            <LightTooltip title='Użytkownik' placement='bottom'>
              <button>
                <UserAvatar />
              </button>
            </LightTooltip>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className='DropdownMenuContent realtive min-h-[100px] min-w-[150px] space-y-3 rounded-md border-[1px] bg-white px-3 py-4 font-poppins text-secoundSea shadow-md'
            sideOffset={5}
          >
            <DropdownMenu.Item className='DropdownMenuItem absolute top-3 flex w-[120px] cursor-pointer items-center gap-2 p-1 transition-all duration-150 hover:border-b-1 hover:border-mainPurple'>
              <Icon icon='iconamoon:profile-circle-light' />
              <Link href={`/dashboard/profile/${user?.id}`}>Profil</Link>
            </DropdownMenu.Item>

            <DropdownMenu.Item className='DropdownMenuItem absolute top-10 flex h-8 w-[120px] cursor-pointer items-center gap-2 p-1 transition-all duration-150 hover:border-b-1 hover:border-mainPurple'>
              <Icon icon='carbon:settings' />
              <Link href='/dashboard/settings'>Ustawienia</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      <ThemeSwitch />
    </div>
  );
};

export default UpperBar;
