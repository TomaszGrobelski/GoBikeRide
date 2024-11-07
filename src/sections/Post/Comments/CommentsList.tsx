import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDeleteComment } from '@/api/posts/comments/useComment';
import { paths } from '@/routes/paths';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import { calculateTimeDifference } from '@/utils/date-utils/calculateTimeDiffrence';
import { Icon } from '@iconify/react/dist/iconify.js';

import { IComment } from '@/types/Posts/comment/comment.types';
import { IUser } from '@/types/User/user.types';
import colors from '@/styles/colors';

import ShowMoreButton from './ShowMoreButton';

interface ICommentsList {
    comments: IComment[];
    user: IUser;
}

const CommentsList = ({ comments, user }: ICommentsList) => {
    const { mutate: deleteComment, isPending: isDeletingComment } = useDeleteComment();
    const [visibleComments, setVisibleComments] = useState(2);

    const handleDeleteComment = async (id: number) => {
        await deleteComment(id);
    };

    const showMoreComments = () => {
        setVisibleComments((prev) => prev + 5);
    };

    return (
        <div className='flex flex-col'>
            <ul className='flex flex-col gap-3'>
                {comments.slice(0, visibleComments).map((comment) => (
                    <li key={comment.id} className='flex flex-row gap-2'>
                        <Link href={`${paths.dashboard.profil}/${comment.user.id}`}>
                            <UserAvatar />
                        </Link>

                        <div className='relative flex w-full flex-col items-start gap-1 rounded-xl bg-[#e1e6d1] px-4 py-2'>
                            <div className='flex flex-col'>
                                <p className='text-[14px] font-semibold'>{comment.user.username}</p>
                                <span className='text-[12px] tracking-tighter text-gray-500'>
                                    {calculateTimeDifference(comment.createdAt)}
                                </span>
                            </div>
                            {comment.user.id === user.id && (
                                <button
                                    onClick={() => handleDeleteComment(comment.id)}
                                    disabled={isDeletingComment}
                                    className='absolute right-1 top-1 z-50'
                                >
                                    <Icon icon='iconamoon:close-fill' fontSize={22} color={colors.secondary} />
                                </button>
                            )}
                            <div>{comment.content}</div>
                        </div>
                    </li>
                ))}
            </ul>

            {visibleComments < comments.length && <ShowMoreButton onClick={showMoreComments} />}
        </div>
    );
};

export default CommentsList;
