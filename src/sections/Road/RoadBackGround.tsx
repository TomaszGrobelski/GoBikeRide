import Image from 'next/image';

const RoadBackGround = () => {
    return (
        <Image
            src='/images/Road/roadBackground.jpeg'
            width={1000}
            height={1000}
            alt='Tło sekcji tras'
            className='absolute left-0 top-16 -z-10 h-full w-full object-cover'
        />
    );
};

export default RoadBackGround;
