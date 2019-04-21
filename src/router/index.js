import React from 'react';
import { withRouter, Switch, Redirect,Route } from 'react-router-dom'
import Index from '../views/index'

@withRouter
class Router extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Redirect exact from='/' to='/index'/>
        </Switch>
      </div>
    );
  }
}

export default Router;
