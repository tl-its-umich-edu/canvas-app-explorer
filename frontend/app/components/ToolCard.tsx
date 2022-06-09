import React, { useState } from 'react';
import AddBox from '@mui/icons-material/AddBox';
import { useAsyncCallback } from 'react-async-hook';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Alert, Box, Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid,
  LinearProgress, Typography
} from '@mui/material';

import DataElement from './DataElement';
import ImageDialog from './ImageDialog';
import { AddToolButton, RemoveToolButton } from './toolButtons';
import * as api from '../api';
import { Tool } from '../interfaces';

interface ToolCardProps {
  tool: Tool
  onToolUpdate: (tool: Tool) => void;
}

export default function ToolCard (props: ToolCardProps) {
  const { tool, onToolUpdate } = props;

  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [screenshotDialogOpen, setScreenshotDialogOpen] = useState(false);

  const moreOrLessText = !showMoreInfo ? 'More' : 'Less';

  const {
    execute: executeUpdateToolNav, error: updateToolNavError, loading: updateToolNavLoading
  } = useAsyncCallback<void, [number, boolean]>(api.updateToolNav);

  const doUpdateToolNav = async (canvas_tool_id: number, navEnabled: boolean) => {
    await executeUpdateToolNav(canvas_tool_id, navEnabled);
    const newTool = { ...tool, navigation_enabled: navEnabled };
    onToolUpdate(newTool);
  };

  const isLoading = updateToolNavLoading;
  const loadingBlock = isLoading && (
    <Box sx={{ padding: 2 }}><LinearProgress id='add-remove-tool-button-loading' /></Box>
  );

  const errors = [updateToolNavError].filter(e => e !== undefined) as Error[];
  const errorsBlock = errors.length > 0 && (
    <Grid container spacing={2}>
      {errors.map((e, i) => <Grid key={i} item><Alert key={i} severity='error'>{e.message}</Alert></Grid>)}
    </Grid>
  );

  let mainImageBlock;
  if (tool.main_image !== null) {
    const defaultMainImageAltText = `Image of ${tool.name} tool in use`;
    mainImageBlock = (
      <>
        <CardMedia
          component='img'
          height={150}
          alt={tool.main_image_alt_text ?? defaultMainImageAltText}
          image={tool.main_image ?? ''}
          sx={{ marginBottom: 2, objectFit: 'contain' }}
        />
        <CardActions>
          <Button onClick={() => setScreenshotDialogOpen(true)} startIcon={<AddBox />}>
            Enlarge Screenshot
          </Button>
        </CardActions>
        <ImageDialog
          titleData={{ title: `Screenshot for ${tool.name}`, id: 'main-image-dialog-title' }}
          imageData={{ src: tool.main_image, altText: defaultMainImageAltText }}
          open={screenshotDialogOpen}
          onClose={() => setScreenshotDialogOpen(false)}
        />
      </>
    );
  }

  return (
    <Card
      variant='outlined'
      sx={{ padding: 1, width: 328, borderColor: 'primary.main', borderWidth: '3px' }}
    >
      <CardContent sx={{ height: 225 }}>
        <CardMedia
          component='img'
          height={150}
          alt={tool.logo_image_alt_text ?? `Logo image for ${tool.name} tool`}
          image={tool.logo_image ?? ''}
          sx={{ marginBottom: 2, objectFit: 'contain' }}
        />
        <Typography variant='body2'>
          <span dangerouslySetInnerHTML={{ __html: tool.short_description }} />
        </Typography>
      </CardContent>
      <CardContent>
        {loadingBlock}
        {errorsBlock}
      </CardContent>
      <CardActions>
        <Grid
          container
          justifyContent='space-between'
          aria-describedby='add-remove-tool-button-loading'
          aria-busy={updateToolNavLoading}
        >
          {
            tool.navigation_enabled
              ? (
                <RemoveToolButton
                  disabled={updateToolNavLoading}
                  onClick={() => doUpdateToolNav(tool.canvas_id, false)}
                />
              )
              : (
                <AddToolButton
                  disabled={updateToolNavLoading}
                  onClick={() => doUpdateToolNav(tool.canvas_id, true)}
                />
              )
          }
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
          {mainImageBlock}
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
