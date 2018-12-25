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
import ListView from './chatcomponents/ListView';
import ChatField from './chatcomponents/ChatField';
class ChatBox extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div >
      <ChatField />
      <ListView />
      </div>
    );
  }
}


export default ChatBox;
