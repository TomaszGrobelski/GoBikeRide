import { HTMLAttributes } from 'react';

interface ICommentTextArea extends HTMLAttributes<HTMLTextAreaElement> {
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    value: string;
}

const CommentTextArea = ({ onChange, value, ...props }: ICommentTextArea) => {
    const autoResize = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight + 'px';
    };
    return (
        <textarea
            className='w-full resize-none overflow-hidden rounded-md border border-gray-300 p-2 py-3 focus:border-secoundSea focus:outline-none'
            placeholder='Napisz komentarz...'
            rows={1}
            onInput={autoResize}
            value={value}
            onChange={onChange}
            {...props}
        />
    );
};

export default CommentTextArea;
