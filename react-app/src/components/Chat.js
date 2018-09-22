import React from 'react';
import io from "socket.io-client";

import {form, Button , FormGroup, FormControl } from 'react-bootstrap';
class Chat extends React.Component{


constructor(props){
    super(props);

    this.state = {
    value: '',
    messages: ''
        }

    this.socket = io('http://localhost:3500/chatroom');

    this.connect_room = this.connect_room.bind(this);
    this.handle_name = this.handle_name.bind(this);

    this.checkstatus  = this.checkstatus.bind(this);


}

componentDidMount(){

    this.socket.on('recieve_message',function(message){
    this.setState({
      messages: message
    })
    console.log('You got a message: ' , message);
  }.bind(this))
  }

connect_room(){
    console.log(this.state.value);
    var chatroom = io.connect('http://localhost:3500/chatroom');
    chatroom.on('welcome', function(mesf){
    console.log ('Welcome' , mesf);
    });

   }


 send_message(){
  var socket = this.socket;
  socket.emit('send_message' , this.state.value);
}



 getValidationState() {
    return null;
}

checkstatus(){
  console.log(this.state.messages);
}
handle_name(e){
    this.setState({ value: e.target.value });
    console.log(this.state.value);
}

render(){
return(
<div>
<form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <FormControl
            type="text"
            value={this.state.value}
            onChange={this.handle_name}
          />
          <FormControl.Feedback />
        </FormGroup>
        </form>
        <button onClick={() => this.connect_room() }>
        Join Lobby
        </button>
        <button
        onClick = {() => this.send_message()}
        >
        send message
   </button>
  <button
   onClick = {() => this.checkstatus()}
  >
  Get message status
  </button>
   Here are your messages:

  {this.state.messages}
</div>
);
}
}
export default Chat;
