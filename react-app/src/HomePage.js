import React, { Component } from 'react';
import { Navbar, NavDropdown ,MenuItem, Nav, NavItem, bootStrapUtils} from 'react-bootstrap';
import './App.css';
import socketIOClient from "socket.io-client";
import {NavLink} from 'react-router-dom';
class HomePage extends Component {
  constructor(){
  super();
  this.state = {
  endpoint: 'http://localhost:3500/'

};
const socket = socketIOClient(this.state.endpoint);
socket.on('reception', function(data){
  console.log('someone hit the button');
})


        this.send = ev => {

            socket.emit('emit', 'myemit')
}

}

//sending stuff
  render() {
  // testing for socket connections
  console.log('render method working')
  
  return (


   <div className = 'container'>

   <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Kids-Learn</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        Link
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>

  <button onClick={() => this.send() }>
  Send emit 
  </button>
  <div className= 'customTest bold'>
  What will you play today?
  </div>
  <div className ='card-Holder card '>

  <div className='games'>
  <div className = 'Puzzles card-text'>
   <NavLink to='/about'> 
  PUZZLES
  </NavLink>
  </div>
  <div className = 'math-games'>
  MATH GAMES
  </div>
 
  </div>
  </div>
  </div>
 

  )
}
}
export default HomePage;
