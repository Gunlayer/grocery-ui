import { Box, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import GreenPageHeader from '../../components/common/GreenPageHeader';
import CommonButton from '../../components/common/buttons/CommonButton';
import emptyCart from '../../assets/empty-cart.png';
import CartItem from '../../components/cartItem/CartItem';
import { useSelector } from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const cartContainerStyle = {
  maxWidth: '1230px',
  padding: '0 15px',
  margin: '0 auto',
};

const cartWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const cartStyle = {
  width: '100%',
  padding: '80px 0px 15px 0px',
  display: 'flex',
  alignItems: 'baseline',
  borderBottom: '1px solid #dadada',
  gap: '8px',
};

const titleStyle = {
  fontFamily: 'Lemonada',
  textTransform: 'uppercase',
  fontWeight: '700',
  fontSize: '18px',
};

const bttns = {
  textDecoration: 'none',
  color: '#fff',
};

const cartEmptyStyle = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
  margin: '80px 30px',
};

const CartContainer = () => {
  const cart = useSelector((state) => state.cart);

  return cart.cartItems.length ? (
    <div>
      <GreenPageHeader title={'Your Shopping Cart'} />
      <Box sx={cartContainerStyle}>
        <Box sx={cartWrapperStyle}>
          <Box sx={cartStyle}>
            <Typography variant="h4" sx={titleStyle}>
              Products:
            </Typography>
            <Typography sx={titleStyle}>
              {cart.totalQuantity}
              <ShoppingBasketIcon
                sx={{ paddingTop: '10px' }}
                fontSize="medium"
              />
            </Typography>
          </Box>
          {cart.cartItems.map((item) => (
            <CartItem key={cart.cartItems.indexOf(item)} cartItem={item} />
          ))}
          <CommonButton fontSize={'16px'} padding={'10px 0'} width="170px">
            <Link style={bttns} to="/shop">
              Continue shopping
            </Link>
          </CommonButton>
        </Box>
      </Box>
    </div>
  ) : (
    <div>
      <GreenPageHeader title={'Your Shopping Cart'} />
      <Box sx={cartContainerStyle}>
        <Box sx={cartEmptyStyle}>
          <CardMedia
            component="img"
            image={emptyCart}
            sx={{ width: '100px' }}
          />
          <Typography
            sx={{
              fontFamily: 'Lemonada',
              fontSize: '28px',
              margin: '30px 0 15px',
            }}
          >
            No items in cart
          </Typography>
          <Typography sx={{ margin: '0 0 25px' }}>
            Add items you want to shop
          </Typography>
          <CommonButton padding={'11px 30px'} fontSize={'16px'}>
            <Link style={bttns} to="/">
              Start shopping
            </Link>
          </CommonButton>
        </Box>
      </Box>
    </div>
  );
};

export default CartContainer;
