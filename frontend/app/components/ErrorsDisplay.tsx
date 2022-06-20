import React from 'react';
import { Alert, Grid } from '@mui/material';

interface ErrorsDisplayProps {
  errors: Error[]
}

export default function ErrorsDisplay (props: ErrorsDisplayProps) {
  return (
    <Grid container spacing={1} justifyContent='center' direction='column'>
      {props.errors.map((e, i) => (
        <Grid key={i} item><Alert severity='error'>{e.message}</Alert></Grid>
      ))}
    </Grid>
  );
}
