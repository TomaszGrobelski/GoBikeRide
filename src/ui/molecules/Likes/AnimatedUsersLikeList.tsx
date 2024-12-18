'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { paths } from '@/routes/paths';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

import { ILike } from '@/types/Posts/posts.types';

interface ILikes {
    likes: ILike[];
}

const AnimatedUsersLikeList = ({ likes }: ILikes) => {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);
    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
    const handleMouseMove = (event: any) => {
        const halfWidth = event.target.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    return (
        <>
            {likes.map((like) => (
                <Link href={`${paths.dashboard.profil}/${like.user.id}`} key={like.user.id}>
                    <div
                        className='group relative -mr-4'
                        onMouseEnter={() => setHoveredIndex(like.user.id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence mode='popLayout'>
                            {hoveredIndex === like.user.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: 1,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 10,
                                        },
                                    }}
                                    exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                    style={{
                                        translateX: translateX,
                                        rotate: rotate,
                                        whiteSpace: 'nowrap',
                                    }}
                                    className='absolute -left-1/2 -top-16 z-50 flex translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl'
                                >
                                    <div className='absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent' />
                                    <div className='absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent' />
                                    <div className='relative z-30 text-base font-bold text-white'>
                                        {like.user.username}
                                    </div>
                                    <div className='text-xs text-white'>{like.user.username}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <Image
                            onMouseMove={handleMouseMove}
                            height={50}
                            width={50}
                            src={like.user.avatar_url || '/default-avatars/male-avatar.png'}
                            alt={like.user.username}
                            className='relative !m-0 h-10 w-10 cursor-pointer rounded-full border-2 border-white bg-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105'
                        />
                    </div>
                </Link>
            ))}
        </>
    );
};

export default AnimatedUsersLikeList;
