import Image from 'next/image';
import UserAvatar from '@/ui/atmos/UserAvatar/UserAvatar';
import { calculateTimeDifference } from '@/utils/date-utils/calculateTimeDiffrence';

import { IComment } from '@/types/Posts/comment/comment.types';

interface ICommentsList {
  comments: IComment[];
}
 
// POkaż tylko 1 komentarz i przycisk jak sie chce wiecej zobaczyć. po czym wyskkuje max 10 komentarzy i znowu przycisk......

const CommentsList = ({ comments }: ICommentsList) => {
  return (
    <div>
      <ul className='flex flex-col gap-10'>
        {comments.map((comment) => (
          <li key={comment.id} className='flex flex-row gap-2'>
            
            <UserAvatar />

            <div className='flex flex-col items-start py-2 px-4 gap-4 bg-gray-300 w-full rounded-xl'>

              <div>
                <p className=' font-semibold text-[14px]'>{comment.user.username}</p>
                <span className='text-[12px] tracking-tighter text-gray-500'>
                  {calculateTimeDifference(comment.createdAt)}
                </span>
              </div>

              <div className=''>{comment.content}</div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
