import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import AppContext from './app-context';
import Home from './pages/Home';
import Redirect from './pages/Redirect';


const Routes = () => (
    <App>
        <AppContext.Consumer>
          {(context) => (
            <Switch>
              <Route exact path="/" render={(props) => <Home context={ context } query={ context.parseQuery(props.location) } />} />
              <Route exact path="/resources" render={(props) => <Redirect context={ context }
                                                                          search={ context.getQuery(props.location) }
                                                                          query={ context.parseQuery(props.location) } />} />
            </Switch>
          )}
        </ AppContext.Consumer>
    </App> )
export default Routes
