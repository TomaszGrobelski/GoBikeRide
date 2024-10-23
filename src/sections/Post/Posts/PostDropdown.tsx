import React, { useEffect, useRef, useState } from 'react';
import DeletePostModalContent from '@/sections/Post/Posts/Modals/DeletePostModalContent';
import { useModalStore } from '@/store/useModalStore';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion } from 'framer-motion';

import { IPost } from '@/types/Posts/posts.types';
import useClickOutside from '@/hooks/use-ClickOutside';

import EditPostModalContent from './Modals/EditPostModalContent';

interface PostsDrowdownProps {
  postId: number;
  post: IPost;
}

const PostDropdown = ({ postId, post }: PostsDrowdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); 
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const openModal = useModalStore((state) => state.openModal);
  const openEditModal = () =>
    openModal({
      children: <EditPostModalContent post={post} />,
    });
  const openDeleteModal = () =>
    openModal({ children: <DeletePostModalContent postId={postId} /> });

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className='absolute right-5 top-5 z-50' ref={dropdownRef}>
      <button onClick={handleDropdown}>
        <Icon
          icon='iconamoon:menu-kebab-vertical-bold'
          fontSize={28}
          color='#102532'
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='absolute -right-10 w-[130px] border-[1px] bg-white p-2 shadow-md'
          >
            <div className='flex w-[110px] cursor-pointer items-center justify-start gap-2 border-b-[1px] border-transparent p-1 transition-all duration-150 hover:border-mainColor'>
              <button onClick={openEditModal} className='w-full text-start'>
                Edytuj
              </button>
            </div>
            <div className='flex w-[110px] cursor-pointer items-center justify-start gap-2 border-b-[1px] border-transparent p-1 transition-all duration-150 hover:border-mainColor'>
              <button onClick={openDeleteModal} className='w-full text-start'>
                Usuń
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PostDropdown;
