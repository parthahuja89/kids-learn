import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';
import PlayIcon from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/NavigateNext';
import Fab from '@material-ui/core/Fab';
import './card.css'

const styles = {
  card: {
    marginTop: '10%',
    marginLeft: '35%',
    width: '400px',
    height: '425px',
    fontSize: 30,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    fontSize: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  pos: {
    textAlign: 'center',
    marginBottom: 12,
    fontSize: 17,
  },
  textField: {
    marginLeft:  '34%',
  },

  dense: {
    marginTop: 16,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  fab: {
    marginLeft: '42%',
    marginTop: '20%',
  },
};

const stylesIcon = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

function RouteThis(){

}
function MainCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5" component="h2">
          Welcome!
        </Typography>
      </CardContent>
             <form className={classes.container} noValidate autoComplete="off">
             <TextField
                  id="standard-read-only-input"
                  label="Read Only"
                  defaultValue="Hello World"
                  className={classes.textField}
                  margin="normal"
                  InputProps={{
                    readOnly: true,
                  }}
                />
         <TextField
            id="standard-dense"
            label="Dense"
            className={classNames(classes.textField, classes.dense)}
            margin="dense"
          />
     </form>

   {/*
    icon for the next page nav
    redirect to the app page
    */}

   <Fab color="secondary" className={classes.fab}
   >
     <AddIcon />

   </Fab>
    </Card>
    </div>
  );
}

MainCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCard);
