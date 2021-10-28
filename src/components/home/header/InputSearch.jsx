import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const inputSearchContainerStyle = { display: 'flex', flexGrow: 1 };

const inputBaseContainer = {
  flexGrow: 1,
  border: '1px solid rgba(0,0,0,0.2)',
  transition: 'all 0.3s linear',
  '&:hover': {
    border: '1px solid',
    borderColor: 'primary.main',
  },
};

const inputBaseStyle = {
  padding: 1,
  paddingLeft: 2,
  '& ::-webkit-search-cancel-button': {
    WebkitAppearance: 'none',
    height: 24,
    width: 24,
    backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23777'><path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'/></svg>")`,
    backgroundRepeat: 'no-repeat',
    cursor: 'pointer',
  },
};

const searchIconContainerStyle = {
  borderRadius: 0,
  '&:hover': {
    backgroundColor: 'secondary.main',
  },
};

const searchIconStyle = { color: 'white', fontSize: '20px' };

const InputSearch = () => {
  return (
    <Box sx={inputSearchContainerStyle}>
      <Box sx={inputBaseContainer}>
        <InputBase
          type="search"
          fullWidth
          sx={inputBaseStyle}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }}
        />
      </Box>
      <Button
        color="primary"
        variant="contained"
        disableElevation
        sx={searchIconContainerStyle}
      >
        <SearchIcon sx={searchIconStyle} />
      </Button>
    </Box>
  );
};

export default InputSearch;
