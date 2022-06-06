import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button, Card, CardActions, CardContent, CardMedia, Collapse, Dialog, DialogActions,
  DialogContent, DialogTitle, Grid, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import DataElement from './DataElement';
import { AddToolButton, RemoveToolButton } from './toolButtons';
import { Tool } from '../interfaces';

const DialogImg = styled('img')(() => ({
  width: '100%',
  height: 'auto',
  objectFit: 'scale-down'
}));

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard (props: ToolCardProps) {
  const { tool } = props;

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [screenshotDialogOpen, setScreenshotDialogOpen] = useState(false);

  const moreOrLessText = !showMoreInfo ? 'More' : 'Less';

  return (
    <Card
      variant='outlined'
      sx={{ padding: 1, width: 328, borderColor: 'primary.main', borderWidth: '3px' }}
    >
      <CardContent sx={{ height: 225 }}>
        <CardMedia
          component='img'
          height={150}
          alt={tool.logo_image_alt_text ?? 'Logo for tool'}
          image={tool.logo_image ?? ''}
          sx={{ marginBottom: 2, objectFit: 'contain' }}
        />
        <Typography variant='body2'>
          <span dangerouslySetInnerHTML={{ __html: tool.short_description }} />
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent='space-between'>
          {tool.navigation_enabled ? <RemoveToolButton /> : <AddToolButton />}
          <Button
            onClick={() => setShowMoreInfo(!showMoreInfo)}
            aria-expanded={showMoreInfo}
            aria-label={`Show ${moreOrLessText} Info`}
            startIcon={!showMoreInfo ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          >
            {moreOrLessText}
          </Button>
        </Grid>
      </CardActions>
      <Collapse in={showMoreInfo} unmountOnExit>
        <CardContent>
          <DataElement name='Description'>
            <span dangerouslySetInnerHTML={{ __html: tool.long_description }} />
          </DataElement>
          <CardMedia
            component='img'
            height={150}
            alt={tool.main_image_alt_text ?? 'Image of tool in use'}
            image={tool.main_image ?? ''}
            sx={{ marginBottom: 2, objectFit: 'contain' }}
          />
          <CardActions>
            <Button onClick={() => setScreenshotDialogOpen(true)}>Show Screenshot</Button>
          </CardActions>
          <Dialog
            fullWidth
            maxWidth='xl'
            open={screenshotDialogOpen}
            onClose={() => setScreenshotDialogOpen(false)}
            aria-labelledby='main-image-dialog-title'
          >
            <DialogTitle id='main-image-dialog-title'>
              Screenshot of {tool.name} in use
            </DialogTitle>
            <DialogContent>
              <DialogImg
                tabIndex={0}
                src={tool.main_image ?? ''}
                alt={tool.main_image_alt_text ?? ''}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setScreenshotDialogOpen(false)}>Close</Button>
            </DialogActions>
          </Dialog>
          <DataElement name='Privacy Agreement'>
            <span dangerouslySetInnerHTML={{ __html: tool.privacy_agreement }} />
          </DataElement>
          <DataElement name='Placements'>
            {tool.canvas_placement_expanded.map(p => p.name).join(', ')}
          </DataElement>
          <DataElement name='Support Resources'>
            <span dangerouslySetInnerHTML={{ __html: tool.support_resources }} />
          </DataElement>
        </CardContent>
      </Collapse>
    </Card>
  );
}
