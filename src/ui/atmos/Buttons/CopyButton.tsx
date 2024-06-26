'use client';

import { ReactNode } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import copy from 'copy-to-clipboard';
import { toast, Toaster } from 'sonner';

import { CopyButtonStyle } from '@/styles/Components/Buttons/Buttons.styles';

interface ICopyButton {
  children: ReactNode;
  textToCopy: string;
}

const CopyButton = ({ children, textToCopy }: ICopyButton) => {
  const copyToClipboard = () => {
    copy(textToCopy);
    toast.success(`${textToCopy} został skopiowany`);
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1rem'
          }
        }}
        richColors
        position='bottom-right'
      />
      <CopyButtonStyle onClick={copyToClipboard}>
        {children} <Icon icon='mage:copy' fontSize={22} />
      </CopyButtonStyle>
    </>
  );
};

export default CopyButton;
