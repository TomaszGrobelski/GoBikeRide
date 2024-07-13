import React from 'react';
import Link from 'next/link';
import { paths } from '@/routes/paths';

const NotFound = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center gap-5 bg-black text-white'>
      <h1>404 - Strona nie znaleziona</h1>
      <p>
        Przepraszamy, ale strona, której szukasz, nie istnieje. Prawdopodobnie
        adres, który wpisałeś jest błędny.
      </p>
      <p>
        Sprawdź pisownie i spróbuj jeszcze raz lub powróc do strony głównej.
      </p>
      <button className='rounded-full border-[1px] border-white p-2 px-4 hover:bg-white hover:text-black'>
        <Link href={paths.dashboard.home}>
          <span>Powrót na stronę główną</span>
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
