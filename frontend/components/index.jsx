import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';

import theme from '../theme';

import Home from './Home';

ReactDOM.render(
  (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </StyledEngineProvider>
  ),
  document.getElementById('react-app')
);
