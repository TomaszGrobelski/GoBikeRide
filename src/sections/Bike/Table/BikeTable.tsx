'use client';

import { useEffect, useState } from 'react';
import { useFetchBikes } from '@/api/bikes/useBike';
import { tableHeaders } from '@/constans/BikeTableConstans';
import BikeTableTabs from '@/sections/Bike/Table/BikeTableTabs';
import LoadingPage from '@/ui/molecules/Loading/LoadingPage';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import '@/styles/Bike/bikeTable.css';

import DeleteButton from '@/ui/atmos/Buttons/DeleteButton';
import { LightTooltip } from '@/ui/atmos/Tooltip/LightTooltip';
import { sortByProperty } from '@/utils/table-utils';
import { Icon } from '@iconify/react/dist/iconify.js';
import { green } from '@mui/material/colors';

import { IBike } from '@/types/Bike/bike.types';
import { IComponents } from '@/types/Bike/Components/components.types';
import { IUser } from '@/types/User/user.types';

import AddBikeModal from './AddBikeModal/AddBikeModal';
import AddNewComponent from './AddNewComponent/AddNewComponent';
import BikeTableBody from './BikeTableBody';
import BikeTableHead from './BikeTableHead';
import BikeSettings from './ManageBikes/BikeSettings';

interface SortOptions<T> {
  field: keyof T;
  direction: 'asc' | 'desc';
}

interface BikeTableProps {
  user: IUser | undefined;
}

export default function BikeTable({ user }: BikeTableProps) {
  if (!user) {
    throw new Error('Użytkownik nie jest zalogowany'); 
  }

  const { data: bikes, isLoading, isError } = useFetchBikes(user.id);

  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [condition, setCondition] = useState('');
  const [selectedBike, setSelectedBike] = useState<IBike | null>(null);
  const [displayedData, setDisplayedData] = useState<IComponents[]>([]);

  const [sortOptions, setSortOptions] = useState<SortOptions<IComponents>>({
    field: 'name',
    direction: 'asc',
  });

  useEffect(() => {
    if (bikes && bikes.length > 0) {
      setIsLimited(bikes.length > 2);
      const initialBike = bikes[0];
      setSelectedBike(initialBike);
      setDisplayedData(bikes[0].components || []);
    }
  }, [bikes]);

  useEffect(() => {
    if (selectedBike && bikes) {
      const bike = bikes.find(
        (bike: IBike) => bike.brand === selectedBike.brand,
      );
      setDisplayedData(bike?.components || []);
    }
  }, [selectedBike, bikes]);

  useEffect(() => {
    if (selectedBike) {
      const bike = bikes?.find(
        (bike: IBike) => bike.brand === selectedBike.brand,
      );
      const sortedData = sortByProperty(
        bike?.components || [],
        sortOptions.field,
        sortOptions.direction,
      );
      setDisplayedData(sortedData);
    }
  }, [selectedBike, sortOptions, bikes]);

  const handleChange = (event: SelectChangeEvent) => {
    setCondition(event.target.value as string);
  };

  const handleSortChange = (columnName: keyof IComponents) => {
    setSortOptions((prevOptions) => {
      if (columnName === prevOptions.field) {
        return {
          ...prevOptions,
          direction: prevOptions.direction === 'asc' ? 'desc' : 'asc',
        };
      } else {
        return {
          field: columnName,
          direction: 'asc',
        };
      }
    });
  };

  return (
    <TableContainer
      sx={{
        boxShadow: '2px 2px 8px',
        borderRadius: 5,
        p: 3,
        maxWidth: 1200,
      }}
      component={Paper}
      className='custom-scrollbar overflow-x-auto'
    >
      <Box sx={{ display: 'flex' }}>
        <BikeTableTabs
          bikes={bikes}
          selectedBike={selectedBike?.brand}
          setSelectedBike={setSelectedBike}
        />
        <AddBikeModal isLimited={isLimited} user={user} bikes={bikes} />

        <BikeSettings bikes={bikes} />
      </Box>

      <Table
        sx={{
          minWidth: 150,
          minHeight: 500,
          boxShadow: 30,
          paddingTop: 50,
          position: 'relative',
        }}
        aria-label='Tablica komponentów rowerowych'
      >
        <BikeTableHead
          handleSortChange={handleSortChange}
          sortOptions={sortOptions}
        />

        <BikeTableBody
          displayedData={displayedData}
          handleChange={handleChange}
          condition={condition}
          isLoading={isLoading}
        />

        {!isLoading && <AddNewComponent bikeId={selectedBike?.id} />}
      </Table>
    </TableContainer>
  );
}
