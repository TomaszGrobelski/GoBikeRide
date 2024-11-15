import React from 'react';
import Image from 'next/image';

interface PostContentProps {
    description: string;
    imageUrl: string;
    postId: number;
}

const PostContent = ({ description, imageUrl, postId }: PostContentProps) => {
    return (
        <div className='space-y-4'>
            <p className='text-balance indent-4'>{description}</p>
            <Image
                src={imageUrl}
                alt={`Post ${postId}`}
                width={500}
                height={500}
                className='max-h-[600px] w-full rounded-md'
            />
        </div>
    );
};

export default PostContent;
