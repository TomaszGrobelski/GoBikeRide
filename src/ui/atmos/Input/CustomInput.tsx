import { ButtonHTMLAttributes } from 'react';

interface ICustomInput extends ButtonHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ label, value, onChange, ...props }: ICustomInput) => {
  return (
    <div className='space-y-1'>
      {label && <label>{label}</label>}
      <input
        type='text'
        onChange={onChange}
        value={value}
        className='w-full rounded-md border p-2 outline-none'
        {...props}
      />
    </div>
  );
};

export default CustomInput;
