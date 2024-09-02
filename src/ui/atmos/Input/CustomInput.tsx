interface ICustomInput {
  label?: string;
  defaultValue?: string;
}

const CustomInput = ({ label, defaultValue }: ICustomInput) => {
  return (
    <div className='space-y-1'>
      <label htmlFor=''>Zmień nazwe roweru</label>
      <input
        type='text'
        defaultValue={defaultValue}
        className='w-full rounded-md border p-2 outline-none'
      />
    </div>
  );
};

export default CustomInput;
