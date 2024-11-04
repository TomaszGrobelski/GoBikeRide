import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { IBike } from '@/types/Bike/bike.types';

interface IBikeTableTabs {
  bikes: IBike[] | undefined;
  setSelectedBike: Dispatch<SetStateAction<IBike | null>>;
  selectedBike: string | undefined;
}

export default function BikeTableTabs({
  bikes,
  setSelectedBike,
  selectedBike,
}: IBikeTableTabs) {

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    const selected = bikes?.find((bike) => bike.brand === newValue) || null;
    setSelectedBike(selected);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedBike}
        onChange={handleChange}
        textColor='inherit'
        aria-label='secondary tabs example'
        sx={{
          borderBottom: 1,
          borderColor: 'transparent', 
          '& .MuiTabs-indicator': {
            backgroundColor: 'green', 
          },
          '& .MuiTab-root': {
            color: '#B1C181', 
            '&.Mui-selected': {
              color: '#B1C181', 
            },
          },
        }}
      >
        {bikes ? (
          bikes.map((bike) => (
            <Tab key={bike.brand} value={bike.brand} label={bike.brand} />
          ))
        ) : (
          <p>Nie dodano jeszcze żadnego roweru</p>
        )}
      </Tabs>
    </Box>
  );
}
