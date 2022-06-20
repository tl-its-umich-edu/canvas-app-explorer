import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material';

import Home from './components/Home';
import { Globals } from './interfaces';
import theme from './theme';

const globalsId = 'cae_globals';
const globalsEl = document.getElementById(globalsId);
if (globalsEl === null) throw Error(`"${globalsId}" was not found!`);
if (globalsEl.textContent === null) throw Error(`No text content in "${globalsId}"!`);
const globals: Globals = Object.freeze(JSON.parse(globalsEl.textContent));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      staleTime: Infinity
    },
    mutations: { retry: false }
  }
});

ReactDOM.render(
  (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Home globals={globals} />
      </ThemeProvider>
    </QueryClientProvider>
  ),
  document.getElementById('react-app')
);
