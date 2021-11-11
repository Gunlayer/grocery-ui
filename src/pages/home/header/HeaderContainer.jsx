import Box from '@mui/system/Box';
import TopBarContainer from './TopBarContainer';
import NavBarContainer from './NavBarContainer';
import SearchBarContainer from './SearchBarContainer';
import DialogCartContainer from '../dialogCart/DialogCartContainer';
import DialogStatusCart from '../../../components/dialogCart/DialogStatusCart';

const headerContainerStyle = { minWidth: 320 };

const HeaderContainer = () => {
  return (
    <Box sx={headerContainerStyle}>
      <TopBarContainer />
      <NavBarContainer />
      <SearchBarContainer />
      <DialogCartContainer />
      <DialogStatusCart />
    </Box>
  );
};

export default HeaderContainer;
