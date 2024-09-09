'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { paths } from '@/routes/paths';
import IconButton from '@/ui/atmos/IconButton';
import { cn } from '@/utils/classMerge';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { Folder, MessageCircle, User, WalletCards } from 'lucide-react';
import useMeasure from 'react-use-measure';

import { IUserResponse } from '@/types/Api/apiResponse';
import { IUser } from '@/types/User/user.types';
import useClickOutside from '@/hooks/use-ClickOutside';

const transition = {
  type: 'spring',
  bounce: 0.1,
  duration: 0.25,
};

interface ICustomDropDown {
  user: IUserResponse;
}

export default function CustomDropDown({ user }: ICustomDropDown) {
  const [active, setActive] = useState<number | null>(null);
  const [contentRef, { height: heightContent }] = useMeasure();
  const [menuRef, { width: widthContainer }] = useMeasure();
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState(0);

  useClickOutside(ref, () => {
    setIsOpen(false);
    setActive(null);
  });

  useEffect(() => {
    if (!widthContainer || maxWidth > 0) return;

    setMaxWidth(widthContainer);
  }, [widthContainer, maxWidth]);

  const ITEMS = [
    {
      id: 1,
      label: 'Notyfication',
      title: <Icon icon='ic:round-notification-important' />,
      content: (
        <div className='w-full'>
          <p className='text-left text-zinc-700'>0 powiadomień</p>
        </div>
      ),
    },
    {
      id: 2,
      label: 'Messages',
      title: <MessageCircle className='h-5 w-5' />,
      content: (
        <div className='flex flex-col space-y-4'>
          <p className='text-zinc-700'>0 wiadomości</p>
        </div>
      ),
    },
    {
      id: 3,
      label: 'User',
      title: <User className='h-5 w-5' />,
      content: (
        <div className='realtive min-h-[60px]'>
          <Link href={`${paths.dashboard.profil}/${user?.id}`}>
            <div className='absolute left-3 top-14 flex w-[110px] cursor-pointer items-center gap-2 p-1 transition-all duration-150 hover:border-b-1 hover:border-mainColor'>
              <Icon icon='iconamoon:profile-circle-light' />
              <p>Profil</p>
            </div>
          </Link>
          <Link href={`${paths.dashboard.settings}`}>
            <div className='absolute left-3 top-24 flex w-[110px] cursor-pointer items-center gap-2 p-1 transition-all duration-150 hover:border-b-1 hover:border-mainColor'>
              <Icon icon='carbon:settings' />
              <p>Ustawienia</p>
            </div>
          </Link>
        </div>
      ),
    },
  ];

  const itemWidth = 55; // Example width of each item (adjust as needed)
  const itemsCount = ITEMS.length;
  const calculatedWidth = itemWidth * itemsCount;

  return (
    <MotionConfig transition={transition}>
      <div className='absolute right-28 top-1 min-w-[170px]' ref={ref}>
        <div className='h-full w-full rounded-xl border border-zinc-950/10 bg-white'>
          <div className='flex space-x-4 p-2' ref={menuRef}>
            {ITEMS.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                className={cn(
                  'relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]',
                  active === item.id ? 'bg-zinc-100 text-zinc-800' : '',
                )}
                type='button'
                onClick={() => {
                  if (!isOpen) setIsOpen(true);
                  if (active === item.id) {
                    setIsOpen(false);
                    setActive(null);
                    return;
                  }

                  setActive(item.id);
                }}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className='overflow-hidden'>
            <AnimatePresence initial={false} mode='sync'>
              {isOpen ? (
                <motion.div
                  key='content'
                  initial={{ height: 0 }}
                  animate={{ height: heightContent || 0 }}
                  exit={{ height: 0 }}
                  style={{
                    width: calculatedWidth,
                  }}
                >
                  <div ref={contentRef} className='p-2'>
                    {ITEMS.map((item) => {
                      const isSelected = active === item.id;

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isSelected ? 1 : 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <div
                            className={cn(
                              'px-2 pt-2 text-sm',
                              isSelected ? 'block' : 'hidden',
                            )}
                          >
                            {item.content}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
}
