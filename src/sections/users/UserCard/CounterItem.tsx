import React from 'react';

interface CounterItemProps {
  count?: number;
  label: string;
}

const CounterItem = ({ count = 0, label }: CounterItemProps) => {
  return (
    <div className='flex flex-col items-center'>
      <span>{count}</span>
      <p>{label}</p>
    </div>
  );
};

export default CounterItem;
