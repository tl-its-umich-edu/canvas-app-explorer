import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Alert, Box, Grid, LinearProgress, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import ErrorsDisplay from './ErrorsDisplay';
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
  const [tools, setTools] = useState<undefined | Tool[]>(undefined);

  const { isLoading: getToolsLoading, error: getToolsError } = useQuery('getTools', api.getTools, {
    onSuccess: (data) => setTools(data)
  });

  const onToolUpdate = (newTool: Tool) => {
    /*
    Creates new array with newTool replacing its previous version;
    Uses function inside setState hook to handle overlapping requests
    */
    setTools((oldTools) => {
      if (oldTools === undefined) throw Error('Expected tools variable to be defined!');
      const newTools = oldTools.map(t => t.canvas_id === newTool.canvas_id ? newTool : t);
      return newTools;
    });
  };

  const [searchFilter, setSearchFilter] = useState('');

  const isLoading = getToolsLoading;
  const loadingBlock = isLoading && <LinearProgress sx={{ margin: 2 }} id='tool-card-container-loading' />;

  const errors = [getToolsError].filter(e => e !== null) as Error[];

  let toolCardContainer;
  if (tools !== undefined) {
    const filteredTools = searchFilter !== '' ? filterTools(tools, searchFilter) : tools;
    toolCardContainer = (
      <Grid container spacing={2} justifyContent='center'>
        {
          filteredTools.length > 0
            ? filteredTools.map(t => (
              <Grid item key={t.canvas_id}><ToolCard tool={t} onToolUpdate={onToolUpdate} /></Grid>
            ))
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
        {loadingBlock}
        <Box sx={{ marginBottom: 2 }}><ErrorsDisplay errors={errors} /></Box>
        <div aria-describedby='tool-card-container-loading' aria-busy={getToolsLoading}>
          {toolCardContainer}
        </div>
      </MainContainer>
      <Typography component='footer' sx={{ textAlign: 'center' }}>
        Copyright © 2022 The Regents of the University of Michigan
      </Typography>
    </div>
  );
}

export default Home;
