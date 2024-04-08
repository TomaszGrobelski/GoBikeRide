import Link from 'next/link';
import '../styles/global.css';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <Link href='/dashboard/hero'>dashboard</Link>
      <Image
        src='/assets/MainPhoto.jpg'
        alt='Zdjęcie strony wejściowej'
        width={1300}
        height={1300}
        layout='responsive'
      />
    </div>
  );
};

export default Page;
