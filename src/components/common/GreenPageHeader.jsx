import { Box, Typography } from '@mui/material';

const GreenPageHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'primary.main',
        width: '100%',
        height: '100px',
        marginTop: 4,
        minWidth: 320,
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

export default GreenPageHeader;
