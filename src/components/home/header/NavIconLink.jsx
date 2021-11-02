import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'common.black',
  '& a': {
    color: 'inherit',
    display: 'flex',
    transition: 'color 0.3s linear',
    padding: 1,
    textDecoration: 'none',
    '&:hover': {
      color: 'primary.main',
    },
  },
};

const NavIconLink = ({ link, to }) => {
  return (
    <Box sx={linkContainerStyle}>
      <Link to={to}>{link}</Link>
    </Box>
  );
};

export default NavIconLink;
