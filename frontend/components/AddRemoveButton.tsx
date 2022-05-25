import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Button, SvgIconProps, Typography } from '@mui/material';

interface AddRemoveButtonProps {
  navEnabled: boolean
  onClick?: () => void
}

interface ButtonProps {
  id: string
  'aria-label': string
  color: 'success' | 'error'
}

export default function AddRemoveButton (props: AddRemoveButtonProps) {
  const { navEnabled, onClick } = props;

  const buttonProps: ButtonProps = !navEnabled
    ? {
      id: 'add-tool-button',
      'aria-label': 'Add tool to course',
      color: 'success'
    }
    : {
      id: 'remove-tool-button',
      'aria-label': 'Remove tool from course',
      color: 'error'
    };

  const commonIconProps: SvgIconProps = {
    fontSize: 'medium',
    sx: { marginRight: 1 }
  };

  return (
    <Button
      variant='contained'
      onClick={onClick}
      {...buttonProps}
    >
      {navEnabled ? <RemoveIcon {...commonIconProps} /> : <AddIcon {...commonIconProps} />}
      <Typography component='span'>{navEnabled ? 'Remove' : 'Add'} tool</Typography>
    </Button>
  );
}
