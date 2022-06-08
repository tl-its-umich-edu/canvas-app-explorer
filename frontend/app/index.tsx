import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material';

import Home from './components/Home';
import theme from './theme';

ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  ),
  document.getElementById('react-app')
);
