import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { Icon } from '@iconify/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const UpperBar = () => {
  return (
    <div className=' flex w-full items-center justify-end gap-4 px-2'>
      <button
        className='IconButton flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-300'
        aria-label='Customise options'
      >
        <Icon icon='ic:round-notification-important' fontSize={20} />
      </button>
      <ThemeSwitch />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className='IconButton flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-300' aria-label='Customise options'>
            <Icon icon='teenyicons:user-solid' fontSize={20} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className='DropdownMenuContent' sideOffset={5}>
            <DropdownMenu.Item className='DropdownMenuItem'>
              <Link href='/dashboard/profile'>Profil</Link>
            </DropdownMenu.Item>
            <DropdownMenu.Item className='DropdownMenuItem'>
              <Link href='/dashboard/settings'>Ustawienia</Link>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default UpperBar;
