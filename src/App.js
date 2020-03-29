import React, { Component } from 'react';
import './App.css';
import AppProvider from './components/AppProvider';
import AppContext from './app-context';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class App extends Component {
  componentWillMount() {
    const fetch = window.fetch;
    window.superFetch = async function() {
      const endpoint = arguments[0];
      const options = arguments[1] || {};
      arguments[0] = process.env.REACT_APP_API_URL + endpoint;
      // Update credentials to include cookie
      options['credentials'] = 'include';
      arguments[1] = options;

      const rawResponse = await fetch.apply(global, arguments)
      const response = await rawResponse.json()

      if(response.error) {
        NotificationManager.error(response.error);
      }

      if (response.data) {
        return Promise.resolve(response.data);
      } else {
        return Promise.resolve(response)
      }
    }
  }

  render() {
    return (
      <AppProvider>
        <AppContext.Consumer>
          {(context) => (
            <div className="App">
              <div className="bg-g1 size1 flex-w flex-col-c-sb p-b-35 respon1">
                {this.props.children}
                <span className="s1-txt3 txt-center">
                  @ 2020 Recorded Future & Expedition Hacks
                  </span>
              </div>
            </div>
          )}
        </ AppContext.Consumer>
        <NotificationContainer />
      </AppProvider>
    );
  }
}

export default App;
