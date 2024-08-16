import React from 'react';
import { useModalStore } from '@/store/useModalStore';
import { Icon } from '@iconify/react/dist/iconify.js';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import DeletePostModalContent from './Modals/DeletePostModalContent';

interface PostsDrowdownProps {
  postId: number;
}

const PostsDrowdown = ({ postId }: PostsDrowdownProps) => {
  const openModal = useModalStore((state) => state.openModal);
  const openEditModal = () => openModal({ children: <div>Edytuj</div> });
  const openDeleteModal = () =>
    openModal({ children: <DeletePostModalContent postId={postId} /> });

  return (
    <div className='absolute right-5 top-5'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            className='p-1 hover:rounded-full hover:bg-gray-200 focus:outline-none'
            onClick={(e) => e.preventDefault()}
          >
            <Icon icon='iconamoon:menu-kebab-vertical-bold' fontSize={28} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className='DropdownMenuContent realtive min-h-[100px] min-w-[150px] space-y-3 rounded-md border-[1px] bg-white px-3 py-4 font-poppins text-secoundSea shadow-md'
            sideOffset={5}
          >
            <DropdownMenu.Item className='DropdownMenuItem hover:border-mainColor absolute top-3 flex w-[110px] cursor-pointer items-center justify-start gap-2 p-1 outline-none transition-all duration-150 hover:border-b-1'>
              <button onClick={openEditModal} className='w-full text-start'>
                Edytuj
              </button>
            </DropdownMenu.Item>

            <DropdownMenu.Item className='DropdownMenuItem hover:border-mainColor absolute top-10 flex h-8 w-[110px] cursor-pointer items-center justify-start gap-2 p-1 outline-none transition-all duration-150 hover:border-b-1'>
              <button onClick={openDeleteModal} className='w-full text-start'>
                Usuń
              </button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default PostsDrowdown;
