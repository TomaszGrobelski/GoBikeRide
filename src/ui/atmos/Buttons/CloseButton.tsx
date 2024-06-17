import { Icon } from '@iconify/react/dist/iconify.js';
import { twMerge } from 'tailwind-merge';

interface ICloseButton {
  setOpen: (open: boolean) => void;
  className?: string;
}
const CloseButton = ({ setOpen, className }: ICloseButton) => {
  return (
    <button onClick={() => setOpen(false)}>
      <Icon
        icon='ic:round-close'
        color='red'
        fontSize={20}
        className={twMerge('absolute right-2 top-2 cursor-pointer', className)}
      />
    </button>
  );
};

export default CloseButton;
