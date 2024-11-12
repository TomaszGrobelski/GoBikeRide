'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { BentoGridDemo } from './GridDemo';
import map from './map2.png';

const polylineStyle = {
    color: 'red',
    weight: 5,
};

interface UserLocation {
    latitude: number;
    longitude: number;
}

const RoadView = () => {
    return (
        <section className='flex h-full w-full flex-col items-center gap-4 p-2 px-5 pt-5'>
            <Image src={map} alt='' className='absolute left-0 top-20 -z-10 h-full w-full object-cover blur-[0px]' />
            <div className='bg-[#E4DCD3] h-screen'>
              <input type="text" />
                <BentoGridDemo />
            </div>
        </section>
    );
};

export default RoadView;
