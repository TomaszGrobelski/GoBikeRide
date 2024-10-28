import React, { useEffect, useRef, useState } from 'react';
import DeletePostModalContent from '@/sections/Post/Posts/Modals/DeletePostModalContent';
import { useModalStore } from '@/store/useModalStore';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion } from 'framer-motion';

import { IPost } from '@/types/Posts/posts.types';
import useClickOutside from '@/hooks/use-ClickOutside';

import EditPostModalContent from './Modals/EditPostModalContent';
import { postSchema } from './post.schema';

interface PostsDrowdownProps {
  post: IPost;
}

const PostDropdown = ({ post }: PostsDrowdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { openModal, closeModal } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
  }));

  const openEditModal = () =>
    openModal({
      children: <EditPostModalContent post={post} closeModal={closeModal} />,
    });
  const openDeleteModal = () =>
    openModal({ children: <DeletePostModalContent postId={post.id} /> });

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
