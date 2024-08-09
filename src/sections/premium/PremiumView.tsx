'use client';

import FrequentlyAskedQuestions from './FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import PricingCard from './PricingCard/PricingCard';
import { pricingList } from './pricingList';

const PremiumView = () => {
  return (
    <section className=' items-center flex w-full flex-col gap-40'>
      <div className='flex w-full max-w-[850px] flex-col items-center space-y-10 p-4'>
        <h2 className='text-center text-[46px] font-bold'>
          Korzystaj Ze Wszystkich Funkcjonalności!
        </h2>
        <p className='text-balance text-center text-gray-500'>
          Zobacz co obejmuje pakiet premium. Dzięki pakietowi premium zyskujesz
          dostęp do wielu nowych i ekscytujących funkcji, które stale rozwijamy.
          Ciesz się innowacjami i dodatkowymi udogodnieniami, które uczynią
          Twoje doświadczenie jeszcze lepszym!
        </p>
        <div className='flex flex-col justify-center gap-4 md:flex-row'>
          <PricingCard
            title={pricingList.standard.title}
            pricingCardList={pricingList.standard.features}
            price={pricingList.standard.price}
          />
          <PricingCard
            title={pricingList.premium.title}
            pricingCardList={pricingList.premium.features}
            isPremium={true}
            price={pricingList.premium.price}
          />
        </div>
      </div>
      <FrequentlyAskedQuestions />
    </section>
  );
};

export default PremiumView;
