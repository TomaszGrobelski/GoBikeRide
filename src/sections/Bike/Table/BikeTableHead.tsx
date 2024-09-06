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
}

const BikeTableHead = ({ handleSortChange }: IBikeTableHead) => {
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
                width: 160,
              }}
            >
              {header.name}
              {/* <Icon icon="noto-v1:money-bag" fontSize={22} />  PRZEMYŚLEĆ, czy nie dać Samych ikon zamiast nudnych nazw */}
              {/* {sortBy === header.value && (
              <Icon
                icon={
                  sortDirection === 'asc'
                    ? 'mingcute:arrow-up-fill'
                    : 'mingcute:arrow-down-fill'
                }
              />
            )} */}
            </Box>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default BikeTableHead;
