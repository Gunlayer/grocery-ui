import { Typography } from '@mui/material';

const DashboardError = ({ error }) => {
  return (
    <Typography variant="h3" sx={{ textAlign: 'center', marginTop: '30px' }}>
      {error}
    </Typography>
  );
};

export default DashboardError;
