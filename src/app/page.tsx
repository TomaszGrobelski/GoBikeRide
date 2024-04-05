import Link from 'next/link';
import '../styles/global.css';
import Image from 'next/image';

const Page = () => {
  return (
    <div>
      <Link href='/dashboard' >dashboard</Link>
      <Image
        src='/assets/MainPhoto.jpg'
        alt='Zdjęcie strony wejściowej'
        width={1300}
        height={729}
        layout='responsive'
      />
    </div>
  );
};

export default Page;
