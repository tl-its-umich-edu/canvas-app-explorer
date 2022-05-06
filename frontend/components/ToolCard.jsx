import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, IconButton, Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const DataElement = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2)
}))

const ContainedCardMedia = styled(CardMedia)(({ theme }) => ({
  objectFit: 'contain',
  marginBottom: theme.spacing(2)
}))

export default function ToolCard(props) {
  const { tool } = props;

  const [learnMoreActive, setLearnMoreActive] = useState(false);

  return (
    <Card
      variant='outlined'
      sx={{ padding: 1, width: 375, borderColor: 'primary.main', borderWidth: '3px' }}
    >
      <CardContent sx={{ height: 240 }}>
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
          <Button
            id='add-remove-button'
            aria-label='Add tool to course'
            variant='contained'
            color='success'
          >
            <AddIcon sx={{ marginRight: 1 }} fontSize='medium' />
            <Typography component='span'>Add tool</Typography>
          </Button>
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
          <DataElement>
            <Typography variant='h6' component='h3' gutterBottom>Description</Typography>
            <Typography variant='body2'>
              <span dangerouslySetInnerHTML={{ __html: tool.long_description }} />
            </Typography>
          </DataElement>
          <ContainedCardMedia
            component='img'
            alt={tool.main_image_alt_text ?? undefined}
            height='200'
            image={tool.main_image ?? undefined}
          />
          <DataElement>
            <Typography variant='h6' component='h3' gutterBottom>Privacy Agreement</Typography>
            <Typography variant='body2'>
              <span dangerouslySetInnerHTML={{ __html: tool.privacy_agreement }} />
            </Typography>
          </DataElement>
          <DataElement>
            <Typography variant='h6' component='h3' gutterBottom>Placements</Typography>
            <Typography variant='body2'>
              {tool.canvas_placement_expanded.map(p => p.name).join(', ')}
            </Typography>
          </DataElement>
          <DataElement>
            <Typography variant='h6' component='h3' gutterBottom>Support Resources</Typography>
            <Typography variant='body2'>
              <span dangerouslySetInnerHTML={{ __html: tool.support_resources }} />
            </Typography>
          </DataElement>
        </CardContent>
      </Collapse>
    </Card>
  );
}
