'use client';

import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/arrow.svg';
import GradientBox from '@/ui/atmos/Boxes/GradientBox';
import CardInformation from '@/ui/molecules/Cards/CardInformation';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Item } from '@radix-ui/react-dropdown-menu';

import PricingCard from '../premium/PricingCard/PricingCard';
import Carousel from './Carousel/Carousel';
import { homeCardInfromation } from './homeCardInformation';

const HomeView = () => {
  return (
    <section className='mt-10 flex flex-col justify-between gap-20 p-10'>
      <div className='relative w-96 space-y-4 rounded-xl bg-white from-[#7d399a] to-[#4e1f51] p-6 shadow-md shadow-pink-500 dark:bg-gradient-to-t dark:shadow-purple-400'>
        <h2 className='font-justMe'>Witajcie w naszej aplikacji rowerowej!</h2>
        <p className='font-kurale'>
          Jesteśmy podekscytowani, że dołączyliście do naszej społeczności
          pasjonatów jazdy na rowerze! Zachęcamy do dzielenia się swoimi
          preżyciami z innymi oraz do wspólnego rozwijania społecznosci!
        </p>
        <Image
          src={arrow}
          alt='arrow'
          className='absolute -top-[10rem] left-[20rem] hidden w-80 xl:block'
        />
      </div>
      <Carousel />
      <GradientBox>
        <p className='relative mx-8 self-center pt-10 text-center font-poppins text-[20px] md:text-[30px] lg:text-[40px]'>
          Dołącz do GoBikeRide Premium i korzystaj ze wszystkich funkcji, jakie
          oferuje aplikacja:
        </p>
        <div className='grid grid-cols-4 gap-8 p-4 lg:gap-12 xl:grid-cols-8'>
          {homeCardInfromation.map((item) => (
            <CardInformation
              key={item.icon}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </GradientBox>
    </section>
  );
};

export default HomeView;
