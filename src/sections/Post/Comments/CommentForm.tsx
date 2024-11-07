'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useAddComment } from '@/api/posts/comments/useComment';
import { Button } from '@/ui/atmos/Buttons/MovingBorderBox/MovingBorderBox';
import CommentTextArea from '@/ui/atmos/TextArea/CommentTextArea';
import CustomToaster from '@/ui/atmos/Toaster/CustomToaster';
import { toast } from 'sonner';

import { IUser } from '@/types/User/user.types';

interface CommentFormProps {
    refetch: () => Promise<any>;
    user: IUser;
    postId: number;
    postOwnerId: string;
}

const CommentForm = ({ refetch, user, postId, postOwnerId }: CommentFormProps) => {
    const [commentContent, setCommentContent] = useState<string>('');
    const { mutate: addComment, isPending } = useAddComment();

    const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCommentContent(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (commentContent.trim() === '') return;

        try {
            await addComment({ userId: user.id, postOwnerId, postId, content: commentContent });
            await refetch();
            setCommentContent('');
        } catch {
            toast.error('Błąd podczas dodawania komentarza, spróbuj ponownie później');
        }
    };

    return (
        <div className='flex flex-col gap-4 border-t-[1px] pt-6'>
            <div className='flex items-center gap-2'>
                <Image
                    src={user.avatar_url || '/default-avatars/male-avatar.png'}
                    width={40}
                    height={40}
                    alt='awatar użytkownika'
                    className='mt-2 self-start rounded-full ring-1 ring-secoundSea'
                />
                <CommentTextArea value={commentContent} onChange={handleTextAreaChange} />
            </div>

            <div className='self-end'>
                <Button
                    duration={1500}
                    onClick={handleSubmit}
                    disabled={isPending}
                    borderRadius='1.5rem'
                    containerClassName='bg-mainColor'
                    borderClassName={isPending ? 'bg-secoundSea' : ''}
                    className='self-end rounded-lg border-[1px] bg-mainColor px-4 py-2 text-white'
                >
                    {isPending ? 'Dodawanie...' : 'Skomentuj'}
                </Button>
            </div>

            <CustomToaster />
        </div>
    );
};

export default CommentForm;
