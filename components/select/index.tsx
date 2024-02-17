'use client';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem, { MenuItemOwnProps } from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { DefaultComponentProps } from '@mui/material/OverridableComponent';
import { useState } from 'react';
export default function SelectComponent({ items, value }: { items: DefaultComponentProps<any>[]; value: string }) {
  const [age, setAge] = useState(value);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as any);
  };

  return (
    <Box sx={{ minWidth: 40 }}>
      <FormControl fullWidth>
        <Select id='demo-simple-select' value={age} label='Age' onChange={handleChange}>
          {items}
        </Select>
      </FormControl>
    </Box>
  );
}
