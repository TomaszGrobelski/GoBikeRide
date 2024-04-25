import React from 'react';
import Carousel from './Carousel/Carousel';
import Image from 'next/image';
import arrow from '@/assets/arrow.svg';
import PricingCard from './PricingCard/PricingCard';

const HomeView = () => {
  return (
    <section className=' mt-10 flex flex-col justify-between gap-20 p-10'>
      <div className='relative w-96 space-y-4 rounded-xl bg-white from-[#7d399a] to-[#4e1f51]  p-6 shadow-md shadow-pink-500 dark:bg-gradient-to-t  dark:shadow-purple-400  '>
        <h2 className=' font-justMe'>Witajcie w naszej aplikacji rowerowej!</h2>
        <p className='font-kurale'>
          Jesteśmy podekscytowani, że dołączyliście do naszej społeczności
          pasjonatów jazdy na rowerze! Zachęcamy do dzielenia się swoimi
          preżyciami z innymi oraz do wspólnego rozwijania społecznosci
        </p>
        <Image
          src={arrow}
          alt='arrow'
          className='absolute -top-[10rem] left-[20rem] hidden w-80 xl:block'
        />
      </div>
      <Carousel />
      <div>
        <h2>Plans for everybody</h2>
        <div className='flex justify-center gap-2'>
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </section>
  );
};

export default HomeView;
