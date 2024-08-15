import { ButtonHTMLAttributes } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

interface IDeleteButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: VoidFunction;
}
const DeleteButton = ({ onClick, ...props }: IDeleteButton) => {
  return (
    <button
      onClick={onClick}
      className='group flex items-center gap-3 rounded-full border-[1px] border-white bg-red-500 px-4 py-2 font-semibold text-white ring-[2px] ring-red-400 transition-all duration-300 hover:bg-white hover:text-red-500'
      {...props}
    >
      <div className='rounded-full bg-white p-1 text-red-500 transition-all duration-300 group-hover:bg-red-500 group-hover:text-white'>
        <Icon icon='fa6-regular:trash-can' fontSize={18} />
      </div>
      Usuń
    </button>
  );
};

export default DeleteButton;
