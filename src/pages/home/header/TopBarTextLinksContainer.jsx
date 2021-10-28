import Box from '@mui/system/Box';
import TopBarLink from '../../../components/home/header/TopBarLink';
import useMediaQuery from '@mui/material/useMediaQuery';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Typography from '@mui/material/Typography';

const textLinksContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 2,
};

const textLinkWithIconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const textLinkStyle = {
  fontSize: 14,
  paddingLeft: { xs: 1 },
  paddingRight: { xs: 1 },
  fontFamily: 'Open Sans',
};

const iconStyle = {
  fontSize: 16,
};

const email = (
  <Box sx={textLinkWithIconContainerStyle}>
    <EmailIcon sx={iconStyle} />
    <Typography sx={textLinkStyle}>info@example.com</Typography>
  </Box>
);
const tel = (
  <Box sx={textLinkWithIconContainerStyle}>
    <PhoneIcon sx={iconStyle} />
    <Typography sx={textLinkStyle}>0000 - 123456789</Typography>
  </Box>
);

const dividingLineStyle = { height: 20, borderRight: '1px solid white' };

const dividingLine = <Box sx={dividingLineStyle}></Box>;

const TopBarTextLinksContainer = () => {
  return (
    <Box sx={textLinksContainerStyle}>
      <TopBarLink link={email} to="mailto:info@example.com" />
      {useMediaQuery('(max-width:340px)') ? null : dividingLine}
      <TopBarLink link={tel} to="tel:0000 - 123456789" />
    </Box>
  );
};

export default TopBarTextLinksContainer;
