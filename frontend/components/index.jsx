import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core';

import theme from '../theme';

import Home from './Home';

ReactDOM.render(
  (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  ),
  document.getElementById('react-app')
);
