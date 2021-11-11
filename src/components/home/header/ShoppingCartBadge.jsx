import { Badge } from '@mui/material';

const ShoppingCartBadge = ({ cart }) => {
  const counter = () => {
    const reducer = (acc, item) => acc + item.quantity;
    return cart.cartItems.reduce(reducer, 0);
  };

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
      badgeContent={counter()}
      color="primary"
    />
  );
};

export default ShoppingCartBadge;
