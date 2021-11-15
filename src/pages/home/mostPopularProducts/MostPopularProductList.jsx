import { Grid } from '@mui/material';
import MostPopularProduct from '../../../components/home/mostPopularProducts/MostPopularProduct';
import Spinner from '../../../components/common/Spinner';
import { useMostPopularProducts } from '../../../hooks/useMostPopularProducts';

const mostPopularProductListContainerStyle = {
  paddingLeft: { xs: 4, lg: 10 },
  paddingRight: { xs: 4, lg: 10 },
  marginTop: '50px',
  minWidth: 320,
};

const MostPopularProductList = () => {
<<<<<<< HEAD
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  //const token = useSelector((state) => state.auth.token);
  // const email = useSelector((state) => state.auth.email);

  const API = '/api/products/mostpopular';

  const [productList, setProductList] = useState([]);

  const getData = async (API) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get(
        'https://raw.githubusercontent.com/Gunlayer/traning/main/dashnoard.json'
      );
=======
  const mostPopularProducts = useMostPopularProducts();
>>>>>>> 4c0c7bf349f9ad059c129b5b309f3b73bdbbe60b

  if (mostPopularProducts.isLoading) {
    return <Spinner />;
  }

  if (mostPopularProducts.isError) {
    return null;
  }

  return (
    <Grid container spacing={3} sx={mostPopularProductListContainerStyle}>
      {mostPopularProducts.data.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} md={4} xl={3}>
          <MostPopularProduct productItem={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MostPopularProductList;
