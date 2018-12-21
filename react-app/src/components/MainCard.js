import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import './card.css'

const styles = {
  card: {
    marginTop: 150,
    marginLeft: 350,
    height: 300,
    width: 500,
    alignContent: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {

    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
};

function MainCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be
          {bull}
          nev
          {bull}o{bull}
          lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
         <Chip label="3982" className={classes.chip} />
      </CardActions>
    </Card>
  );
}

MainCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCard);
