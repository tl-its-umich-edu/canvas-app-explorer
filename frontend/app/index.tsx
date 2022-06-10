import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';

import Home from './components/Home';
import theme from './theme';

const queryClient = new QueryClient();

ReactDOM.render(
  (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </QueryClientProvider>
  ),
  document.getElementById('react-app')
);
