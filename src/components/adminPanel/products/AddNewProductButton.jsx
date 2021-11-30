import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CommonButton from '../../common/buttons/CommonButton';
import { setEditingProduct } from '../../../redux/slices/adminProducts';

const NEW_PRODUCT = {
  id: null,
  description: '',
  name: '',
  price: 0,
  sizeType: 'KILOS',
  sizes: [1, 2, 3],
  image: '',
  rating: 0,
};

const AddNewProductButton = () => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/admin/products/addNewProduct`}
      style={{ textDecoration: 'none' }}
    >
      <CommonButton
        fontSize="16px"
        width="180px"
        height="50px"
        onClick={() => {
          dispatch(setEditingProduct(NEW_PRODUCT));
        }}
      >
        Add new product
      </CommonButton>
    </Link>
  );
};

export default AddNewProductButton;
