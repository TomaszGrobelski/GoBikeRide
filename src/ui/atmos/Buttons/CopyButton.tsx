'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import copy from 'copy-to-clipboard';
import { toast, Toaster } from 'sonner';

import { CopyButtonStyle } from '@/styles/Components/Buttons/Buttons.styles';

interface ICopyButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  textToCopy: string;
}

const CopyButton = ({ children, textToCopy, ...props }: ICopyButton) => {
  const copyToClipboard = () => {
    copy(textToCopy);
    toast.success(`${textToCopy} został skopiowany`);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1rem',
          },
        }}
        richColors
        position='bottom-right'
      />
      <CopyButtonStyle className='mt-5' onClick={copyToClipboard} {...props}>
        {children} <Icon icon='mage:copy' fontSize={22} />
      </CopyButtonStyle>
    </>
  );
};

export default CopyButton;
