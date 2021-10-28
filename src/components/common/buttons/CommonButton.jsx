import { Button } from "@mui/material";

const CommonButton = (props) => {
  const { text, padding, fontSize, onClick } = props;

  const buttonSx = {
    borderRadius: "50px",
    textTransform: "none",
    color: "white",
    padding,
    "&:hover": {
      backgroundColor: "secondary.main",
    },
    fontSize,
  };

  return (
    <Button
      variant="contained"
      color="primary"
      disableElevation
      sx={buttonSx}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CommonButton;
