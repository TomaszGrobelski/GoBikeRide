import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const FrequentlyAskedQuestions = () => {
  return (
    <div className='mb-40 flex flex-col items-center gap-10'>
      <h2 className='text-[48px] font-bold text-center'>Często zadawane pytania</h2>
      <p className='text-center text-balance text-gray-500'>
        Jeśli nie możesz znaleść tutaj odpowiedzi, sprawdz nasze
        <span className='text-wite mx-1 font-bold text-secoundSea'>
          forum pomocy
        </span>{' '}
        , lub napisz do nas
        <span className='mx-1 font-bold text-secoundSea shadow-sm'>
          supportGoBikRide@.gmail.com
        </span>
      </p>
      <div className='flex flex-col gap-4'>
        <Accordion className=' font-bold'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1-content'
            id='panel1-header'
          >
            <Typography>Które opcje płacenia są dostępne ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel2-content'
            id='panel2-header'
          >
            <Typography>Co się stanie jak już osiągne limit trzech rowerów</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel3-content'
            id='panel3-header'
          >
            <Typography>Disabled Accordion</Typography>
          </AccordionSummary>
        </Accordion>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
