import React, { Component } from 'react';
import AppContext from '../app-context';
import * as queryString from 'query-string';

export default class AppProvider extends Component {
  constructor() {
    super();

    this.state = {
      getQuery: function(location) {
        if (location && location.search) {
          return location.search;
        } else {
          return "";
        }
      },
      parseQuery: function(location) {
        return queryString.parse(this.state.getQuery(location));
      }.bind(this),
      getResources: async function(search) {
        return await window.superFetch('resources/' + search);
      },
      runAnalysis: async function(text) {
        return await window.superFetch('analysis/sentiment?text=' + text);
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
