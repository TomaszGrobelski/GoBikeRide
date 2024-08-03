'use client';

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
    <section className='relative mt-10 flex flex-col items-center justify-between overflow-x-clip'>
      <div className='font-weight-[400] sticky top-16 mx-5 mt-20 flex h-[500px] w-full flex-col items-center justify-center gap-10 pb-32 pl-10 font-poppins text-[#102532]'>
        <div className='animate-slideRightAndBack absolute -top-80 left-[800px] -z-30 h-[1000px] w-[1000px] rounded-full bg-purple-100 blur-[500px]'></div>
        <h1 className='font-roboto max-w-[1000px] text-[48px] font-500 leading-tight tracking-tight'>
          Tworzymy wyjątkowe produkty dzięki kompleksowemu wsparciu i fachowym
          wskazówkom
        </h1>
        <p className='max-w-[1000px] text-[24px] italic leading-tight tracking-tight'>
          Wspieramy Cię na każdym etapie Twojej rowerowej przygody: od
          pierwszych kroków, przez planowanie tras i rozwój umiejętności, aż po
          porady, wskazówki, posty społeczności i wsparcie techniczne. Z nami
          każda jazda staje się przyjemnością!
        </p>
      </div>

      {/* <Carousel /> */}

      <div className='relative z-10 flex min-h-[400px] w-full flex-col items-center justify-center gap-10 bg-[#102532] p-3 font-poppins text-white lg:flex-row'>
        <p className='text-wrap text-center text-[28px] lg:w-1/2'>
          Wspólnie osiągamy sukces
        </p>
        <p className='max-w-[800px] text-balance px-10 text-[14px] sm:text-[18px] lg:w-1/2'>
          Nasz zespół ekspertów wspiera Cię przez cały cykl życia aplikacji
          rowerowej, aby osiągnąć trzy kluczowe cele: rozwiązać konkretne
          problemy rowerzystów, stworzyć funkcjonalne i innowacyjne rozwiązania
          oraz zmaksymalizować potencjał Twojej aplikacji, zapewniając jej
          trwały rozwój i sukces.
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

      <GradientBox>
        <p className='relative mx-2 self-center pt-10 text-center font-poppins text-[20px] text-white sm:mx-8 md:text-[30px] lg:text-[40px]'>
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

      <div className='space-y-4 p-6'>
        <h3 className='text-xl font-bold'>Wsparcie i kontakt:</h3>
        <p>
          Jeśli masz pytania lub potrzebujesz pomocy, skontaktuj się z naszym
          zespołem wsparcia: support@gobikeride.com
        </p>
      </div>
    </section>
  );
};

export default HomeView;
