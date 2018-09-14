import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from './HomePage';
import About from './components/about';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about' component={About}/>
        </div>
      </Router>
    ); 
  }
}
export default App;