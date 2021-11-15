import { Typography } from '@mui/material';

const ProductName = ({ name }) => {
  return (
    <Typography sx={{ lineHeight: 1, fontSize: '20px' }}>{name}</Typography>
  );
};

export default ProductName;
