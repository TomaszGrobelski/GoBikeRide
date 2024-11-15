import Image from 'next/image';

const RoadBackGround = () => {
    return (
        <Image
            src='/images/Road/roadBackground.jpeg'
            width={1000}
            height={1000}
            alt='Tło sekcji tras'
            className='absolute left-0 top-0 -z-10 max-h-[200%] w-full object-cover'
        />
    );
};

export default RoadBackGround;
