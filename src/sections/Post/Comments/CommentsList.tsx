import Image from 'next/image';
import { useDeleteComment } from '@/api/posts/comments/useComment';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import { calculateTimeDifference } from '@/utils/date-utils/calculateTimeDiffrence';
import { Icon } from '@iconify/react/dist/iconify.js';

import { IComment } from '@/types/Posts/comment/comment.types';

interface ICommentsList {
    comments: IComment[];
}

// POkaż tylko 1 komentarz i przycisk jak sie chce wiecej zobaczyć. po czym wyskkuje max 10 komentarzy i znowu przycisk......

const CommentsList = ({ comments }: ICommentsList) => {
    const { mutate: deleteComment, isPending: isDeletingComment } = useDeleteComment();

    const handleDeleteComment = async (id: number) => {
        await deleteComment(id);
    };
    return (
        <div>
            <ul className='flex flex-col gap-3'>
                {comments.map((comment) => (
                    <li key={comment.id} className='flex flex-row gap-2'>
                        <UserAvatar />

                        <div className='relative flex w-full flex-col items-start gap-1 rounded-xl bg-[#819b336b]/[0.35] px-4 py-2'>
                            <div className='flex flex-col '>
                                <p className='text-[14px] font-semibold'>{comment.user.username}</p>
                                <span className='text-[12px] tracking-tighter text-gray-500'>
                                    {calculateTimeDifference(comment.createdAt)}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDeleteComment(comment.id)}
                                disabled={isDeletingComment}
                                className='absolute right-1 top-1 z-50'
                            >
                                <Icon icon='iconamoon:close-fill' fontSize={22} />
                            </button>
                            <div className=''>{comment.content}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsList;
