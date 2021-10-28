import Box from '@mui/material/Box';
import NavLink from '../../../components/home/header/NavMenuLink';

const linksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const navLinks = {
  Home: '/home',
  Shop: '/shop',
  'Best Sellers': '/best-sellers',
  'Deal of the Day': '/deal-of-the-day',
  Pages: '/pages',
  'Contact Us': '/contact-us',
};

const NavMenu = () => {
  return (
    <Box sx={linksContainerStyle}>
      {Object.entries(navLinks).map(([link, to]) => (
        <NavLink key={link} link={link} to={to} />
      ))}
    </Box>
  );
};

export default NavMenu;
