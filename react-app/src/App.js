import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './HomePage';
import About from './components/about';
import Chat from './components/Chat'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/chat' component = {Chat} />
        </div>
      </Router>
    ); 
  }
}
export default App;