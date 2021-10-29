import { Grid } from '@mui/material';

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MostPopularProduct from '../../../components/home/mostPopularProducts/MostPopularProduct';

const MostPopularProductList = () => {
  const API =
    'https://raw.githubusercontent.com/Gunlayer/traning/main/dashnoard.json';
  const [productList, setProductList] = useState([]);
  const getData = async (API) => {
    const response = await axios.get(API);
    console.log(response.data);
    setProductList(response.data);
  };

  useEffect(() => {
    getData(API);
  }, []);

  return (
    <Grid
      container
      spacing={3}
      sx={{
        paddingLeft: { xs: 4, lg: 10 },
        paddingRight: { xs: 4, lg: 10 },
        marginTop: '50px',
      }}
    >
      {productList.map((item) => (
        <Grid key={item.id} item xs={12} sm={6} xl={2}>
          <MostPopularProduct key={item.id} productItem={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MostPopularProductList;
