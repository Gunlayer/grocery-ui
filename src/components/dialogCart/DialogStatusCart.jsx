import { Popover, Typography, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setIsEmpty } from '../../redux/slices/cartSlice';

const DialogStatusCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleClose = () => {
    dispatch(setIsEmpty(false));
  };

  if (cart.isEmpty) {
    setTimeout(() => {
      dispatch(setIsEmpty(false));
    }, 1000);
  }

  return <div></div>;
};

export default DialogStatusCart;
