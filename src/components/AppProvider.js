import React, { Component } from 'react';
import AppContext from '../app-context';
import * as queryString from 'query-string';

export default class AppProvider extends Component {
  constructor() {
    super();

    this.state = {
      resources: {},
      parseQuery: function(location) {
        if (location && location.search) {
          return queryString.parse(location.search);
        } else {
          return "";
        }
      }
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
