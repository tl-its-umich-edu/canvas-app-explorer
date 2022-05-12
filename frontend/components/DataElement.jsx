import React from 'react';
import { Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export default function DataElement (props) {
  const { name, children } = props;

  return (
    <Container>
      <Typography variant='h6' component='h3' gutterBottom>{name}</Typography>
      <Typography variant='body2'>{children}</Typography>
    </Container>
  );
}
