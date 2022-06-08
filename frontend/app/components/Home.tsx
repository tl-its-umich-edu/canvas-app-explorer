import React, { useState } from 'react';
import { useAsync } from 'react-async';
import { Alert, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import HeaderAppBar from './HeaderAppBar';
import ToolCard from './ToolCard';
import * as api from '../api';
import '../css/Home.css';
import { Tool } from '../interfaces';

const MainContainer = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3)
}));

const filterTools = (tools: Tool[], filter: string): Tool[] => {
  const filterLower = filter.toLowerCase();
  return tools.filter(
    (tool) => (
      tool.name.toLowerCase().includes(filterLower) ||
      tool.short_description.toLowerCase().includes(filterLower))
  );
};

function Home () {
  const { data: tools, isPending, error } = useAsync(api.getTools);
  const [searchFilter, setSearchFilter] = useState('');

  let toolCardContainer;
  if (error !== undefined) {
    toolCardContainer = <Alert severity='error'>{error.message}</Alert>;
  } else if (isPending || tools === undefined) {
    toolCardContainer = <div>Loading . . . </div>;
  } else {
    const filteredTools = searchFilter !== '' ? filterTools(tools, searchFilter) : tools;
    toolCardContainer = (
      <Grid container spacing={2} justifyContent='center'>
        {
          filteredTools.length > 0
            ? filteredTools.map(t => <Grid item key={t.id}><ToolCard tool={t} /></Grid>)
            : <Grid item><Alert severity='info'>No matching results</Alert></Grid>
        }
      </Grid>
    );
  }

  return (
    <div id='root'>
      <HeaderAppBar onFilterChange={(v) => setSearchFilter(v)} />
      <MainContainer>
        <Typography variant='h6' component='h2' sx={{ textAlign: 'center', marginBottom: 3 }}>
          Find the best tools for your class and students
        </Typography>
        {toolCardContainer}
      </MainContainer>
      <Typography component='footer' sx={{ textAlign: 'center' }}>
        Copyright © 2022 The Regents of the University of Michigan
      </Typography>
    </div>
  );
}

export default Home;
