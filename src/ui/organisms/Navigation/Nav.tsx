import Link from 'next/link';
import '../../../styles/global.css';

const Nav = () => {
  return (
    <nav className='w-[15%] border-r-[1px] h-screen flex justify-center'>
      <ul className=' space-y-4'>
        <li>
          <Link href='/dashboard/hero'>
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href='/dashboard/contact'>
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
