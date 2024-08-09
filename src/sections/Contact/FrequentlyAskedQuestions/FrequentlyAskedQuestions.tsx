import AccordionItem from './AccordionItem';
import { frequentlyAskedQuestionsList } from './frequentlyAskedQuestionsList';

const FrequentlyAskedQuestions = () => {
  return (
    <div className='mb-40 flex max-w-[1000px] flex-col items-center gap-10'>
      <h2 className='gradient-text border-bottom-gradient text-center text-[48px] font-bold'>
        Często zadawane pytania
      </h2>
      <p className='text-balance text-center text-gray-600'>
        Jeśli nie możesz znaleść tutaj odpowiedzi, sprawdz nasze
        <span className='gradient-text border-bottom-gradient mx-1 text-nowrap font-bold'>
          forum pomocy
        </span>
        , lub napisz do nas
        <span className='gradient-text border-bottom-gradient mx-1 text-nowrap font-bold'>
          supportGoBikRide@.gmail.com
        </span>
      </p>
      <div className='flex flex-col gap-4 '>
        {frequentlyAskedQuestionsList.map((question) => (
          <AccordionItem
            key={question.title}
            title={question.title}
            description={question.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
