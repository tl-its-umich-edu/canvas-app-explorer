import React, { useState } from "react";
import {
  Button, Card, CardHeader, CardActions, CardContent, CardMedia, Collapse, IconButton,
  makeStyles, Typography
} from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(1),
    width: 350
  },
  dataElement: {
    marginBottom: theme.spacing(2)
  },
  expandButton: {
    marginLeft: 'auto'
  },
  image: {
    objectFit: 'contain',
    marginBottom: theme.spacing(2)
  }
}));

export default function ToolCard(props) {
  const classes = useStyles();
  const { tool } = props;

  const [learnMoreActive, setLearnMoreActive] = useState(false);

  return (
    <Card className={classes.card}>
      <CardContent>
        <CardHeader title={tool.name} />
        <CardMedia
          className={classes.image}
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
        <IconButton
          className={classes.expandButton}
          onClick={() => setLearnMoreActive(!learnMoreActive)}
          aria-expanded={learnMoreActive}
          aria-label={`${learnMoreActive ? 'Close ' : ''}Learn More`}
        >
          {!learnMoreActive ? <ExpandMoreIcon /> : <ExpandLessIcon />}
        </IconButton>
      </CardActions>
      <Collapse in={learnMoreActive} unmountOnExit>
        <CardContent>
          <div className={classes.dataElement}>
            <Typography variant='h6' component='h3' gutterBottom>Description</Typography>
            <Typography variant='body2'>
              <span dangerouslySetInnerHTML={{ __html: tool.long_description }} />
            </Typography>
          </div>
          <CardMedia
            className={classes.image}
            component='img'
            alt={tool.main_image_alt_text}
            height='200'
            image={tool.main_image}
          />
          <div className={classes.dataElement}>
            <Typography variant='h6' component='h3' gutterBottom>Privacy Agreement</Typography>
            <Typography variant='body2'>
              <span dangerouslySetInnerHTML={{ __html: tool.privacy_agreement }} />
            </Typography>
          </div>
          <div className={classes.dataElement}>
            <Typography variant='h6' component='h3' gutterBottom>Placements</Typography>
            <Typography variant='body2'>
              {tool.canvas_placement_expanded.map(p => p.name).join(', ')}
            </Typography>
          </div>
          <div className={classes.dataElement}>
            <Typography variant='h6' component='h3' gutterBottom>Support Resources</Typography>
            <Typography variant='body2'>
              <span dangerouslySetInnerHTML={{ __html: tool.support_resources }} />
            </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
