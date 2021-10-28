import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const formControlStyle = { marginLeft: 1, width: 80 };

const selectStyle = {
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '1px solid #ccc',
    },
  },
  '& .MuiSelect-select': {
    padding: 1,

    fontFamily: 'Open Sans',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
};

const menuItemStyle = { fontFamily: 'Open Sans' };

const SelectCurrency = ({ handleChange, values }) => {
  const [currency, setCurrency] = useState(values[0]);

  return (
    <FormControl sx={formControlStyle}>
      <Select
        sx={selectStyle}
        value={currency}
        onChange={(e) => {
          handleChange(e, setCurrency);
        }}
      >
        {values.map((value) => {
          return (
            <MenuItem key={value} value={value} sx={menuItemStyle}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectCurrency;
