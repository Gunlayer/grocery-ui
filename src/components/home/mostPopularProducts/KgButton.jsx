import { Button } from "@mui/material";
import React from "react";

const kgbutton = {
  color: "white",
  textTransform: "none",
  borderRadius: "15px",

  lineHeight: 0,
  padding: "15px 8px",
  fontSize: "1rem",
  minWidth: 0,
};

const KgButton = ({ kg }) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      disableElevation
      sx={kgbutton}
    >
      {kg} Kg
    </Button>
  );
};

export default KgButton;
