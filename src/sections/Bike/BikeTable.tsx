'use client';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { rows } from '@/Mock/bikeTableMocked';
import { tableHeaders } from '@/constans/BikeTableConstans';
import IconButton from '@/ui/atmos/IconButton';
import { Icon } from '@iconify/react';
import { sortByProperty } from '@/utils/table-utils';

interface BikeTableRow {
  name: string;
  lastMaintenanceDate: Date;
  condition: string;
  mileage: number;
  maintenanceCost: number;
}
interface IFilters {}
const defaultFilters: IFilters = {
  // sortBy: 'name',
  // sortDirection: 'asc'
};
export default function BikeTable() {
  const [condition, setCondition] = useState('');
  const [filters, setFilters] = useState<IFilters>(defaultFilters);
  const [sortBy, setSortBy] = useState<keyof BikeTableRow>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [displayedData, setDisplayedData] = useState<BikeTableRow[]>([]);
  const handleChange = (event: SelectChangeEvent) => {
    setCondition(event.target.value as string);
  };

  useEffect(() => {
    if (rows) {
      let filtredData;

      filtredData = sortByProperty(rows, sortBy, sortDirection);
      setDisplayedData(filtredData);
    }
  }, [filters, sortBy, sortDirection]);

  const handleSortChange = (columnName: keyof BikeTableRow) => {
    const header = tableHeaders.find((header) => header.value === columnName);
    if (header && header.sortable) {
      const newSortDirection =
        columnName.toLowerCase() === sortBy.toLowerCase() &&
        sortDirection === 'asc'
          ? 'desc'
          : 'asc';
      setSortBy(columnName);
      setSortDirection(newSortDirection);
    }
  };

  return (
    <TableContainer
      sx={{ boxShadow: '2px 2px 8px', borderRadius: 5, p: 1 }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650, boxShadow: 30 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header) => (
              <TableCell
                key={header.name}
                align={header.align}
                onClick={() =>
                  handleSortChange(header.value as keyof BikeTableRow)
                }
                style={{ cursor: `${header.sortable ? 'pointer' : ''}` }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {header.name}
                  <Icon icon={header.icon} />
                </Box>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {displayedData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >

              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>

              <TableCell align='center'>
                {row.lastMaintenanceDate.toLocaleDateString()}
              </TableCell>

              <TableCell align='right'>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      {row.condition}
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={condition}
                      label={row.condition}
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

              <TableCell align='right'>{row.mileage}</TableCell>

              <TableCell align='right'>{row.maintenanceCost}</TableCell>

              <TableCell align='right'>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton
                    icon='ic:baseline-edit'
                    ariaLabel={`Edytuj ${row.name} `}
                  />
                </Box>
              </TableCell>

              <TableCell align='right'>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton
                    icon='basil:trash-solid'
                    ariaLabel={`Usuń ${row.name} `}
                  />
                </Box>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
