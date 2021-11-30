import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, InputBase } from '@mui/material';
import { setFilters } from '../../../redux/slices/adminProducts';

const inputSearchContainerStyle = {
  display: 'flex',
  flexGrow: 1,
  minWidth: '400px',
  maxWidth: '600px',
};

const inputBaseContainerStyle = {
  flexGrow: 1,
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: '50px',
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

const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

const InputSearch = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => state.adminProducts.filters.name);

  const [inputState, setInputState] = useState(name);

  useEffect(() => {
    setInputState(name);
  }, [name]);

  const handleSearchChange = debounce((e) => {
    const trimmedName = e.target.value.trim().toLowerCase();
    if (name !== trimmedName) {
      dispatch(
        setFilters({
          pageNumber: 1,
          name: trimmedName,
        })
      );
    }
  });

  return (
    <Box sx={inputSearchContainerStyle}>
      <Box sx={inputBaseContainerStyle}>
        <InputBase
          type="search"
          fullWidth
          sx={inputBaseStyle}
          placeholder="Search..."
          onChange={(e) => {
            setInputState(e.target.value);
            handleSearchChange(e);
          }}
          value={inputState}
        />
      </Box>
    </Box>
  );
};

export default InputSearch;
