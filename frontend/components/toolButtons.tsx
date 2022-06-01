import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, ButtonProps, SvgIconProps, Typography } from '@mui/material';

const iconProps: SvgIconProps = {
  fontSize: 'medium',
  sx: { marginRight: 1 }
};

function AddToolButton (props: ButtonProps) {
  return (
    <Button
      id='add-tool-button'
      aria-label='Add tool to course'
      color='success'
      variant='contained'
      {...props}
    >
      <AddIcon {...iconProps} />
      <Typography component='span'>Add tool</Typography>
    </Button>
  );
}

function RemoveToolButton (props: ButtonProps) {
  return (
    <Button
      id='remove-tool-button'
      aria-label='Remove tool from course'
      color='error'
      variant='contained'
      {...props}
    >
      <RemoveIcon {...iconProps} />
      <Typography component='span'>Remove tool</Typography>
    </Button>
  );
}

export { AddToolButton, RemoveToolButton };
