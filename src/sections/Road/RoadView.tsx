'use client';

import { useEffect, useRef, useState } from 'react';
import { BentoGridDemo } from './GridDemo';

const polylineStyle = {
  color: 'red',
  weight: 5
};

interface UserLocation {
  latitude: number;
  longitude: number;
}

const RoadView = () => {
 

  return (
    <section className='mt-20 flex w-full flex-col items-center gap-4 p-2 bg-gray-300'>
      <h1>Ta podstrona jest chilowo nie dostępna</h1>
      <BentoGridDemo />
    </section>
  );
};

export default RoadView;
