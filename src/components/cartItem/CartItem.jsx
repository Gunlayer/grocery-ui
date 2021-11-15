import { Box } from '@mui/system';
import ProductQuantity from './ProductQuantity';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, addItem } from '../../redux/slices/cartSlice';
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductSize from './ProductSize';
import ProductPrice from './ProductPrice';
import ProductTotalPrice from './ProductTotalPrice';
import { addToCartRequest } from '../../helpers/addToCartRequest';
import { deleteFromCartRequest } from '../../helpers/deleteFromCartRequest';

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
  const isAuth = useSelector((state) => state.auth.isAuth);
  const userEmail = useSelector((state) => state.auth.email);

  const { image, name, price, productId, quantity, size, sizeType } = cartItem;

  const deleteCartItemHandle = () => {
    dispatch(deleteItem({ productId, size }));
  };

  const product = {
    productId,
    name,
    price,
    quantity: 0,
    size,
    sizeType,
    image,
  };

  const handleIncreaseQuantity = () => {
    if (quantity < 99) {
      product.quantity += 1;
      dispatch(addItem(product));
      addToCartRequest({
        isAuth,
        userEmail,
        productId,
        size,
        quantity: 1,
      });
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      product.quantity -= 1;
      dispatch(addItem(product));
      deleteFromCartRequest({
        isAuth,
        userEmail,
        productId,
        size,
        quantity: 1,
      });
    }
  };

  const handleQuantityChange = (e) => {
    let number = e.target.value;
    if (number === '') {
      number = 1;
    }

    if (!Number.isNaN(+number) && +number > 0 && +number < 100) {
      product.quantity = +number - cartItem.quantity;
      dispatch(addItem(product));
      if (product.quantity > 0) {
        addToCartRequest({
          isAuth,
          userEmail,
          productId,
          size,
          quantity: product.quantity,
        });
      }
      if (product.quantity < 0) {
        deleteFromCartRequest({
          isAuth,
          userEmail,
          productId,
          size,
          quantity: -product.quantity,
        });
      }
    }
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
