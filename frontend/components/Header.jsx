import React from 'react';
import { FilledInput, Grid, InputAdornment, makeStyles, Paper, TextField, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  titleBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2)
  },
  searchIcon: {
    marginRight: theme.spacing(1)
  },
  filterField: {
    background: theme.palette.primary.contrastText
  },
  inputText: {
    fontSize: '20px'
  }
}));

export default function Header (props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.titleBar} spacing={2} justifyContent='center'>
      <Grid item md={5} sm={12}>
        <Typography variant='h4' component='h1'>Canvas App Explorer</Typography>
      </Grid>
      <Grid
        item
        container
        md={5}
        sm={12}
        className={classes.filterField}
        component={Paper}
        alignItems='flex-end'
      >
        <Grid container justifyContent='flex-start' alignItems='center'>
          <Grid item xs='auto'>
            <SearchIcon fontSize='medium' className={classes.searchIcon} />
          </Grid>
          <Grid item xs>
            <TextField
              id='tool-filter'
              placeholder='Filter by name or description'
              aria-label='Filter tools by name or description'
              InputProps={{ classes: { input: classes.inputText } }}
              variant='standard'
              className={classes.filterField}
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
