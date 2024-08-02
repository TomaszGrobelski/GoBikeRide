'use client';

import { useEffect, useState } from 'react';
import { useFetchBikes } from '@/api/bikes/useBike';
import { tableHeaders } from '@/constans/BikeTableConstans';
import { gravelBikes, rows } from '@/Mock/bikeTableMocked';
import BikeTableTabs from '@/sections/Bike/Table/BikeTableTabs';
import IconButton from '@/ui/atmos/IconButton';
import BasicModal from '@/ui/organisms/Modals/BasicModal';
import { convertToDdMmYyyyFormat } from '@/utils/date-utils/format-date';
import { sortByProperty } from '@/utils/table-utils';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { IBike } from '@/types/Bike/bike.types';
import { IComponents } from '@/types/Bike/Components/components.types';
import { IUser } from '@/types/User/user.types';

import AddBikeModal from './AddBikeModal/AddBikeModal';
import AddNewComponent from './AddNewComponent';
import BikeTableBody from './BikeTableBody';

interface IFilters {}
const defaultFilters: IFilters = {
  // sortBy: 'name',
  // sortDirection: 'asc'
};

interface BikeTableProps {
  user: IUser | undefined;
}

export default function BikeTable({ user }: BikeTableProps) {
  if (!user) {
    throw new Error('User is not defined');
  }

  const { data: bikes, isLoading, isError } = useFetchBikes(user.id);

  const [condition, setCondition] = useState('');
  const [selectedBike, setSelectedBike] = useState<string>('');
  const [displayedData, setDisplayedData] = useState<IComponents[]>([]);

  // const [filters, setFilters] = useState<IFilters>(defaultFilters);
  // const [sortBy, setSortBy] = useState<keyof IBike>('brand');
  // const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    if (bikes && bikes.length > 0) {
      const initialBike = bikes[0].brand;
      setSelectedBike(initialBike);
      setDisplayedData(bikes[0].components || []);
    }
  }, [bikes]);

  useEffect(() => {
    if (selectedBike && bikes) {
      const bike = bikes.find((bike: IBike) => bike.brand === selectedBike);
      setDisplayedData(bike?.components || []);
    }
  }, [selectedBike, bikes]);

  const handleChange = (event: SelectChangeEvent) => {
    setCondition(event.target.value as string);
  };

  const handleSortChange = (columnName: keyof IComponents) => {
    // Tutaj możesz dodać logikę sortowania
  };
  // const handleSortChange = (columnName: keyof BikeTableRow) => {
  //   const header = tableHeaders.find((header) => header.value === columnName);
  //   if (header && header.sortable) {
  //     const newSortDirection =
  //       columnName.toLowerCase() === sortBy.toLowerCase() &&
  //       sortDirection === 'asc'
  //         ? 'desc'
  //         : 'asc';
  //     setSortBy(columnName);
  //     setSortDirection(newSortDirection);
  //   }
  // };

  return (
    <TableContainer
      sx={{ boxShadow: '2px 2px 8px', borderRadius: 5, p: 1 }}
      component={Paper}
    >
      <Box sx={{ display: 'flex' }}>
        <BikeTableTabs
          bikes={bikes}
          selectedBike={selectedBike}
          setSelectedBike={setSelectedBike}
        />
        <AddBikeModal user={user} />
      </Box>

      <Table
        sx={{ minWidth: 650, boxShadow: 30, paddingTop: 50 }}
        aria-label='simple table'
      >
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableCell
                key={header.name}
                align={header.align}
                onClick={() =>
                  handleSortChange(header.value as keyof IComponents)
                }
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

        <BikeTableBody
          displayedData={displayedData}
          handleChange={handleChange}
          condition={condition}
        />

        <AddNewComponent />
      </Table>
    </TableContainer>
  );
}
