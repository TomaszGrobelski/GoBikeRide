import { Icon } from '@iconify/react/dist/iconify.js';

interface IAddButton {
  isSubmitting: boolean;
}

const AddButton = ({ isSubmitting }: IAddButton) => {
  return (
    <button
      type='submit'
      disabled={isSubmitting}
      className='group relative flex items-center justify-center self-end overflow-hidden rounded-lg border-[1px] border-green-500 px-2 py-1 font-poppins'
    >
      {isSubmitting ? (
        <Icon icon='line-md:loading-loop' fontSize={20} />
      ) : (
        <p className='relative z-10 flex items-center gap-1 transition-colors duration-500 group-hover:text-white'>
          <Icon
            icon='carbon:add-filled'
            fontSize={22}
            className='text-green-600 transition-colors duration-500 group-hover:text-white'
          />
          <span>DODAJ</span>
        </p>
      )}
      <span className='absolute inset-0 origin-left scale-x-0 transform bg-green-400 transition-transform duration-500 group-hover:scale-x-100'></span>
    </button>
  );
};

export default AddButton;
