import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import DataElement from './DataElement';
import { AddToolButton, RemoveToolButton } from './toolButtons';
import { Tool } from '../interfaces';

const ContainedCardMedia = styled(CardMedia)(({ theme }) => ({
  objectFit: 'contain',
  marginBottom: theme.spacing(2)
}));

interface CardImageProps {
  image?: string
  component: 'img'
  height: number
  alt: string
}

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard (props: ToolCardProps) {
  const { tool } = props;

  const [showMoreInfo, setShowMoreInfo] = useState(false);

  let logoImageProps: CardImageProps = {
    component: 'img',
    height: 150,
    alt: tool.logo_image_alt_text ?? 'Logo for tool'
  };
  if (tool.logo_image !== null) {
    logoImageProps = { image: tool.logo_image, ...logoImageProps };
  }

  let mainImageProps: CardImageProps = {
    component: 'img',
    height: 150,
    alt: tool.main_image_alt_text ?? 'Image of tool in use'
  };
  if (tool.main_image !== null) {
    mainImageProps = { image: tool.main_image, ...mainImageProps };
  }

  const moreOrLessText = !showMoreInfo ? 'More' : 'Less';

  return (
    <Card
      variant='outlined'
      sx={{ padding: 1, width: 328, borderColor: 'primary.main', borderWidth: '3px' }}
    >
      <CardContent sx={{ height: 225 }}>
        <ContainedCardMedia {...logoImageProps} />
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
          <ContainedCardMedia {...mainImageProps} />
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
