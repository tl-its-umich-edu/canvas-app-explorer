import React from 'react';
import { Typography } from '@mui/material';

import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

interface DataElementProps {
  name: string
  children: React.ReactNode
}

export default function DataElement (props: DataElementProps) {
  const { name, children } = props;

  return (
    <Container>
      <Typography variant='subtitle1' component='h3' gutterBottom>
        <strong>{name}</strong>
      </Typography>
      <Typography variant='body2'>{children}</Typography>
    </Container>
  );
}
