import React from "react";
import Box from "@mui/system/Box";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import KgButton from "./KgButton";
import CommonButton from "../../common/buttons/CommonButton";

//Components style setup
const cardSx = {
  height: "100%",
  padding: "20px 10px",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    borderColor: "primary.main",
  },
};
const cardContentSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: 0,
  maxWidth: "200px",
  "&:last-child": {
    paddingBottom: 0,
  },
};
const boxSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const kgBoxSx = {
  marginTop: "20px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};
const cardNameSx = {
  fontSize: "1.5rem",
  fontWeight: 600,
  letterSpacing: "2px",
  marginTop: "10px",
};
const ratingSx = {
  color: "black",
  fontSize: "18px",
  marginTop: "20px",
  marginBottom: "20px",
};
const cardPriceSx = {
  fontSize: "1.5rem",
  fontWeight: 600,
  letterSpacing: "1px",
};

const MostPopularProduct = ({ productItem }) => {
  return (
    <Card variant="outlined" sx={cardSx}>
      <CardContent sx={cardContentSx}>
        <Box sx={boxSx}>
          <Box>
            <CardMedia
              component="img"
              width="100%"
              image={productItem.image}
              alt="product"
            />
          </Box>
          <Box sx={kgBoxSx}>
            <KgButton kg={1} />
            <KgButton kg={2} />
            <KgButton kg={3} />
          </Box>
          <Typography sx={cardNameSx}>{productItem.name}</Typography>
        </Box>
        <Box sx={boxSx}>
          <Rating
            name="half-rating-read"
            readOnly
            value={productItem.rate}
            precision={0.5}
            sx={ratingSx}
          />
          <Typography color="primary" sx={cardPriceSx}>
            {productItem.price}
          </Typography>
          <CardActions sx={{ marginTop: "20px" }}>
            <CommonButton text="Add To Cart" padding="10px 35px" />
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MostPopularProduct;
