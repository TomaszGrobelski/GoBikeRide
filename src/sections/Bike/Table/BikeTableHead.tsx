'use client';

import { tableHeaders } from '@/constans/BikeTableConstans';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import '@/styles/Bike/bikeTable.css';

import { Icon } from '@iconify/react/dist/iconify.js';

import { IComponents } from '@/types/Bike/Components/components.types';

interface IBikeTableHead {
  handleSortChange: (columnName: keyof IComponents) => void;
  sortOptions: {
    field: keyof IComponents; 
    direction: 'asc' | 'desc'; 
  };
}

const BikeTableHead = ({ handleSortChange, sortOptions }: IBikeTableHead) => {
  return (
    <TableHead className='overflow-x-auto'>
      <TableRow>
        {tableHeaders.map((header) => (
          <TableCell
            key={header.name}
            align={header.align}
            onClick={() => handleSortChange(header.value as keyof IComponents)}
            style={{ cursor: `${header.sortable ? 'pointer' : ''}` }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 170,
              }}
            >
              {header.name}
              {header.sortable && sortOptions.field === header.value && (
                <Icon
                  icon={
                    sortOptions.direction === 'asc'
                      ? 'mingcute:arrow-up-fill'
                      : 'mingcute:arrow-down-fill'
                  }
                  style={{ marginLeft: 4 }}
                />
              )}
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default BikeTableHead;
