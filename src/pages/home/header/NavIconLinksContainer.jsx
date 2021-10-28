import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavIconLink from '../../../components/home/header/NavIconLink';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SelectCurrencyContainer from './SelectCurrencyContainer';

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
  };

  return (
    <Box sx={navIconLinksContainer}>
      <NavIconLink link={accountBoxIcon} to="#" />
      <NavIconLink link={shoppingCartIcon} to="#" />
      <NavIconLink link={favoriteIcon} to="#" />
      <SelectCurrencyContainer />
    </Box>
  );
};

export default NavIconLinksContainer;
