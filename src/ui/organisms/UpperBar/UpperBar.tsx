import ThemeSwitch from '@/ui/atmos/ThemeSwitch';
import { Icon } from '@iconify/react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link';

const UpperBar = () => {
  return (
    <div className='fixed bg-purple-400 w-full p-2 px-4 top-0 right-0 flex z-0 justify-end gap-4'>
      <ThemeSwitch />

        <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
        <Icon icon="teenyicons:user-solid" fontSize={20} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href='/dashboard/profile'>
            Profil
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="DropdownMenuItem">
          <Link href='/dashboard/settings'>
            Ustawienia
          </Link>
          </DropdownMenu.Item>

        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>

    </div>
  )
}

export default UpperBar