import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    height: "100%",
    flexDirection: "column"
  },
  media: {
    height: 140,
  },
});

export default function ResourceCard(resource) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/images/icons/angel.png"
          title={ resource.name }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { resource.name }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { resource.description }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={ { alignItems: "flex-end", flex: 1 } }>
        <Button size="small" color="primary" href={ "tel:" + resource.phone } target="_blank">
          Call
        </Button>
        <Button size="small" color="primary" href={ "mailto://" + resource.email } target="_blank">
          Email
        </Button>
        <Button size="small" color="primary" href={ "https://" + resource.website } target="_blank">
          Visit Website
        </Button>
      </CardActions>
    </Card>
  );
}
