import { CardMedia } from '@mui/material';
import { Box } from '@mui/system';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const cardLeftSide = {
  width: '200px',
  '@media (max-width: 750px)': {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
};

const deleteItemButton = {
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  left: 0,
  color: 'primary.main',
  ':hover': {
    color: 'secondary.main',
  },
};

const ProductImage = ({ image, name, deleteCartItemHandle }) => {
  return (
    <>
      <Box sx={cardLeftSide}>
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            width="100%"
            image={image}
            alt={`image of ${name}`}
          />
          <HighlightOffIcon
            fontSize="large"
            sx={deleteItemButton}
            onClick={deleteCartItemHandle}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductImage;
