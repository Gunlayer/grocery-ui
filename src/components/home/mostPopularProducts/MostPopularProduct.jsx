import Box from '@mui/system/Box';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import KgButton from './KgButton';
import CommonButton from '../../common/buttons/CommonButton';

//Components style setup
const cardSx = {
  height: '100%',
  padding: '20px 10px',
  borderRadius: '10px',
  display: 'flex',
  justifyContent: 'center',
  '&:hover': {
    borderColor: 'primary.main',
  },
};
const cardContentSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 0,
  '&:last-child': {
    paddingBottom: 0,
  },
};
const boxSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const kgBoxSx = {
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
};
const cardNameSx = {
  fontSize: '1.5rem',
  fontWeight: 600,
  letterSpacing: '1px',
  marginTop: '10px',
  textAlign: 'center',
};
const ratingSx = {
  color: 'black',
  fontSize: '18px',
  marginTop: '20px',
  marginBottom: '20px',
};
const cardPriceSx = {
  fontSize: '1.5rem',
  fontWeight: 600,
  letterSpacing: '1px',
};

const MostPopularProduct = ({ productItem }) => {
  const priceCheck = (price) => {
    if (price % Math.trunc(price) === 0) {
      return Math.trunc(price);
    } else {
      return price;
    }
  };
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
            {productItem.sizes.map((item) => (
              <KgButton
                key={productItem.sizes.indexOf(item)}
                units={productItem.sizeType === 'KILOS' ? 'Kg' : 'Pcs'}
                kg={item}
              />
            ))}
          </Box>
          <Typography sx={cardNameSx}>{productItem.name}</Typography>
        </Box>
        <Box sx={boxSx}>
          <Rating
            name="half-rating-read"
            readOnly
            value={productItem.rating}
            precision={0.5}
            sx={ratingSx}
          />
          <Typography color="primary" sx={cardPriceSx}>
            {`$${priceCheck(productItem.price)}`}
          </Typography>
          <CardActions sx={{ marginTop: '20px' }}>
            <CommonButton padding="10px 35px">{'Add to Cart'}</CommonButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MostPopularProduct;
