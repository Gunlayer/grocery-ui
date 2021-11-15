import { Button } from '@mui/material';

const CommonButton = (props) => {
  const { width, padding, fontSize, children } = props;

  const buttonSx = {
    width,
    borderRadius: '50px',
    textTransform: 'none',
    color: 'white',
    padding,
    '&:hover': {
      backgroundColor: 'secondary.main',
    },
    fontSize,
  };

  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      sx={buttonSx}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
