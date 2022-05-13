import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00274C'
    },
    error: {
      main: '#E31C3D'
    },
    warning: {
      main: '#E2CF2A'
    },
    success: {
      main: '#306430'
    }
  }
});

export default theme;
