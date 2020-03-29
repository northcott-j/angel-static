import React, { Component } from 'react';

class Resources extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appState: this.props.context
    };
  }

  render() {
    return (
        <div> { this.props.query.name } </div>
    );
  }
}

export default Resources;
