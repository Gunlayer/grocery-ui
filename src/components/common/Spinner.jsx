import { Box, CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <Box sx={{ textAlign: 'center', margin: 4 }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
