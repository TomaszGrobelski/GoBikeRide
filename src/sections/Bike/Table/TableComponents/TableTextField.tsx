import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

interface TableTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  placeholder?: string;
  register: UseFormRegister<any>;
  error?: FieldError;
  value?: string;
}

const TableTextField: React.FC<TableTextFieldProps> = ({
  name,
  id,
  placeholder = 'Default placeholder',
  register,
  error,
  value,
  ...props
}) => {
  return (
    <>
      <input
        {...register(name)}
        type='text'
        id={id}
        // value={value}
        placeholder={placeholder}
        className='min-h-12 border-b-1 text-center outline-none'
        {...props}
      />
      {error && (
        <p className='text-red-500'>{error.message || 'Niewłaściwa wartość'}</p>
      )}
    </>
  );
};

export default TableTextField;
