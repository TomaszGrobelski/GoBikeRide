import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ProfileRidingStyle = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 100, height: 30 }}>
            <FormControl fullWidth>
                <Select
                    value={age}
                    label='Styl jazdy'
                    onChange={handleChange}
                    sx={{
                        height: 30,
                        color: 'white',
                        backgroundColor: '#285F6B',
                        border: '1px solid #285F6B',

                        boxShadow: '#285F6B',
                        '& .MuiSelect-icon': {
                            color: 'white',
                        },
                        '& .Mui-focused': {
                            boxShadow: '#285F6B',
                            '--tw-ring-color': '#285F6B',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            border: 'black',
                        },
                    }}
                    className='text-bg-[#285F6B] border-bg-[#285F6B] border-1 bg-[#285F6B]'
                >
                    <MenuItem
                        sx={{
                            backgroundColor: '#285F6B',
                            '&:hover': {
                                backgroundColor: '#285F6B',
                                color: 'white',
                            },
                        }}
                        value={10}
                    >
                        Szosowy
                    </MenuItem>
                    <MenuItem
                        sx={{
                            backgroundColor: '#408fe3',
                            '&:hover': {
                                backgroundColor: '#408fe3',
                                color: 'white',
                            },
                        }}
                        value={20}
                    >
                        Gravel
                    </MenuItem>
                    <MenuItem
                        sx={{
                            backgroundColor: '#2C5F2D',
                            '&:hover': {
                                backgroundColor: '#2C5F2D',
                                color: 'white',
                            },
                        }}
                        value={30}
                    >
                        Górski
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default ProfileRidingStyle;
