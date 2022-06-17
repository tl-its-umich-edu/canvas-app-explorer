import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';

const DialogImg = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  objectFit: 'contain'
}));

interface ImageDialogProps {
  titleData: {
    title: string
    id: string
  },
  imageData: {
    src: string
    altText: string
  }
  open: boolean
  onClose: () => void;
}

export default function ImageDialog (props: ImageDialogProps) {
  const { titleData, imageData, open, onClose } = props;
  return (
    <Dialog
      fullWidth
      maxWidth='xl'
      open={open}
      onClose={onClose}
      aria-labelledby={titleData.id}
    >
      <DialogTitle id={titleData.id}>{titleData.title}</DialogTitle>
      <DialogContent>
        <DialogImg tabIndex={0} src={imageData.src} alt={imageData.altText} />
      </DialogContent>
      <DialogActions>
        <Button aria-label='Close image dialog' startIcon={<CloseIcon />} onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}