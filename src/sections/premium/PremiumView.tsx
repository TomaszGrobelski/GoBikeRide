import PricingCard from './PricingCard/PricingCard';

const PremiumView = () => {
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
    </div>
  );
};

export default PremiumView;
