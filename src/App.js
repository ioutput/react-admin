import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import Login from './views/login'
import Layout from './views/layout'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' component={Layout}/>
      </Switch>
      
    );
  }
}

export default App;
