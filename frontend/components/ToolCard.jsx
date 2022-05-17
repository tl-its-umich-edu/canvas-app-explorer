import React, { useState } from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, IconButton, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

import DataElement from './DataElement';
import AddRemoveButton from './AddRemoveButton';

const ContainedCardMedia = styled(CardMedia)(({ theme }) => ({
  objectFit: 'contain',
  marginBottom: theme.spacing(2)
}));

export default function ToolCard(props) {
  const { tool } = props;

  const [learnMoreActive, setLearnMoreActive] = useState(false);

  return (
    <Card
      variant='outlined'
      sx={{ padding: 1, width: 328, borderColor: 'primary.main', borderWidth: '3px' }}
    >
      <CardContent sx={{ height: 225 }}>
        <ContainedCardMedia
          component='img'
          alt={tool.logo_image_alt_text}
          height='150'
          image={tool.logo_image}
        />
        <Typography variant='body2'>
          <span dangerouslySetInnerHTML={{ __html: tool.short_description }} />
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container justifyContent='space-between'>
          <AddRemoveButton enabled={tool.enabled} />
          <IconButton
            onClick={() => setLearnMoreActive(!learnMoreActive)}
            aria-expanded={learnMoreActive}
            aria-label={`${learnMoreActive ? 'Close ' : ''}Learn More`}
            size='large'
          >
            {!learnMoreActive ? <ExpandMoreIcon /> : <ExpandLessIcon />}
          </IconButton>
        </Grid>
      </CardActions>
      <Collapse in={learnMoreActive} unmountOnExit>
        <CardContent>
          <DataElement name='Description'>
            <span dangerouslySetInnerHTML={{ __html: tool.long_description }} />
          </DataElement>
          <ContainedCardMedia
            component='img'
            alt={tool.main_image_alt_text ?? undefined}
            height='200'
            image={tool.main_image ?? undefined}
          />
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
