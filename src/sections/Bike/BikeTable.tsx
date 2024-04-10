'use client';
import {useState}from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Icon } from '@iconify/react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const rows = [
  {
    name: 'Łańcuch',
    lastMaintenanceDate: '2024-04-10',
    condition: 'Dobry',
    mileage: 1000,
    maintenanceCost: 50
  },
  {
    name: 'Koło przednie',
    lastMaintenanceDate: '2024-03-20',
    condition: 'Bardzo dobry',
    mileage: 800,
    maintenanceCost: 80
  },
  {
    name: 'Koło tylne',
    lastMaintenanceDate: '2024-03-20',
    condition: 'Bardzo dobry',
    mileage: 800,
    maintenanceCost: 80
  },
  {
    name: 'Przerzutka tylna',
    lastMaintenanceDate: '2024-02-15',
    condition: 'Dobry',
    mileage: 600,
    maintenanceCost: 60
  },
  {
    name: 'Przerzutka przednia',
    lastMaintenanceDate: '2024-02-15',
    condition: 'Dobry',
    mileage: 600,
    maintenanceCost: 60
  },
  {
    name: 'Hamulce',
    lastMaintenanceDate: '2024-01-10',
    condition: 'Bardzo dobry',
    mileage: 500,
    maintenanceCost: 70
  }
];

export default function BikeTable() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Nazwa</TableCell>
            <TableCell align='right'>Data konserwacji podzespołu</TableCell>
            <TableCell align='right'>Aktualny stan</TableCell>
            <TableCell align='right'>Aktualny przebieg [km]</TableCell>
            <TableCell align='right'>Koszt konserwacji</TableCell>
            <TableCell align='right'>Edytuj</TableCell>
            <TableCell align='right'>Usuń</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.lastMaintenanceDate}</TableCell>

              <TableCell align='right'>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      {row.condition}
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      value={age}
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
              <TableCell align='center'>
                <Icon icon='ic:baseline-edit' width={20} />
              </TableCell>
              <TableCell align='center'>
                <Icon icon='basil:trash-solid' width={20} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
