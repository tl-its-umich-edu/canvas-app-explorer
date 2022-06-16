import React from 'react';
import { AppBar, Grid, InputBase, Paper, Toolbar, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

interface HeaderProps {
  onFilterChange: (v: string) => void
}

const StyledPaper = styled(Paper)(({ theme }) => ({
  variant: 'outlined',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5)
}));

export default function HeaderAppBar (props: HeaderProps) {
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
            component={StyledPaper}
          >
            <Grid item xs='auto'>
              <SearchIcon sx={{ marginRight: 1 }} />
            </Grid>
            <Grid item xs>
              <InputBase
                id='tool-filter'
                placeholder='Filter by name or description'
                aria-label='Filter tools by name or description'
                color='primary'
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
