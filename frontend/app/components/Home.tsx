import React, { useState } from 'react';
import { useAsync, useAsyncCallback } from 'react-async-hook';
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
  const {
    result: tools, loading: getToolsLoading, error: getToolsError, merge: updateGetToolsState
  } = useAsync<Tool[], []>(api.getTools, []);

  const {
    execute: executeUpdateToolNav, error: updateToolNavError, loading: updateToolNavLoading
  } = useAsyncCallback<void, [number, boolean]>(api.updateToolNav, {});

  const doUpdateToolNav = async (canvas_tool_id: number, navEnabled: boolean): Promise<void> => {
    await executeUpdateToolNav(canvas_tool_id, navEnabled);
    if (tools === undefined) throw Error('tools should be defined');
    const newTools = tools.map(t => {
      if (t.canvas_id === canvas_tool_id) {
        console.log('updating');
        return {...t, navigation_enabled: navEnabled };
      } else {
        return t;
      }
    });
    updateGetToolsState({ result: newTools });
  };

  const [searchFilter, setSearchFilter] = useState('');

  const isLoading = getToolsLoading || updateToolNavLoading;
  const loadingBlock = isLoading && (
    <div>Loading . . . </div>
  );

  const errors = [getToolsError, updateToolNavError].filter(e => e !== undefined) as Error[];
  const errorsBlock = (errors.length > 0) && (
    <div>
      {errors.map((e, i) => <Alert key={i} severity='error'>{e.message}</Alert>)}
    </div>
  );

  let toolCardContainer;
  if (tools !== undefined) {
    const filteredTools = searchFilter !== '' ? filterTools(tools, searchFilter) : tools;
    toolCardContainer = (
      <Grid container spacing={2} justifyContent='center'>
        {
          filteredTools.length > 0
            ? filteredTools.map(t => (
              <Grid item key={t.id}>
                <ToolCard tool={t} disabled={updateToolNavLoading} doUpdateToolNav={doUpdateToolNav} />
              </Grid>
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
        {errorsBlock}
        {toolCardContainer}
      </MainContainer>
      <Typography component='footer' sx={{ textAlign: 'center' }}>
        Copyright © 2022 The Regents of the University of Michigan
      </Typography>
    </div>
  );
}

export default Home;
