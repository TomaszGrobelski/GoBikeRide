import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import { IBike } from '@/types/Bike/bike.types';

interface IBikeTableTabs {
  bikes: IBike[] | undefined;
  setSelectedBike: Dispatch<SetStateAction<string>>;
  selectedBike: string;
}

export default function BikeTableTabs({
  bikes,
  setSelectedBike,
  selectedBike
}: IBikeTableTabs) {
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedBike(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={selectedBike}
        onChange={handleChange}
        textColor='secondary'
        indicatorColor='secondary'
        aria-label='secondary tabs example'
      >
        {bikes ? (
          bikes.map((bike) => (
            <Tab key={bike.brand} value={bike.brand} label={bike.brand} />
          ))
        ) : (
          <div>nie ma</div>
        )}
      </Tabs>
    </Box>
  );
}
