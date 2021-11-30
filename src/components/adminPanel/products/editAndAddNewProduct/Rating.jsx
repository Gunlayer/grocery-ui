import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { setRating } from '../../../../redux/slices/adminProducts';

const Rating = memo(() => {
  const rating = useSelector((state) => state.adminProducts.rating);
  const dispatch = useDispatch();

  return (
    <FormControl sx={{ width: '50%' }}>
      <InputLabel>Rating</InputLabel>
      <OutlinedInput
        type="number"
        inputProps={{ min: '0', max: '5', step: '0.1' }}
        label="Rating"
        value={rating}
        onChange={(e) => dispatch(setRating(e.target.value))}
        sx={{ paddingLeft: '12px' }}
        startAdornment={
          <InputAdornment position="start">
            <StarIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </FormControl>
  );
});

export default Rating;
