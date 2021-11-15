import { Typography } from '@mui/material';

export const priceStyle = {
  fontFamily: 'Lemonada',
  color: 'primary.main',
  fontWeight: 700,
  '@media (max-width: 750px)': {
    display: 'block',
  },
};

const ProductPrice = ({ price }) => {
  return <Typography sx={priceStyle}>{'$' + price}</Typography>;
};

export default ProductPrice;
