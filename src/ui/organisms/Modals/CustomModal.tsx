'use client';

interface ICustomModal {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  children: React.ReactNode;
}

export default function CustomModal({
  isOpen = true,
  onOpenChange,
  children,
}: ICustomModal) {
  return (
    <>
      <div
        className={` ${isOpen ? 'fixed' : 'hidden'} inset-0 z-[120] flex h-full w-full items-center justify-center overflow-hidden bg-gray-400 opacity-45 backdrop-blur-xl`}
        onClick={() => onOpenChange(false)}
      >
        <div
          className='relative m-4 h-full max-h-[300px] w-full max-w-[600px] rounded-2xl border-[1px] bg-white p-4 text-black'
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => onOpenChange(false)}
            className='absolute right-4 top-4 text-[22px]'
          >
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
}
