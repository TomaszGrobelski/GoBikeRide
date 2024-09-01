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

import { IBike } from '@/types/Bike/bike.types';
import { IComponents } from '@/types/Bike/Components/components.types';
import { IUser } from '@/types/User/user.types';

import AddBikeModal from './AddBikeModal/AddBikeModal';
import AddNewComponent from './AddNewComponent/AddNewComponent';
import BikeTableBody from './BikeTableBody';
import BikeTableHead from './BikeTableHead';

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

  const [isLimited, setIsLimited] = useState<boolean>(false);
  const [condition, setCondition] = useState('');
  const [selectedBike, setSelectedBike] = useState<IBike | null>(null);
  const [displayedData, setDisplayedData] = useState<IComponents[]>([]);

  // const [filters, setFilters] = useState<IFilters>(defaultFilters);
  // const [sortBy, setSortBy] = useState<keyof IBike>('brand');
  // const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

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

  // problem taki że jak dodaje na sucho to później nie da sie odrazu usunać bo nie ma dostępuu do ID ktore tworzne jest (chyba ) w na backendzie
  const handleAddComponent = (newComponent: IComponents) => {
    setDisplayedData((prevDisplayedData) => [
      ...prevDisplayedData,
      newComponent,
    ]);
  };
  console.log(bikes?.length);

  //na małymekranie jak są nazwy kolumn to żeby dało sie przewijać w bk zamiast zeby znikały po prawo
  // Po dodaniu nowego componentu w innych Tabach, żeby nie cofało do pierwszego
  return (
    <TableContainer
      sx={{
        boxShadow: '2px 2px 8px',
        borderRadius: 5,
        p: 3,
        maxWidth: 1200,
        // width: '100%',
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
        <AddBikeModal isLimited={isLimited} user={user} />
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
        <BikeTableHead handleSortChange={handleSortChange} />

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
