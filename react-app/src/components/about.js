import React from "react";
import {form, Button , FormGroup, FormControl ,Navbar, NavDropdown ,MenuItem, Nav, NavItem, Panel} from 'react-bootstrap';
import './About.css';
class about extends React.Component{
constructor(props, context){
super(props, context);
this.handle_name = this.handle_name.bind(this);

this.state={ 
  value: ''
};
}
getValidationState() {
  return null;
}

handle_name(e){
  this.setState({ value: e.target.value });
  console.log(e.target.value);
}
render(){
return (
<div> 
  
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
  <div class="row">

    <div class="col-sm-6">
        <div class="card-new">
            <div class="card-body">
                <h3 class="card-title">Heading </h3>
                <p class="card-text">Play this Game </p>
                <a href="#" class="btn btn-primary"> Start </a>  
            </div>
        </div>
    </div>
   
</div>
<div className ='chat-box'>
 <Panel className = 'Panel'> 
 <Panel.Heading>
 <Panel.Title id = 'chat-text'> 
   CHAT BOX
</Panel.Title> 
 </Panel.Heading>
 <Panel.Body> 
   Enter your name: 
   
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
       <Button 
        onClick = {this.handle_submit} 
       > Submit</Button>
       
      </form>
      
</Panel.Body> 
</Panel>
<Panel className = 'Panel-score'> 
 <Panel.Heading>
 <Panel.Title id = 'score_board-text'> 
   SCORE BOARD
</Panel.Title> 
 </Panel.Heading>
 <Panel.Body> 
  String_Player is leading !
</Panel.Body> 
</Panel>
 </div>
 </div>
);
}
}
export default about;