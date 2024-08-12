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

  //na małymekranie jak są nazwy kolumn to żeby dało sie przewijać w bk zamiast zeby znikały po prawo
  return (
    <TableContainer
      sx={{ boxShadow: '2px 2px 8px', borderRadius: 5, p: 1, maxWidth: 1200 }}
      component={Paper}
      className='custom-scrollbar overflow-x-auto'
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
        sx={{
          minWidth: '100%',
          minHeight: 500,
          boxShadow: 30,
          paddingTop: 50,
          position: 'relative',
        }}
        aria-label='Tablica komponentów rowerowych'
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

        {isLoading ? (
          <div className='absolute left-1/3 flex h-[400px] items-center justify-center'>
            <LoadingPage />
          </div>
        ) : (
          <>
            <BikeTableBody
              displayedData={displayedData}
              handleChange={handleChange}
              condition={condition}
            />

            <AddNewComponent />
          </>
        )}
      </Table>
    </TableContainer>
  );
}
