import React from 'react';
import {Button} from '@material-ui/core';
import MainCard from './MainCard';
import Navigation from './Navigation'
class Front extends React.Component{

  //temp button render
  render(){ return (
    <div>
    <Navigation />
    <MainCard />
    </div>
  );
  }
}

export default Front;
