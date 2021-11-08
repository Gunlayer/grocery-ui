import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress, Box } from '@mui/material';
import MostPopularProduct from '../../../components/home/mostPopularProducts/MostPopularProduct';
import { setLoading, logOut } from '../../../redux/slices/authSlice';

const MostPopularProductList = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.auth.loading);
  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

  const API =
    // 'https://raw.githubusercontent.com/Gunlayer/traning/main/dashnoard.json';
    '/api/products/mostpopular';

  const [productList, setProductList] = useState([]);

  const getData = async (API) => {
    dispatch(setLoading(true));

    try {
      const response = await axios.get(API);

      if (response.status === 200) {
        setProductList(response.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getData(API);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Box sx={{ textAlign: 'center', marginTop: 4 }}>
      <CircularProgress />
    </Box>
  ) : productList ? (
    <Grid
      container
      spacing={3}
      sx={{
        paddingLeft: { xs: 4, lg: 10 },
        paddingRight: { xs: 4, lg: 10 },
        marginTop: '50px',
        minWidth: 320,
      }}
    >
      {productList.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} xl={2}>
          <MostPopularProduct productItem={item} />
        </Grid>
      ))}
    </Grid>
  ) : null;
};

export default MostPopularProductList;
