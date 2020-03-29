import React, { Component } from 'react';
import './App.css';
import AppProvider from './components/AppProvider';
import AppContext from './app-context';

class App extends Component {
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
      </AppProvider>
    );
  }
}

export default App;
