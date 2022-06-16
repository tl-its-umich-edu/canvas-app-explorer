import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Grid, InputBase, Paper, Toolbar, Typography } from '@mui/material';

interface HeaderAppBarProps {
  onFilterChange: (v: string) => void
}

export default function HeaderAppBar (props: HeaderAppBarProps) {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Grid container direction='row' alignItems='center'>
          <Grid item xs={6}>
            <Typography variant='h5' component='h1' sx={{ marginRight: 1 }}>Canvas App Explorer</Typography>
          </Grid>
          <Grid
            item
            xs={6}
            container
            justifyContent='flex-start'
            alignItems='center'
            component={Paper}
            variant='outlined'
            sx={{ paddingLeft: 1, paddingRight: 1, paddingTop: 0.5, paddingBottom: 0.5 }}
          >
            <Grid item xs='auto'><SearchIcon sx={{ marginRight: 1 }} /></Grid>
            <Grid item xs>
              <InputBase
                id='tool-filter'
                placeholder='Filter by name or description'
                aria-label='Filter tools by name or description'
                fullWidth
                onChange={(e) => props.onFilterChange(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
