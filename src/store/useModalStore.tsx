import React from 'react';
import CustomModal from '@/ui/organisms/Modals/CustomModal';
import { create } from 'zustand';

interface ModalState {
  isOpen: boolean;
  children: React.ReactNode;
  openModal: ({ children }: { children: React.ReactNode }) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
  isOpen: false,
  children: null,
  openModal: ({ children }) => set({ children, isOpen: true }),
  closeModal: () => set({ isOpen: false, children: null }),
}));

export default function Modal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  const children = useModalStore((state) => state.children);

  return (
    <CustomModal isOpen={isOpen} onOpenChange={closeModal}>
      {children}
    </CustomModal>
  );
}
