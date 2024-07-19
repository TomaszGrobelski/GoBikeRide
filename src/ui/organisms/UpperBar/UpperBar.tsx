import Link from 'next/link';
import IconButton from '@/ui/atmos/IconButton';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const UpperBar = () => {
  return (
    <div className='absolute right-0 top-0 flex w-full items-center justify-end gap-4 border-b-[1px] border-white p-2 pr-2 backdrop-blur-sm'>
      <IconButton
        icon='ic:round-notification-important'
        ariaLabel='Otwórz powiadomienia'
      />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div>
            <button>
              <UserAvatar />
            </button>
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className='DropdownMenuContent rounded-md bg-white p-4 text-slate-900'
            sideOffset={5}
          >
            <DropdownMenu.Item className='DropdownMenuItem'>
              <Link href='/dashboard/profile'>Profil</Link>
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
