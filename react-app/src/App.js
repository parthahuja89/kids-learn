import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './HomePage';
import About from './components/about';
import Chat from './components/Chat';
import Front from './components/Front';
import MainCard from './components/MainCard';
import MainApp from './components/MainApp';
import ChatBox from './components/ChatBox'
import ListView from './components/chatcomponents/ListView';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/Front' component={Front}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/chat' component = {Chat} />
        <Route exact path='/Main_App' component = {MainApp} />
        <Route exact path='/ChatBox' component = {ChatBox} />
        <Route exact path='/ListView' component = {ListView} />
        </div>
      </Router>
    );
  }
}
export default App;
