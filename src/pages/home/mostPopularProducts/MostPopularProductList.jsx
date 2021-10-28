import { Grid } from "@mui/material";

import axios from "axios";
import React, { useState, useEffect } from "react";
import MostPopularProduct from "../../../components/home/mostPopularProducts/MostPopularProduct";

const MostPopularProductList = () => {
  const API = "https://my.api.mockaroo.com/grocery.json?key=0aed9380";
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
    <Grid container spacing={3} sx={{ padding: "0 20px" }}>
      {productList.map((item) => (
        <Grid key={item.name} item xs={12} sm={6} md={6} lg={6} xl={2}>
          <MostPopularProduct productItem={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MostPopularProductList;
