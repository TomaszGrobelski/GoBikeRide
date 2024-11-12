import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Province } from '@/types/Road/road.types';

export default function ProvinceSelect() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{  minWidth: 210 }}>
                <InputLabel id='demo-simple-select-helper-label'>Województwo</InputLabel>
                <Select
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={age}
                    label='Województwo'
                    onChange={handleChange}
                >
                    <MenuItem value=''>
                        <em>Brak</em>
                    </MenuItem>
                    {Object.entries(Province).map(([key, value]) => (
                        <MenuItem key={key} value={value}>
                            {value}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
