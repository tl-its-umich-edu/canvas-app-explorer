import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, ButtonProps } from '@mui/material';

function AddToolButton (props: ButtonProps) {
  return (
    <Button
      id='add-tool-button'
      aria-label='Add tool to course'
      variant='contained'
      startIcon={<AddIcon />}
      {...props}
    >
      Add tool
    </Button>
  );
}

function RemoveToolButton (props: ButtonProps) {
  return (
    <Button
      id='remove-tool-button'
      aria-label='Remove tool from course'
      variant='outlined'
      startIcon={<RemoveIcon />}
      {...props}
    >
      Remove tool
    </Button>
  );
}

export { AddToolButton, RemoveToolButton };
