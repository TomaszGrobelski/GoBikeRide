'use client';

import FrequentlyAskedQuestions from '../Contact/FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PricingCard from './PricingCard/PricingCard';
import { pricingList } from './pricingList';

const PremiumView = () => {
  return (
    <section className='mb-32 flex w-full flex-col items-center gap-40'>
      <div className='flex w-full max-w-[850px] flex-col items-center space-y-10 p-4'>
        <h2 className='text-center text-[46px] gradient-text'>
          Korzystaj Ze Wszystkich Funkcjonalności!
        </h2>
        <p className='text-balance text-center text-gray-600'>
          Zobacz co obejmuje{' '}
          <span className='gradient-text border-bottom-gradient'>
            pakiet premium
          </span>{' '}
          . Dzięki pakietowi premium zyskujesz dostęp do wielu nowych i
          ekscytujących funkcji, które stale rozwijamy. Ciesz się innowacjami i
          dodatkowymi udogodnieniami, które uczynią Twoje doświadczenie jeszcze
          lepszym!
        </p>
        <div className='flex flex-col justify-center gap-5 md:flex-row'>
          <PricingCard
            key={pricingList.standard.id}
            title={pricingList.standard.title}
            pricingCardList={pricingList.standard.features}
            price={pricingList.standard.price}
            buttonContent={pricingList.standard.buttonContent}
          />
          <PricingCard
            key={pricingList.premium.id}
            title={pricingList.premium.title}
            pricingCardList={pricingList.premium.features}
            isPremium={true}
            price={pricingList.premium.price}
            buttonContent={pricingList.premium.buttonContent}
          />
        </div>
      </div>
    </section>
  );
};

export default PremiumView;
