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
    <section className='mt-10 flex flex-col items-center justify-between gap-20 p-10'>
      <div className='flex justify-between gap-[200px]'>
        <div className='relative w-96 space-y-4 rounded-xl bg-white from-[#7d399a] to-[#4e1f51] p-6 shadow-md shadow-pink-500 dark:bg-gradient-to-t dark:shadow-purple-400'>
          <h2 className='font-justMe text-xl'>
            Witajcie w naszej aplikacji rowerowej!
          </h2>
          <p className='font-kurale text-[18px]'>
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

        {/* Kluczowe funkcje */}
        <div className='relative w-96 space-y-4 rounded-xl bg-white from-[#7d399a] to-[#4e1f51] p-6 shadow-md shadow-pink-500 dark:bg-gradient-to-t dark:shadow-purple-400'>
          <div className='w-full space-y-4 p-6'>
            <h3 className='font-justMe text-xl'>Najważniejsze funkcje:</h3>
            <ul className='list-disc pl-5 font-kurale text-[18px]'>
              <li>
                Planowanie tras: Znajdź i zaplanuj najlepsze trasy rowerowe.
              </li>
              <li>
                Monitorowanie aktywności: Śledź swoje przejazdy i osiągnięcia.
              </li>
              <li>
                Społeczność: Dołącz do naszej społeczności i dziel się swoimi
                doświadczeniami.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Carousel />

      {/* Aktualności */}
      <div className=' space-y-4 p-6'>
        <h3 className='text-xl font-bold'>Aktualności i ogłoszenia:</h3>
        <ul className='list-disc pl-5'>
          <li>Nowe trasy dodane!</li>
          <li>Aktualizacja aplikacji w wersji 2.0.</li>
        </ul>
      </div>

      {/* Popularne trasy */}
      <div className=' space-y-4 p-6'>
        <h3 className='text-xl font-bold'>Najpopularniejsze trasy:</h3>
        <ul className='list-disc pl-5'>
          <li>Trasa wokół jeziora</li>
          <li>Górska przygoda</li>
          <li>Miejska przejażdżka</li>
        </ul>
      </div>

      {/* Carousel */}
      <Carousel />

      {/* Porady i artykuły */}
      <div className=' space-y-4 p-6'>
        <h3 className='text-xl font-bold'>Porady i artykuły:</h3>
        <ul className='list-disc pl-5'>
          <li>Jak dbać o rower?</li>
          <li>Najlepsze trasy na weekend.</li>
          <li>Zdrowie i kondycja dla rowerzystów.</li>
        </ul>
      </div>

      {/* Wsparcie i kontakt */}
      <div className=' space-y-4 p-6'>
        <h3 className='text-xl font-bold'>Wsparcie i kontakt:</h3>
        <p>
          Jeśli masz pytania lub potrzebujesz pomocy, skontaktuj się z naszym
          zespołem wsparcia: support@gobikeride.com
        </p>
      </div>

      {/* Zachęta do wersji Premium */}

      <p className='relative mx-8 self-center pt-10 text-center font-poppins text-[20px] md:text-[30px] lg:text-[40px]'>
        Dołącz do GoBikeRide Premium i korzystaj ze wszystkich funkcji, jakie
        oferuje aplikacja:
      </p>

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
