import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import AppContext from './app-context';
import Home from './pages/Home';
import Resources from './pages/Resources';


const Routes = () => (
    <App>
        <AppContext.Consumer>
          {(context) => (
            <Switch>
              <Route exact path="/" render={(props) => <Home context={ context } query={ context.parseQuery(props.location) } />} />
              <Route exact path="/resources" render={(props) => <Resources context={ context } query={ context.parseQuery(props.location) } />} />
            </Switch>
          )}
        </ AppContext.Consumer>
    </App> )
export default Routes
