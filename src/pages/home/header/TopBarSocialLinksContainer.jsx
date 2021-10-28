import Box from '@mui/system/Box';
import TopBarLink from '../../../components/home/header/TopBarLink';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingLeft: 1,
  paddingRight: 1,
  gap: 5,
};

const socialLinkStyle = {
  fontSize: 16,
};

const facebookLink = <FacebookIcon sx={socialLinkStyle} />;
const pinterestLink = <PinterestIcon sx={socialLinkStyle} />;
const instagramLink = <InstagramIcon sx={socialLinkStyle} />;

const TopBarSocialLinksContainer = () => {
  return (
    <Box sx={socialLinksContainerStyle}>
      <TopBarLink link={facebookLink} to="#" />
      <TopBarLink link={pinterestLink} to="#" />
      <TopBarLink link={instagramLink} to="#" />
    </Box>
  );
};

export default TopBarSocialLinksContainer;
