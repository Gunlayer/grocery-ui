import { Box } from '@mui/system';
import ProductQuantity from './ProductQuantity';
import { useDispatch } from 'react-redux';
import { deleteItem, addItem } from '../../redux/slices/cartSlice';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductSize from './ProductSize';
import ProductPrice from './ProductPrice';
import ProductTotalPrice from './ProductTotalPrice';

const cartStyle = {
  display: 'flex',
  alignItems: 'flex-start',
  paddingBottom: '20px',
  borderBottom: '1px solid #dadada',
  '@media (max-width: 750px)': {
    display: 'block',
    textAlign: 'center',
    fontSize: '20px',
  },
};

const cardRightSide = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '30px',
  gap: '1.1em',
  '@media (max-width: 750px)': {
    paddingTop: '20px',
    fontSize: '20px',
  },
};

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { image, name, price, productId, quantity, size, sizeType } = cartItem;

  const deleteCartItemHandle = () => {
    dispatch(deleteItem({ productId, size }));
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(addItem({ ...cartItem, quantity: +quantity - 1 }));
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 99) {
      dispatch(addItem({ ...cartItem, quantity: +quantity + 1 }));
    }
  };

  const handleQuantityChange = (e) => {
    const number = e.target.value;
    if (number !== '') {
      if (!Number.isNaN(+number) && number > 0 && number < 100) {
        dispatch(addItem({ ...cartItem, quantity: +number }));
      }
    } else dispatch(addItem({ ...cartItem, quantity: +1 }));
  };

  return (
    <div>
      <Box sx={cartStyle}>
        <ProductImage
          name={name}
          image={image}
          deleteCartItemHandle={deleteCartItemHandle}
        />
        <Box sx={cardRightSide}>
          <ProductName name={name} />
          <ProductSize size={size} sizeType={sizeType} />
          <ProductPrice price={price} />
          <ProductQuantity
            handleDecreaseQuantity={handleDecreaseQuantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleQuantityChange={handleQuantityChange}
            quantity={quantity}
          />
          <ProductTotalPrice price={price} size={size} quantity={quantity} />
        </Box>
      </Box>
    </div>
  );
};

export default CartItem;
