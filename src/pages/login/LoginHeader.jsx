import { Box, Typography } from '@mui/material';

const LoginHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        width: '100%',
        height: '100px',
      }}
    >
      <Typography
        variant="h5"
        color="common.white"
        sx={{ fontFamily: 'Lemonada' }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default LoginHeader;
