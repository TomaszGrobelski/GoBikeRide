'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDeleteNotification, useNotification } from '@/api/user/useUser';
import { paths } from '@/routes/paths';
import { cn } from '@/utils/classMerge';
import { Icon } from '@iconify/react/dist/iconify.js';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { MessageCircle, User } from 'lucide-react';
import useMeasure from 'react-use-measure';

import { IUserResponse } from '@/types/Api/apiResponse';
import { INotification } from '@/types/User/user.types';
import useClickOutside from '@/hooks/use-ClickOutside';

import NotificationItem from './NotificationItem';

const transition = {
    type: 'spring',
    bounce: 0.1,
    duration: 0.25,
};

interface ICustomDropDown {
    user: IUserResponse;
}

export default function CustomDropDown({ user }: ICustomDropDown) {
    const { data: notifications } = useNotification(user?.id!);
    const { mutate: deleteNotification, isPending: isDeleteNotification } = useDeleteNotification();
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

    const handleDeleteNotification = async (id: number) => {
        deleteNotification(id);
    };

    const ITEMS = [
        {
            id: 1,
            label: 'Notyfication',
            title: (
                <Icon
                    icon='ic:round-notification-important'
                    fontSize={20}
                    color={notifications && notifications.length > 0 ? 'red' : ''}
                />
            ),
            content: (
                <div className='flex w-full flex-col gap-2'>
                    {notifications && notifications.length > 0 ? (
                        notifications.map((notification: INotification) => (
                            <NotificationItem
                                key={notification.id}
                                notification={notification}
                                handleDeleteNotification={handleDeleteNotification}
                                isDeleteNotification={isDeleteNotification}
                            />
                        ))
                    ) : (
                        <p className='text-left text-zinc-700'>0 powiadomień</p>
                    )}
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
                <div className='realtive min-h-[30px]'>
                    <Link href={`${paths.dashboard.profil}/${user?.id}`}>
                        <div className='top-18 absolute left-4 flex w-[170px] cursor-pointer items-center gap-2 p-1 transition-all duration-150 hover:border-b-1 hover:border-mainColor'>
                            <Icon icon='iconamoon:profile-circle-light' fontSize={18} />
                            <p className='text-[16px]'>Profil</p>
                        </div>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <MotionConfig transition={transition}>
            <div className='absolute right-28 top-1 min-w-[200px]' ref={ref}>
                <div className='h-full w-full rounded-xl border border-zinc-950/15 bg-white shadow-md shadow-zinc-400'>
                    <div className='flex justify-center space-x-4 p-2' ref={menuRef}>
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
                                    className='w-full'
                                >
                                    <div ref={contentRef} className='w-full p-2'>
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
                                                            'w-full px-2 pt-2 text-sm',
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
