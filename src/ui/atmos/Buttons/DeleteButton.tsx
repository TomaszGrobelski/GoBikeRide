import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface IDeleteButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: VoidFunction;
    isLoading?: boolean;
    title?: string;
    isIcon?: boolean;
}
const DeleteButton = ({ onClick, isLoading, title, isIcon = true, ...props }: IDeleteButton) => {
    return (
        <button
            onClick={onClick}
            className='group flex items-center gap-3 rounded-full border-[1px] border-white bg-red-500 px-3 py-1 font-semibold text-white ring-[2px] ring-red-400 transition-all duration-300 hover:bg-slate-100 hover:text-red-500'
            {...props}
        >
            {isIcon && (
                <div className='rounded-full bg-slate-100 p-1 text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white'>
                    {isLoading ? (
                        <Icon icon='line-md:loading-loop' fontSize={18} />
                    ) : (
                        <Icon icon='fa6-regular:trash-can' fontSize={18} />
                    )}
                </div>
            )}
            {title ? title : 'Usuń'}
        </button>
    );
};

export default DeleteButton;
