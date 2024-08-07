import { useState } from 'react';
import Image from 'next/image';
import { useAddComment } from '@/api/posts/comments/useComment';
import CommentTextArea from '@/ui/atmos/TextArea/CommentTextArea';

import { IUser } from '@/types/User/user.types';

interface CommentFormProps {
  refetch: () => Promise<any>;
  user: IUser;
  postId: number;
}

const CommentForm = ({ refetch, user, postId }: CommentFormProps) => {
  const [commentContent, setCommentContent] = useState<string>('');
  const { mutate: addComment, isLoading } = useAddComment();

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentContent(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (commentContent.trim() === '') return;

    try {
      await addComment({ userId: user.id, postId, content: commentContent });
      setCommentContent('');
      await refetch();
    } catch (error) {
      console.error('Error adding comment:', error);
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
          className='self-start rounded-full ring-1 ring-secoundSea'
        />
        <CommentTextArea onChange={handleTextAreaChange} />
      </div>
      <button
        onClick={handleSubmit}
        disabled={isLoading}
        className='self-end rounded-lg border-[1px] bg-mainPurple px-4 py-2 text-white'
      >
        {isLoading ? 'dodaje' : 'Skomentuj'}
      </button>
    </div>
  );
};

export default CommentForm;
