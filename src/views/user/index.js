import React from 'react';
import { withRouter, Switch, Redirect,Route } from 'react-router-dom'
import List from './list'
import Update from './update'

@withRouter
class User extends React.Component {
  
  render() {
    
    return (
      <div>
        <Switch>
          <Route path='/user/list' component={List}/>
          <Route path='/user/update' component={Update}/>
          <Redirect exact from='/user' to='/user/list'/>
        </Switch>
      </div>
    );
  }
}

export default User;


