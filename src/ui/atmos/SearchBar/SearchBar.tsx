import { InputHTMLAttributes } from 'react';
import { Search } from 'lucide-react';

interface ISearchBar extends InputHTMLAttributes<HTMLInputElement> {
  onChange: VoidFunction;
}
const SearchBar = ({ onChange, ...props }: ISearchBar) => {
  return (
    <div className='relative flex items-center space-x-2'>
      <Search className='absolute left-4 top-2 h-5 w-5' />
      <input
        className='h-9 w-full rounded-lg border border-zinc-950/10 bg-transparent p-2 pl-10 focus:outline-none'
        autoFocus
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default SearchBar;
