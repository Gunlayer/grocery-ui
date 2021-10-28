import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#89c74a',
    },
    secondary: {
      main: '#ff6600',
    },
    lightGreen: {
      main: '#e0ffc0',
    },
  },
});
