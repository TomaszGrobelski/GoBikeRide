'use client';

import { ChangeEvent } from 'react';
import IconButton from '@/ui/atmos/IconButton';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { IComponents } from '@/types/Bike/Components/components.types';

interface IBikeTableBody {
  displayedData: IComponents[];
  handleChange: (event: SelectChangeEvent<string>) => void;
  condition: string;
}

const BikeTableBody = ({
  displayedData,
  handleChange,
  condition,
}: IBikeTableBody) => {
  return (
    <TableBody>
      {displayedData.map((row) => (
        <TableRow
          key={row.type}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component='th' scope='row' align='center'>
            {row.brand}
          </TableCell>

          <TableCell align='center'>
            {convertToDdMmYyyyFormat(row.maintenanceDate)}
          </TableCell>

          <TableCell align='center'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-label'>
                  {row.currentState}
                </InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  id='demo-simple-select'
                  value={condition}
                  label={row.currentState}
                  onChange={handleChange}
                >
                  <MenuItem value={5}>Bardzo Dobry</MenuItem>
                  <MenuItem value={4}>Dobry</MenuItem>
                  <MenuItem value={3}>Sredni</MenuItem>
                  <MenuItem value={2}>Zły</MenuItem>
                  <MenuItem value={1}>Bardo zły</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </TableCell>

          <TableCell align='center'>{row.currentMileageKm}</TableCell>

          <TableCell align='center'>{row.maintenanceCost}</TableCell>

          <TableCell align='center'>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <LightTooltip title='Edytuj' placement='top'>
                <div>
                  <IconButton
                    icon='ic:baseline-edit'
                    color='#5F286B'
                    ariaLabel={`Edytuj ${row.type} `}
                  />
                </div>
              </LightTooltip>
              <LightTooltip title='Usuń' placement='top'>
                <div>
                  <IconButton
                    icon='basil:trash-solid'
                    color='#5F286B'
                    ariaLabel={`Usuń ${row.type} `}
                  />
                </div>
              </LightTooltip>
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BikeTableBody;
