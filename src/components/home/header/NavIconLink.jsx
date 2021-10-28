import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const linkContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'common.black',
  '& :hover': {
    color: 'primary.main',
    cursor: 'pointer',
  },
};

const linkStyle = {
  display: 'flex',
  transition: 'all 0.3s linear',
  padding: 1,
  textDecoration: 'none',
};

const NavIconLink = ({ link, to }) => {
  return (
    <Box sx={linkContainerStyle}>
      <Link href={to} color="inherit" sx={linkStyle}>
        {link}
      </Link>
    </Box>
  );
};

export default NavIconLink;
