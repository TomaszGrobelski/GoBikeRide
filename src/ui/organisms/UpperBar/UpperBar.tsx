import IconButton from '@/ui/atmos/IconButton';
import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { Icon } from '@iconify/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const UpperBar = () => {
  return (
    <div className=' flex w-full items-center justify-end gap-4 pr-2'>
      <IconButton
        icon='ic:round-notification-important'
        ariaLabel='Otwórz powiadomienia'
      />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <div>
            <IconButton
              icon='teenyicons:user-solid'
              ariaLabel='Customise options'
            />
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
