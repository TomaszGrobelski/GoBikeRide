import * as React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function DifficultyTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Tabs value={value} onChange={handleChange} aria-label='icon label tabs example'>
            <Tab icon={<Icon icon='clarity:filter-off-line' fontSize={24} />} label='Wszystkie' />
            <Tab icon={<Icon icon='healthicons:low-bars' fontSize={24} className='text-green-800' />} label='Łatwy' />
            <Tab
                icon={<Icon icon='healthicons:medium-bars' fontSize={24} className='text-orange-400' />}
                label='Średni'
            />
            <Tab icon={<Icon icon='healthicons:high-bars' fontSize={24} className='text-red-600' />} label='Trudny' />
        </Tabs>
    );
}
