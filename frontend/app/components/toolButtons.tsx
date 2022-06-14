import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, ButtonProps, SvgIconProps } from '@mui/material';

const iconProps: SvgIconProps = {
  fontSize: 'medium',
  sx: { marginRight: 1 }
};

function AddToolButton (props: ButtonProps) {
  return (
    <Button
      id='add-tool-button'
      aria-label='Add tool to course'
      variant='contained'
      {...props}
    >
      <AddIcon {...iconProps} />Add tool
    </Button>
  );
}

function RemoveToolButton (props: ButtonProps) {
  return (
    <Button
      id='remove-tool-button'
      aria-label='Remove tool from course'
      variant='outlined'
      {...props}
    >
      <RemoveIcon {...iconProps} />Remove tool
    </Button>
  );
}

export { AddToolButton, RemoveToolButton };
