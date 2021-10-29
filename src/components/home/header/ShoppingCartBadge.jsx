import { Badge } from '@mui/material';

const ShoppingCartBadge = () => {
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
      badgeContent={5}
      color="primary"
    />
  );
};

export default ShoppingCartBadge;
