import Link from 'next/link';
import { useUser } from '@/api/user/useUser';
import IconButton from '@/ui/atmos/IconButton';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import Tooltip from '@mui/material/Tooltip';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const UpperBar = () => {
  const { data: user, isLoading, error } = useUser();

  return (
    <div className='absolute right-0 top-0 z-10 flex w-full items-center justify-end gap-4 p-2 pr-2 backdrop-blur-sm'>
      <LightTooltip title='Powiadomienia' placement='bottom'>
        <div>
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
            className='DropdownMenuContent rounded-md bg-white p-4 text-slate-900'
            sideOffset={5}
          >
            <DropdownMenu.Item className='DropdownMenuItem'>
              <Link href={`/dashboard/profile/${user?.id}`}>Profil</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className='DropdownMenuItem'>
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
