import { Button } from '@mui/material';
import React from 'react';

const kgbutton = {
  color: 'white',
  textTransform: 'none',
  borderRadius: '15px',
  lineHeight: 0,
  padding: '15px 5px',
  fontSize: '1rem',
  minWidth: 0,
};

const KgButton = ({ kg, units }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      sx={kgbutton}
    >
      {kg} {units}
    </Button>
  );
};

export default KgButton;
