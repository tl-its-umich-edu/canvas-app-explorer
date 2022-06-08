import React from 'react';
import { Grid, Paper, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
  onFilterChange: (v: string) => void
}

export default function Header (props: HeaderProps) {
  return (
    <Grid
      container
      spacing={2}
      justifyContent='flex-start'
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
        padding: 2,
        marginBottom: 2
      }}
    >
      <Grid item md={6} sm={12} xs={12}>
        <Typography variant='h4' component='h1' sx={{ marginBottom: 1 }}>
          Canvas App Explorer
        </Typography>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        xs={12}
        component={Paper}
        sx={{ padding: 1 }}
      >
        <Grid container justifyContent='flex-start' alignItems='center'>
          <Grid item xs='auto'>
            <SearchIcon sx={{ marginRight: 1 }} />
          </Grid>
          <Grid item xs>
            <TextField
              id='tool-filter'
              placeholder='Filter by name or description'
              aria-label='Filter tools by name or description'
              InputProps={{ sx: { fontSize: '20px' } }}
              variant='standard'
              color='primary'
              fullWidth
              onChange={(e) => props.onFilterChange(e.target.value)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
