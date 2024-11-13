import * as React from 'react';
import TextField from '@mui/material/TextField';

interface SearchRoadProps {
    onNameChange: (name: string) => void;
    value: string;
}

export default function SearchRoad({ onNameChange, value }: SearchRoadProps) {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onNameChange(event.target.value);
    };
    return (
        <TextField id='outlined-basic' label='Nazwa trasy' variant='outlined' value={value} onChange={handleChange} />
    );
}
