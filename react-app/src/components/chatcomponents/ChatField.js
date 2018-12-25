import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Send from '@material-ui/icons/Send';import List from '@material-ui/core/List';


const styles = theme => ({
  textField: {
    marginTop: 400,
    marginLeft: 900,
    flexBasis: 200,
  },
  root: {
   display: 'flex',
   flexWrap: 'wrap',
 },
 withoutLabel: {
   marginTop: theme.spacing.unit * 3,
 },
});

class ChatField extends React.Component {
  state = {
    amount: '',
    message: ''
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleSend = () => {
    //user clicked send
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {/* adornment textField for user inputs */}
        <FormControl className={classNames(classes.margin, classes.textField)}>

          <Input
            id="adornment-password"
            value={this.state.message}

            onChange={this.handleChange('message')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={this.handleSend}
                >
                   <Send />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    );
  }
}

ChatField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChatField);
