import React, { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

import { ILike } from '@/types/Posts/posts.types';

interface ILikeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    likes: ILike[];
    userId: string;
}
const LikeButton = ({ likes, userId, ...props }: ILikeButton) => {
    return (
        <button
            className={`flex items-center gap-3 rounded-xl border-[1px] px-3 py-1 transition-all duration-300 hover:border-red-600 ${
                likes.some((like) => like.userId === userId) ? 'border-red-500' : ''
            }`}
            {...props}
        >
            <span className='custom_hear_like'>
                <Icon
                    icon='prime:heart-fill'
                    fontSize={22}
                    className={likes.some((like) => like.userId === userId) ? 'text-red-500' : 'text-gray-500'}
                />
            </span>

            <span className='text-nowrap'>{likes.some((like) => like.userId === userId) ? 'Lubię to' : 'Polub'}</span>
        </button>
    );
};

export default LikeButton;
