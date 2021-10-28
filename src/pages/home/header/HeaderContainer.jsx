import Box from '@mui/system/Box';
import TopBarContainer from './TopBarContainer';
import NavBarContainer from './NavBarContainer';
import SearchBarContainer from './SearchBarContainer';

const headerContainerStyle = { minWidth: 320 };

const HeaderContainer = () => {
  return (
    <Box sx={headerContainerStyle}>
      <TopBarContainer />
      <NavBarContainer />
      <SearchBarContainer />
    </Box>
  );
};

export default HeaderContainer;
