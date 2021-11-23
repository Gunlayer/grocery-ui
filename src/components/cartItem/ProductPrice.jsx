import { Typography } from '@mui/material';

export const priceStyle = {
  color: 'primary.main',
  fontWeight: 600,
  '@media (max-width: 750px)': {
    display: 'block',
  },
};

const ProductPrice = ({ price }) => {
  return <Typography sx={priceStyle}>{'$' + price}</Typography>;
};

export default ProductPrice;
