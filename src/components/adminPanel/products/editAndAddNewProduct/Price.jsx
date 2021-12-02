import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPrice } from '../../../../redux/slices/adminProducts';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { memo } from 'react';

const Price = memo(() => {
  const price = useSelector((state) => state.adminProducts.price);
  const dispatch = useDispatch();

  return (
    <FormControl sx={{ width: '50%' }}>
      <InputLabel>Price</InputLabel>
      <OutlinedInput
        type="number"
        inputProps={{ min: '0' }}
        label="Price"
        value={price}
        onChange={(e) => dispatch(setPrice(e.target.value))}
        sx={{ paddingLeft: '9px' }}
        startAdornment={
          <InputAdornment position="start" sx={{ marginRight: 0 }}>
            <AttachMoneyIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default Price;
