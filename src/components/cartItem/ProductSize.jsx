import { Typography } from '@mui/material';
import React from 'react';

const sizeTypes = {
  KILOS: 'kg',
  PACKS: 'pcs',
};

const ProductSize = ({ size, sizeType }) => {
  return (
    <>
      <Typography sx={{ color: '#b7b5b6' }}>
        {size + ' ' + sizeTypes[sizeType]}
      </Typography>
    </>
  );
};

export default ProductSize;
