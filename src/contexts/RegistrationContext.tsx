'use client';

import { createContext, useContext, useState } from 'react';

interface RegistrationContextType {
  registeredSuccessfully: boolean;
  setRegisteredSuccessfully: (value: boolean) => void;
}

const defaultValue: RegistrationContextType = {
  registeredSuccessfully: false,
  setRegisteredSuccessfully: () => {}
};

const RegistrationContext =
  createContext<RegistrationContextType>(defaultValue);

type Props = {
  children: React.ReactNode;
};

export const RegistrationProvider = ({ children }: Props) => {
  const [registeredSuccessfully, setRegisteredSuccessfully] =
    useState<boolean>(false);

  return (
    <RegistrationContext.Provider
      value={{ registeredSuccessfully, setRegisteredSuccessfully }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export const useRegistration = () => useContext(RegistrationContext);
