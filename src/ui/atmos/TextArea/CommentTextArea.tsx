import { HTMLAttributes } from 'react';

interface ICommentTextArea extends HTMLAttributes<HTMLTextAreaElement> {
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const CommentTextArea = ({ onChange, ...props }: ICommentTextArea) => {
  const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';
  };
  return (
    <textarea
      className='w-full resize-none overflow-hidden rounded-md border border-gray-300 p-2 py-4 focus:border-secoundSea focus:outline-none'
      placeholder='Napisz komentarz...'
      rows={1}
      onInput={autoResize}
      onChange={onChange}
      {...props}
    />
  );
};

export default CommentTextArea;
