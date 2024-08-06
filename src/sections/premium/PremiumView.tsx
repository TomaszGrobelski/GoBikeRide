'use client';

import { useModalStore } from '@/store/useModalStore';

import PricingCard from './PricingCard/PricingCard';

const PremiumView = () => {
  const openModal = useModalStore((state) => state.openModal);
  const openEditModal =()=> openModal({children: <div>Edytuj</div>})
  
  return (
    <div>
      <div>
        <h2>Plans for everybody</h2>
        <div className='flex justify-center gap-2'>
          <PricingCard />
          <PricingCard />
          <PricingCard />
        </div>
      </div>
      <button onClick={openEditModal}>Otwórz modala</button>
    </div>
  );
};

export default PremiumView;
