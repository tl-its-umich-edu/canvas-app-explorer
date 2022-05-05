import React from 'react';
import { FilledInput, Grid, InputAdornment, makeStyles, Paper, Typography } from '@material-ui/core';
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
    fontSize: '25px'
  }
}));

export default function Header (props) {
  const classes = useStyles()
  return (
    <Grid container className={classes.titleBar} spacing={2} justifyContent='center'>
      <Grid item md={5} sm={12}>
        <Typography variant='h4' component='h1'>Canvas App Explorer</Typography>
      </Grid>
      <Grid item md={5} sm={12} className={classes.filterField} component={Paper}>
        <FilledInput
          variant='filled'
          classes={{ input: classes.inputText }}
          className={classes.filterField}
          fullWidth
          color='primary'
          id='tool-filter'
          placeholder='Filter by name'
          aria-label='Filter tools by name'
          onChange={(e) => props.onFilterChange(e.target.value)}
          startAdornment={<SearchIcon fontSize='medium' className={classes.searchIcon} />}
        />
      </Grid>
    </Grid>
  );
}
