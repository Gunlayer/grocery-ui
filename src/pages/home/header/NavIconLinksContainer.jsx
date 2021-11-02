import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavIconLink from '../../../components/home/header/NavIconLink';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartBadge from '../../../components/home/header/ShoppingCartBadge';

const navIconStyle = {
  fontSize: 20,
};

const accountBoxIcon = <AccountBoxIcon sx={navIconStyle} />;
const shoppingCartIcon = <ShoppingCartIcon sx={navIconStyle} />;
const favoriteIcon = <FavoriteIcon sx={navIconStyle} />;

const NavIconLinksContainer = () => {
  const navIconLinksContainer = {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-end' },
    flexGrow: 1,
    flex: useMediaQuery('(max-width:475px)') ? 'auto' : 'none',
    gap: 1,
  };

  return (
    <Box sx={navIconLinksContainer}>
      <NavIconLink link={accountBoxIcon} to="/account/login" />
      <NavIconLink link={shoppingCartIcon} to="#" />
      <ShoppingCartBadge />
      <NavIconLink link={favoriteIcon} to="#" />
    </Box>
  );
};

export default NavIconLinksContainer;
