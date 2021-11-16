import { Button, CardMedia, Grid, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../redux/slices/cartSlice';
import { deleteFromCartRequest } from '../../helpers/deleteFromCartRequest';

const DialogCartItem = ({ cartItem }) => {
  const auth = useSelector((state) => state.auth);
  const { token, isAuth, email } = auth;

  const dispatch = useDispatch();

  const sizeTypes = {
    KILOS: 'kg',
    PACKS: 'pcs',
  };

  const deleteCartItemHandle = () => {
    dispatch(
      deleteItem({ productId: cartItem.productId, size: cartItem.size })
    );
    deleteFromCartRequest({
      token,
      isAuth,
      email,
      size: cartItem.size,
      productId: cartItem.productId,
    });
  };

  return (
    <Grid
      container
      sx={{
        marginBottom: '10px',
        width: { xs: '270px', md: '300px' },
      }}
    >
      <Grid item xs={4}>
        <Box sx={{ width: '70px' }}>
          <CardMedia
            component="img"
            width="100%"
            image={cartItem.image}
            alt={`image of ${cartItem.name}`}
          />
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Typography sx={{ fontWeight: 700 }}>{cartItem.name}</Typography>
        <Typography>
          {cartItem.quantity} x {cartItem.price.toFixed(2)} USD
        </Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>
          {cartItem.size}
          {sizeTypes[cartItem.sizeType]}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Button
          size="small"
          sx={{
            padding: 0,
            minWidth: 0,
            color: '#424242',
            '&:hover': { backgroundColor: 'transparent', color: 'black' },
          }}
          onClick={deleteCartItemHandle}
        >
          <CloseIcon></CloseIcon>
        </Button>
      </Grid>
    </Grid>
  );
};

export default DialogCartItem;
