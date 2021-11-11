import { Divider, Popover, Typography, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector, useDispatch } from 'react-redux';
import { setAnchorEl } from '../../../redux/slices/cartSlice';
import DialogCartItem from '../../../components/dialogCart/DialogCartItem';
import CommonButton from '../../../components/common/buttons/CommonButton';
import { Link } from 'react-router-dom';

const cartItemContainer = {
  maxHeight: '310px',
  width: { xs: '280px', md: '320' },
  overflowY: 'auto',
  overflowX: 'hidden',
  '::-webkit-scrollbar': {
    display: 'none',
  },
};

const DialogCartContainer = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    const reducer = (acc, item) => acc + item.quantity * item.price * item.size;
    return cart.cartItems.reduce(reducer, 0);
  };

  const handleClose = () => {
    dispatch(setAnchorEl(null));
  };

  return (
    <Popover
      open={Boolean(cart.anchorEl)}
      anchorEl={cart.anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box sx={{ padding: '10px' }}>
        <Box sx={cartItemContainer}>
          {cart.cartItems.map((item) => (
            <DialogCartItem
              key={cart.cartItems.indexOf(item)}
              cartItem={item}
            />
          ))}
        </Box>
        <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10px',
          }}
        >
          <Typography sx={{ fontWeight: 700 }}>CART TOTAL:</Typography>
          <Typography
            color="primary"
            sx={{ fontWeight: 700, marginLeft: '10px' }}
          >
            {getTotalPrice().toFixed(2)} USD
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '10px',
          }}
        >
          <CommonButton>
            <CheckIcon fontSize="small" />
            {'Checkout'}
          </CommonButton>
          <Link to="/cart" style={{ textDecoration: 'none' }}>
            <CommonButton>
              <ShoppingBasketIcon
                fontSize="small"
                sx={{ paddingRight: '5px' }}
              />
              {' View Cart'}
            </CommonButton>
          </Link>
        </Box>
      </Box>
    </Popover>
  );
};

export default DialogCartContainer;
