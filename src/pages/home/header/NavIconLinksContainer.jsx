import Box from '@mui/system/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavIconLink from '../../../components/home/header/NavIconLink';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartBadge from '../../../components/home/header/ShoppingCartBadge';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { logOut } from '../../../redux/slices/authSlice';
import axios from 'axios';

const navIconStyle = {
  fontSize: 20,
};

const accountBoxIcon = <AccountBoxIcon sx={navIconStyle} />;
const logOutIcon = <LogoutIcon sx={navIconStyle} />;
const shoppingCartIcon = <ShoppingCartIcon sx={navIconStyle} />;
const favoriteIcon = <FavoriteIcon sx={navIconStyle} />;

const NavIconLinksContainer = () => {
  const email = useSelector((state) => state.auth.email);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [authState, setAuthState] = useState(false);

  const dispatch = useDispatch();

  const navIconLinksContainer = {
    display: 'flex',
    justifyContent: { xs: 'center', sm: 'flex-end' },
    flexGrow: 1,
    flex: useMediaQuery('(max-width:475px)') ? 'auto' : 'none',
    gap: 1,
  };

  useEffect(() => {
    setAuthState(isAuth);
  }, [isAuth]);

  const handleClick = () => {
    if (authState === true) {
      dispatch(logOut());
      axios.post('/api/auth/logout');
    }
  };

  return (
    <Box sx={navIconLinksContainer}>
      <NavIconLink
        tooltip={email}
        link={authState ? logOutIcon : accountBoxIcon}
        to={authState ? '/account/logout' : '/account/login'}
        onClick={handleClick}
      />
      <NavIconLink link={shoppingCartIcon} to="#" />
      <ShoppingCartBadge />
      <NavIconLink link={favoriteIcon} to="#" />
    </Box>
  );
};

export default NavIconLinksContainer;
