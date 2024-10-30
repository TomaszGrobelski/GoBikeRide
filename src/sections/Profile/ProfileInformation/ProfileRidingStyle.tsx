import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ProfileRidingStyle = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 100, height: 30 }}>
      <FormControl fullWidth>
        {/* <InputLabel id='demo-simple-select-label'>Age</InputLabel> */}
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Styl jazdy'
          onChange={handleChange}
          sx={{ height: 30 }}
        >
          <MenuItem value={10}>Szosowy</MenuItem>
          <MenuItem value={20}>Gravel</MenuItem>
          <MenuItem value={30}>Górski</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProfileRidingStyle;
