import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

const ShoppingCartBadge = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <Badge
      sx={{
        '& .MuiBadge-badge': {
          right: 10,
          top: 1,
          padding: '0 8px',
          color: 'common.white',
        },
      }}
      badgeContent={totalQuantity}
      color="primary"
    />
  );
};

export default ShoppingCartBadge;
