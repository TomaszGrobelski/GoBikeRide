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
import HomeCard from './HomeCard/HomeCard';
import { homeCardList } from './HomeCard/homeCardList';
import { homeCardInfromation } from './homeCardInformation';

const HomeView = () => {
  return (
    <section className='mt-10 flex flex-col items-center justify-between gap-20 '>
      {/* <Image className=' shadow-md shadow-mainPurple object-fill rounded-xl max-w-[1200px] max-h-[500px]' src={'/images/mainBike.jpg'} alt='tło_roweru' width={1000} height={300} /> */}
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

        {/* <div className='relative w-96 space-y-4 rounded-xl bg-white from-[#7d399a] to-[#4e1f51] p-6 shadow-md shadow-pink-500 dark:bg-gradient-to-t dark:shadow-purple-400'>
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
        </div> */}
      </div>

      <Carousel />

      <div className='relative flex h-[300px] w-full items-center justify-center gap-10 bg-[#102532] text-white font-poppins'>
        <p className='w-1/2 text-center text-[28px]'>Wspólnie osiągamy sukces</p>
        <p className='w-1/2 text-balance px-10'>
          Nasz zespół ekspertów współpracuje z Tobą przez cały cykl życia
          produktu, aby osiągnąć trzy kluczowe cele: rozwiązać właściwe
          problemy, stworzyć odpowiednie produkty i zmaksymalizować potencjał
          Twoich zasobów cyfrowych w celu zapewnienia trwałego wzrostu.
        </p>
      </div>

      {homeCardList.map((card, index) => (
        <HomeCard
          key={index}
          imageSrc={card.imageSrc}
          altText={card.altText}
          title={card.title}
          description={card.description}
          listItems={card.listItems}
          linkHref={card.linkHref}
          reverseLayout={card.reverseLayout}
        />
      ))}

      {/* Wsparcie i kontakt */}
      <div className='space-y-4 p-6'>
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
        <div className='grid grid-cols-4 gap-8 p-4 text-white lg:gap-12 xl:grid-cols-8'>
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
